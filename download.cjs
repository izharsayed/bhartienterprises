const fs = require('fs');
const path = require('path');
const https = require('https');

const projects = [
    '5g-rollout-north',
    'fiber-backbone-express',
    'expressway-utility',
    'grid-substation-11kv'
];
const baseDir = path.join(process.cwd(), 'src', 'assets', 'projects');

if (!fs.existsSync(baseDir)) {
    fs.mkdirSync(baseDir, { recursive: true });
}

async function download(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            if (response.statusCode === 302 || response.statusCode === 301) {
                https.get(response.headers.location, (res) => {
                    res.pipe(file);
                    file.on('finish', () => {
                        file.close();
                        resolve();
                    });
                }).on('error', (err) => {
                    fs.unlink(dest, () => {});
                    reject(err);
                });
            } else {
                response.pipe(file);
                file.on('finish', () => {
                    file.close();
                    resolve();
                });
            }
        }).on('error', (err) => {
            fs.unlink(dest, () => {});
            reject(err);
        });
    });
}

async function main() {
    for (const project of projects) {
        const projectDir = path.join(baseDir, project);
        if (!fs.existsSync(projectDir)) {
            fs.mkdirSync(projectDir, { recursive: true });
        }
        for (let i = 1; i <= 6; i++) {
            const dest = path.join(projectDir, `img${i}.jpg`);
            const url = `https://picsum.photos/seed/${project}-${i}/800/600`;
            console.log(`Downloading ${url} to ${dest}`);
            await download(url, dest);
        }
    }
    console.log('Finished downloading images');
}

main();

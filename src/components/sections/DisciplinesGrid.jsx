import { Reveal, RevealStagger, RevealItem } from "@/components/ui/Reveal";
import telecomImg from "@/assets/disc-telecom.jpg";
import fiberImg from "@/assets/disc-fiber.jpg";
import civilImg from "@/assets/disc-civil.jpg";
import electricalImg from "@/assets/disc-electrical.jpg";
import engineeringImg from "@/assets/disc-engineering.jpg";
import transportImg from "@/assets/disc-transport.jpg";
import labourImg from "@/assets/disc-labour.jpg";
import outsourcingImg from "@/assets/disc-outsourcing.jpg";

const disciplines = [
  {
    image: civilImg,
    title: "Earthwork & Site Development",
    desc: "Reliable excavation, soil removal, land leveling, and site preparation with modern machinery and skilled operators.",
    tag: "Earthwork",
  },
  {
    image: transportImg,
    title: "Road & Civil Construction",
    desc: "Road construction and civil works undertaken with a strong focus on quality, safety, and timely execution.",
    tag: "Civil",
  },
  {
    image: engineeringImg,
    title: "Foundation Work",
    desc: "Strong and reliable foundation solutions with precise planning, quality materials, and skilled execution.",
    tag: "Foundations",
  },
  {
    image: electricalImg,
    title: "RCC & Structural Work",
    desc: "Professional RCC and structural construction services ensuring strength, durability, and safety at every stage.",
    tag: "Structural",
  },
  {
    image: outsourcingImg,
    title: "Industrial Shed Construction",
    desc: "Reliable industrial shed solutions with strong structures, efficient planning, and quality execution.",
    tag: "Industrial",
  },
  {
    image: telecomImg,
    title: "Structural Steel Work",
    desc: "Structural steel fabrication and erection with a focus on strength, precision, safety, and timely completion.",
    tag: "Steelwork",
  },
  {
    image: fiberImg,
    title: "Pipeline Installation",
    desc: "Professional pipeline laying and installation work with proper planning, safe handling, and precise site execution.",
    tag: "Pipelines",
  },
  {
    image: labourImg,
    title: "Utility & Civil Works",
    desc: "Reliable utility and civil infrastructure services ensuring safe installation and quality workmanship.",
    tag: "Utilities",
  },
];

export function DisciplinesGrid() {
  return (
    <section className="relative py-28 bg-[var(--surface)]">
      {/* subtle background pattern */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, color-mix(in oklab, var(--brand-blue) 12%, transparent) 0%, transparent 60%), radial-gradient(circle at 80% 20%, color-mix(in oklab, var(--brand-accent) 10%, transparent) 0%, transparent 50%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6">
        {/* heading */}
        <Reveal>
          <div className="text-center">
            <div className="inline-flex rounded-full border border-[var(--brand)]/10 bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-[var(--brand)]">
              Our Disciplines
            </div>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-[var(--brand)] sm:text-5xl">
              Comprehensive Services.{" "}
              <span className="text-gradient">One Accountable Partner.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
              From earthwork and foundations to industrial sheds, RCC structures, and pipeline networks — we bring specialist expertise and modern equipment across every domain of construction.
            </p>
          </div>
        </Reveal>

        {/* grid */}
        <RevealStagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {disciplines.map((d) => (
            <RevealItem key={d.title}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/60 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-transparent hover:shadow-2xl hover:shadow-[var(--brand)]/10">
                {/* image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={d.image}
                    alt={d.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  {/* tag pill */}
                  <div className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-[var(--brand)] backdrop-blur-sm">
                    {d.tag}
                  </div>
                </div>

                {/* content */}
                <div className="flex flex-1 flex-col p-5">
                  <div className="font-display text-lg font-semibold text-[var(--brand)]">
                    {d.title}
                  </div>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {d.desc}
                  </p>

                  {/* animated underline */}
                  <div className="mt-4 h-0.5 w-0 rounded-full bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-accent)] transition-all duration-300 group-hover:w-full" />
                </div>

                {/* hover gradient border */}
                <div
                  className="pointer-events-none absolute inset-0 -z-10 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(135deg, color-mix(in oklab, var(--brand-blue) 15%, transparent), color-mix(in oklab, var(--brand-accent) 15%, transparent))",
                  }}
                />
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

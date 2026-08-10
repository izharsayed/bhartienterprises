import { QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";

const BASE = "https://www.bhartienterprises.in";

const orgSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE}/#organization`,
      name: "Bharti Enterprises",
      url: BASE,
      logo: `${BASE}/favicon.ico`,
      description:
        "Bharti Enterprises is an engineering-first infrastructure company delivering telecom tower construction, OFC fiber network laying and splicing, FTTH installation, civil construction, electrical substation work, engineering services, transportation, and labour supply across India.",
      areaServed: "IN",
      foundingDate: "2014",
      numberOfEmployees: { "@type": "QuantitativeValue", minValue: 100 },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "hello@bhartienterprises.in",
        telephone: "+91-9158077725",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE}/#website`,
      url: BASE,
      name: "Bharti Enterprises",
      publisher: { "@id": `${BASE}/#organization` },
      inLanguage: "en-IN",
    },
  ],
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl font-semibold text-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            aria-label="Go back to Bharti Enterprises homepage"
            className="inline-flex items-center justify-center rounded-full bg-[var(--brand)] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[var(--brand-blue)]"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold text-foreground">This page didn&apos;t load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            aria-label="Try reloading the page"
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full bg-[var(--brand)] px-4 py-2 text-sm text-white"
          >
            Try again
          </button>
          <a
            href="/"
            aria-label="Go back to Bharti Enterprises homepage"
            className="rounded-full border border-input px-4 py-2 text-sm"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Bharti Enterprises — Telecom Infrastructure & Fiber Network Company India" },
      {
        name: "description",
        content:
          "Bharti Enterprises is India's leading telecom infrastructure company specialising in OFC fiber network laying, FTTH installation, civil construction, electrical substations, and engineering services pan-India.",
      },
      { name: "author", content: "Bharti Enterprises" },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
      { name: "theme-color", content: "#0B1F3A" },
      { name: "application-name", content: "Bharti Enterprises" },
      { name: "geo.region", content: "IN" },
      { name: "geo.placename", content: "India" },
      { property: "og:site_name", content: "Bharti Enterprises" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:type", content: "website" },
      {
        property: "og:title",
        content: "Bharti Enterprises — Telecom Infrastructure & Fiber Network Company India",
      },
      {
        property: "og:description",
        content:
          "India's engineering-first partner for telecom towers, OFC fiber networks, civil construction, electrical and managed infrastructure services.",
      },
      {
        property: "og:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/09953d9d-7fe3-43eb-87d8-793eec233dc9/id-preview-5031fd4d--76817cdc-c786-4053-aa60-283e2c3584ec.lovable.app-1784474468931.png",
      },
      { property: "og:url", content: BASE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@bhartienterprises" },
      {
        name: "twitter:title",
        content: "Bharti Enterprises — Telecom Infrastructure & Fiber Network Company India",
      },
      {
        name: "twitter:description",
        content:
          "India's engineering-first partner for telecom towers, OFC fiber networks, civil construction, electrical and managed infrastructure services.",
      },
      {
        name: "twitter:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/09953d9d-7fe3-43eb-87d8-793eec233dc9/id-preview-5031fd4d--76817cdc-c786-4053-aa60-283e2c3584ec.lovable.app-1784474468931.png",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "apple-touch-icon", href: "/favicon.ico" },
      { rel: "manifest", href: "/manifest.json" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Raleway:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }) {
  return (
    <html lang="en-IN">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <ScrollProgress />
      <Navbar />
      <main id="main-content" className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}

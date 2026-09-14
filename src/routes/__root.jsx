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

const BASE = "https://bhartientreprise.in";

const orgSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "GeneralContractor", "ConstructionBusiness"],
      "@id": `${BASE}/#organization`,
      name: "Bharti Enterprises",
      alternateName: [
        "Bharti Entreprise",
        "bhartientreprise.in",
        "Bharti Enterprises Ahmednagar",
        "Bharti Enterprises Construction",
        "Bharti Enterprises Infrastructure",
      ],
      legalName: "Bharti Enterprises",
      taxID: "27BWIPS4029L1ZZ",
      url: BASE,
      logo: `${BASE}/favicon.svg`,
      image: `${BASE}/favicon.svg`,
      description:
        "Bharti Enterprises (bhartientreprise.in) is a premier civil construction and infrastructure company in Ahmednagar, Maharashtra. Specializing in residential & commercial construction, industrial sheds, earthwork, foundations, RCC structures, roads, and pipeline works.",
      telephone: "+91-8799859344",
      email: "Bhartienterprises.tsp@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "NIL, Dargah Dayra, Ahmadnagar",
        addressLocality: "Ahmednagar",
        addressRegion: "Maharashtra",
        postalCode: "414001",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 19.0952,
        longitude: 74.748,
      },
      areaServed: [
        { "@type": "City", name: "Ahmednagar" },
        { "@type": "State", name: "Maharashtra" },
        { "@type": "Country", name: "India" },
      ],
      foundingDate: "2014",
      numberOfEmployees: { "@type": "QuantitativeValue", minValue: 100 },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "Bhartienterprises.tsp@gmail.com",
        telephone: "+91-8799859344",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "Marathi"],
      },
      sameAs: [BASE, "https://bhartientreprise.in"],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE}/#website`,
      url: BASE,
      name: "Bharti Enterprises",
      alternateName: "bhartientreprise.in",
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
      { title: "Bharti Enterprises — Construction & Infrastructure Company | bhartientreprise.in" },
      {
        name: "description",
        content:
          "Official website of Bharti Enterprises (bhartientreprise.in). Leading construction and infrastructure solutions: civil works, industrial sheds, road works, foundations, RCC structures, and pipelines in Ahmednagar, Maharashtra & across India.",
      },
      {
        name: "keywords",
        content:
          "Bharti Enterprises, bhartientreprise.in, Bharti Entreprise, Bharti Enterprises Ahmednagar, Bharti Enterprises Maharashtra, civil construction company India, industrial shed construction, road contractor Ahmednagar, pipeline laying contractor, infrastructure company India",
      },
      { name: "author", content: "Bharti Enterprises" },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
      { name: "theme-color", content: "#0B1F3A" },
      { name: "application-name", content: "Bharti Enterprises" },
      { name: "geo.region", content: "IN-MH" },
      { name: "geo.placename", content: "Ahmednagar, Maharashtra, India" },
      { name: "geo.position", content: "19.0952;74.7480" },
      { name: "ICBM", content: "19.0952, 74.7480" },
      { property: "og:site_name", content: "Bharti Enterprises" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:type", content: "website" },
      {
        property: "og:title",
        content: "Bharti Enterprises — Construction & Infrastructure Company | bhartientreprise.in",
      },
      {
        property: "og:description",
        content:
          "Official website of Bharti Enterprises (bhartientreprise.in). Quality construction, industrial sheds, civil works, roads, foundations, and pipelines across India.",
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
        content: "Bharti Enterprises — Construction & Infrastructure Company | bhartientreprise.in",
      },
      {
        name: "twitter:description",
        content:
          "Official website of Bharti Enterprises (bhartientreprise.in). Delivering reliable, high-quality infrastructure and construction solutions across India.",
      },
      {
        name: "twitter:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/09953d9d-7fe3-43eb-87d8-793eec233dc9/id-preview-5031fd4d--76817cdc-c786-4053-aa60-283e2c3584ec.lovable.app-1784474468931.png",
      },
    ],
    links: [
      { rel: "canonical", href: BASE },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/logo1.png" },
      { rel: "shortcut icon", href: "/favicon.ico" },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "apple-touch-icon", href: "/logo1.png" },
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

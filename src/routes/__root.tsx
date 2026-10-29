import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import { AnnouncementBar, SiteHeader, SiteFooter, WhatsAppFab } from "../components/amigo/site";
import { SiteMotion } from "../components/amigo/SiteMotion";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Amigo Fuego" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Amigo Fuego" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        type: "image/x-icon",
        href: "https://cdn.jsdelivr.net/gh/doloresmat-ops/amigo-fuego@main/public/favicon.ico",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "https://cdn.jsdelivr.net/gh/doloresmat-ops/amigo-fuego@main/public/favicon-16x16.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "https://cdn.jsdelivr.net/gh/doloresmat-ops/amigo-fuego@main/public/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "48x48",
        href: "https://cdn.jsdelivr.net/gh/doloresmat-ops/amigo-fuego@main/public/favicon-48x48.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "https://cdn.jsdelivr.net/gh/doloresmat-ops/amigo-fuego@main/public/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "https://cdn.jsdelivr.net/gh/doloresmat-ops/amigo-fuego@main/public/android-chrome-192x192.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        href: "https://cdn.jsdelivr.net/gh/doloresmat-ops/amigo-fuego@main/public/android-chrome-512x512.png",
      },
      {
        rel: "manifest",
        href: "/site.webmanifest",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["FoodEstablishment", "LocalBusiness"],
          name: "Amigo Fuego",
          description: "Catering de asado argentino y parrilla a domicilio con maestro parrillero en CDMX.",
          servesCuisine: "Argentina",
          priceRange: "Desde $550 MXN por persona",
          currenciesAccepted: "MXN",
          address: { "@type": "PostalAddress", addressLocality: "Ciudad de México", addressCountry: "MX" },
          areaServed: [
            { "@type": "City", name: "Ciudad de México" },
            { "@type": "AdministrativeArea", name: "Estado de México" },
          ],
          makesOffer: {
            "@type": "Offer",
            itemOffered: { "@type": "Service", serviceType: "CateringService", name: "Catering de asado argentino para eventos corporativos, producciones y bodas" },
            priceSpecification: { "@type": "PriceSpecification", minPrice: 550, priceCurrency: "MXN" },
          },
        }),
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

const GTM_ID = "GTM-W885FZJ9";

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());",
          }}
        />
        <script async src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`} />
      </head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
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
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <Outlet />
         <SiteMotion />
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </QueryClientProvider>
  );
}

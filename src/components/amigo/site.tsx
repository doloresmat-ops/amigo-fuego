import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Logo } from "./Logo";

export const WA = "https://wa.me/520000000000"; // placeholder: número real pendiente

export const NAV = [
  { to: "/", label: "Inicio" },
  { to: "/corporativo", label: "Corporativo" },
  { to: "/bodas", label: "Bodas" },
  { to: "/menu", label: "Menú" },
  { to: "/historia", label: "Historia" },
] as const;

export function CtaLink({
  children,
  variant = "crema",
  to = "#cotizar",
}: {
  children: ReactNode;
  variant?: "crema" | "oliva" | "ghost";
  to?: string;
}) {
  const cls = {
    crema: "bg-crema text-carbon hover:bg-tierra",
    oliva: "bg-cielo text-blanco hover:brightness-110",
    ghost: "border border-crema/40 text-crema hover:bg-crema hover:text-carbon/10",
  }[variant];
  const base = `inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors ${cls}`;
  if (to.startsWith("#")) return <a href={to} className={base}>{children}</a>;
  return <Link to={to} className={base}>{children}</Link>;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-carbon/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3 md:px-10">
        <Link to="/" aria-label="Amigo Fuego, inicio">
          <Logo tone="crema" />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              className="text-sm text-crema/75 transition-colors hover:text-crema"
              activeProps={{ className: "text-sm text-tierra" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#cotizar"
            className="rounded-full bg-cielo px-5 py-2.5 text-sm font-bold text-blanco transition hover:brightness-110"
          >
            Cotizar
          </a>
          <button
            className="rounded-md border border-border px-3 py-2 text-sm text-crema lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Abrir menú"
          >
            {open ? "Cerrar" : "Menú"}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border px-5 pb-5 lg:hidden">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="block py-3 font-display text-xl text-crema"
            >
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function WhatsAppFab() {
  return (
    <a
      href={WA}
      target="_blank"
      rel="noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="animate-soft-pulse fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-wa text-blanco shadow-xl transition-transform hover:scale-105 md:h-[72px] md:w-[72px]"
    >
      <svg viewBox="0 0 24 24" className="h-9 w-9 md:h-10 md:w-10" fill="currentColor" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z" />
      </svg>
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-brasa">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4 md:px-10">
        <div className="md:col-span-2">
          <Logo tone="crema" />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            No vendemos carne, vendemos un ritual. Parrilla argentina con maestro
            parrillero para empresas, producciones y bodas.
          </p>
        </div>
        <div>
          <p className="eyebrow text-tierra">Sitio</p>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-crema/80 hover:text-crema">{n.label}</Link>
              </li>
            ))}
            <li>
              <Link to="/aviso-de-privacidad" className="text-crema/80 hover:text-crema">
                Aviso de privacidad
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="eyebrow text-tierra">Servicios</p>
          <ul className="mt-4 space-y-2 text-sm text-crema/80">
            <li><Link to="/corporativo">Catering de asado en CDMX</Link></li>
            <li><Link to="/corporativo">Asados a domicilio para empresas</Link></li>
            <li><Link to="/corporativo">Banquetes corporativos</Link></li>
            <li><Link to="/bodas">Catering para bodas y tornabodas</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border px-5 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Amigo Fuego · Parrilla Argentina · Ciudad de México
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  children,
  crumb,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  children?: ReactNode;
  crumb?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <img src={image} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="golden absolute inset-0 -z-10" />
      <div className="mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-end px-5 pb-16 pt-28 md:px-10 md:pb-24">
        {crumb && (
          <nav aria-label="Migas de pan" className="mb-6 text-sm text-crema/70">
            <ol className="flex items-center gap-2">
              <li><Link to="/" className="hover:text-crema">Inicio</Link></li>
              <li aria-hidden="true">›</li>
              <li aria-current="page" className="text-tierra">{crumb}</li>
            </ol>
          </nav>
        )}
        <p className="eyebrow text-tierra">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl leading-[1.05] text-crema md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg text-crema/85">{subtitle}</p>
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28 ${className}`}>
      {children}
    </section>
  );
}

export function TrustStrip() {
  const clientes = ["Logo cliente", "Logo cliente", "Logo cliente", "Logo cliente", "Logo cliente", "Logo cliente"];
  return (
    <section className="border-y border-border bg-brasa py-12">
      <p className="px-5 text-center font-display text-lg italic text-tierra md:text-xl">
        La opción de confianza para productoras, agencias y despachos corporativos.
      </p>
      <div className="mt-7 overflow-hidden">
        <div className="flex w-max animate-marquee gap-14">
          {[...clientes, ...clientes].map((c, i) => (
            <span key={i} className="whitespace-nowrap font-display text-lg text-crema/50">{c}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function pageHead(path: string, title: string, description: string, crumb?: string) {
  return {
    scripts: crumb
      ? [{
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Inicio", item: "/" },
              { "@type": "ListItem", position: 2, name: crumb, item: path },
            ],
          }),
        }]
      : [],
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: path },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: path }],
  };
}

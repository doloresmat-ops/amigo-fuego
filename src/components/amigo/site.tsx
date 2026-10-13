import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";

export const WA = "https://wa.me/520000000000"; // placeholder: número real pendiente

/** Enlace de WhatsApp con el mensaje ya escrito para el cliente. */
export function waLink(mensaje: string) {
  return `${WA}?text=${encodeURIComponent(mensaje)}`;
}

export const NAV = [
  { to: "/", label: "Inicio" },
  { to: "/eventos-empresas", label: "Eventos para Empresas" },
  { to: "/bodas", label: "Eventos Sociales" },
  { to: "/historia", label: "Historia" },
] as const;

export type MenuDropItem = { label: string; text: string; to: "/menu" | "/tablas"; hash?: string };

/** Desplegable "Menú" del menú principal: 4 servicios (anclas en /menu) + Tablas. */
export const MENU_DROPDOWN: { label: string; items: MenuDropItem[] } = {
  label: "Menú",
  items: [
    { label: "Parrilla Argentina", text: "El ritual del asado, al centro de la mesa.", to: "/menu", hash: "parrilla" },
    { label: "Barra de Pizzas", text: "Masa madre a la parrilla, ensalada y pastas.", to: "/menu", hash: "pizza" },
    { label: "Barra de Bebidas", text: "Vermut, fernet, Malbec y más.", to: "/menu", hash: "bebidas" },
    { label: "Choripaneada", text: "Choripanes al momento para tu fiesta.", to: "/menu", hash: "choripaneada" },
    { label: "Tablas de Picada", text: "Para llevar. Cuatro tamaños, de $750 a $1,500 MXN.", to: "/tablas" },
  ],
};

export function CtaLink({
  children,
  to = "#cotizar",
  secondary = false,
}: {
  children: ReactNode;
  to?: string;
  secondary?: boolean;
}) {
  const variant = secondary ? "menuOutline" : "conversion";
  if (to.startsWith("#")) return <Button asChild variant={variant} size="conversion"><a href={to}>{children}</a></Button>;
  return <Button asChild variant={variant} size="conversion"><Link to={to}>{children}</Link></Button>;
}

function Chevron({ open, className = "h-3.5 w-3.5" }: { open: boolean; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`${className} shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Desplegable "Menú" del menú principal. */
function NavDropdown({
  open,
  setOpen,
  active,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
  active: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const hovered = useRef(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onDown = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
    };
  }, [open, setOpen]);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => {
        hovered.current = true;
        setOpen(true);
      }}
      onMouseLeave={() => {
        hovered.current = false;
        setOpen(false);
      }}
    >
      <button
        type="button"
        onClick={() => setOpen(hovered.current ? true : !open)}
        aria-expanded={open}
        aria-haspopup="true"
        className={`flex items-center gap-1.5 text-base transition-colors hover:text-crema ${active ? "text-tierra" : "text-crema/75"}`}
      >
        {MENU_DROPDOWN.label}
        <Chevron open={open} />
      </button>
      {open && (
        <div className="absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 pt-4">
          <ul className="animate-nav-drop rounded-xl border border-crema/15 bg-carbon p-2 shadow-2xl">
            {MENU_DROPDOWN.items.map((it) => (
              <li key={it.label}>
                <Link
                  to={it.to}
                  {...(it.hash ? { hash: it.hash } : {})}
                  onClick={() => setOpen(false)}
                  className="group block rounded-lg px-4 py-3 transition-colors hover:bg-crema/5"
                >
                  <span className="block font-display text-lg text-crema transition-colors group-hover:text-tierra">{it.label}</span>
                  <span className="mt-1 block text-sm leading-snug text-crema/60">{it.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const pathname = useLocation({ select: (l) => l.pathname });
  const tablasActive = pathname === "/tablas" || pathname === "/menu";

  useEffect(() => {
    setOpen(false);
    setDropOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-carbon/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 md:px-10 md:py-5">
        <Link to="/" aria-label="Amigo Fuego, inicio" className="shrink-0">
          <img
            src="/logo-header@2x.webp"
            srcSet="/logo-header@2x.webp 111w, /logo-medium.webp 159w"
            sizes="(min-width: 768px) 80px, 56px"
            width={111}
            height={112}
            alt="Amigo Fuego"
            fetchPriority="high"
            className="h-14 w-auto md:h-20"
          />

        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.slice(0, 3).map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              className="text-base text-crema/75 transition-colors hover:text-crema"
              activeProps={{ className: "text-base text-tierra" }}
            >
              {n.label}
            </Link>
          ))}
          <NavDropdown open={dropOpen} setOpen={setDropOpen} active={tablasActive} />
          {NAV.slice(3).map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-base text-crema/75 transition-colors hover:text-crema"
              activeProps={{ className: "text-base text-tierra" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <CtaLink>Cotizar</CtaLink>
          <Button
            variant="outline"
            className="rounded-md border border-border px-3 py-2 text-sm text-crema lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Abrir menú"
          >
            {open ? "Cerrar" : "Menú"}
          </Button>
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
          <div className="border-t border-crema/10">
            <button
              type="button"
              onClick={() => setDropOpen((v) => !v)}
              aria-expanded={dropOpen}
              className={`flex w-full items-center justify-between py-3 font-display text-xl transition-colors ${tablasActive ? "text-tierra" : "text-crema"}`}
            >
              {MENU_DROPDOWN.label}
              <Chevron open={dropOpen} className="h-4 w-4" />
            </button>
            {dropOpen && (
              <div className="pb-2 pl-4">
                {MENU_DROPDOWN.items.map((it) => (
                  <Link
                    key={it.label}
                    to={it.to}
                    {...(it.hash ? { hash: it.hash } : {})}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-lg text-crema/80 transition-colors hover:text-crema"
                  >
                    {it.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
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
    <footer className="border-t border-crema/20 bg-carbon">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4 md:px-10">
        <div className="md:col-span-2">
          <img
            src="/logo-footer@2x.webp"
            srcSet="/logo-footer@2x.webp 95w, /logo-medium.webp 159w"
            sizes="(min-width: 768px) 96px, 80px"
            width={95}
            height={96}
            alt="Amigo Fuego"
            className="h-20 w-auto md:h-24"
          />

          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            No vendemos carne, vendemos un ritual. Parrilla argentina con maestro
            parrillero para empresas, producciones y eventos sociales.
          </p>
        </div>
        <div>
          <p className="eyebrow text-tierra">Sitio</p>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                 <Link to={n.to} className="text-crema/80 transition-colors hover:text-cielo">{n.label}</Link>
              </li>
            ))}
            <li>
               <Link to="/aviso-de-privacidad" className="text-crema/80 transition-colors hover:text-cielo">
                Aviso de privacidad
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="eyebrow text-tierra">Servicios</p>
          <ul className="mt-4 space-y-2 text-sm text-crema/80">
             <li><Link to="/eventos-empresas" className="transition-colors hover:text-cielo">Eventos para Empresas</Link></li>
             <li><Link to="/eventos-empresas" className="transition-colors hover:text-cielo">Producciones y Cines</Link></li>
             <li><Link to="/bodas" className="transition-colors hover:text-cielo">Eventos Sociales</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-crema/20 px-5 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Amigo Fuego · Parrilla Argentina
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
  overlay = false,
}: {
  overlay?: boolean | "fuerte";
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  children?: ReactNode;
  crumb?: string;
}) {
  return (
    <section data-parallax-hero className="relative isolate overflow-hidden">
      <img data-hero-image src={image} alt="" className="hero-parallax-image absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className={overlay ? `absolute inset-0 -z-10 ${overlay === "fuerte" ? "bg-carbon/80" : "bg-carbon/70"}` : "golden absolute inset-0 -z-10"} />
      {overlay === "fuerte" && <div className="absolute inset-0 -z-10 bg-gradient-to-t from-carbon via-carbon/45 to-transparent" />}
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
        <p className="eyebrow inline-flex w-fit items-center rounded-full border border-tierra/60 bg-carbon/70 px-4 py-2 text-tierra backdrop-blur-sm">
          {eyebrow}
        </p>
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
    <section className="border-y border-carbon/15 bg-crema py-12 text-carbon">
      <p className="px-5 text-center font-display text-lg italic text-oxido md:text-xl">
        La opción de confianza para productoras, agencias y despachos corporativos.
      </p>
      <div className="mt-7 overflow-hidden">
        <div className="flex w-max animate-marquee gap-14">
          {[...clientes, ...clientes].map((c, i) => (
            <span key={i} className="whitespace-nowrap font-display text-lg text-carbon/45">{c}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function pageHead(path: string, title: string, description: string, crumb?: string) {
  const url = new URL(path, "https://pixel-perfect-render-34682.lovable.app").href;
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
       { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

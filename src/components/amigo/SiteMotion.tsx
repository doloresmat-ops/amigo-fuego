import { useLocation } from "@tanstack/react-router";
import { useEffect } from "react";

/** Progressive enhancement: content stays visible if scripting or observation is unavailable. */
export function SiteMotion() {
  const pathname = useLocation({ select: (location) => location.pathname });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const main = document.querySelector("main");
    if (!main || !('IntersectionObserver' in window)) return;

    const targets = Array.from(main.querySelectorAll<HTMLElement>("h1, h2, h3, p, img:not([data-hero-image]), [data-stagger] > *"))
      .filter((element) => !element.closest("[data-stagger] > *:not(:scope)"));
    // A card animates as a unit; its headings, copy and imagery should not animate twice.
    const cards = new Set(main.querySelectorAll("[data-stagger] > *"));
    const reveals = targets.filter((element) => cards.has(element) || !element.parentElement?.closest("[data-stagger] > *"));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: "0px 0px 40px 0px" });

    reveals.forEach((element) => {
      element.classList.add("site-reveal");
      observer.observe(element);
    });

    const hero = main.querySelector<HTMLElement>("[data-parallax-hero]");
    const heroImage = hero?.querySelector<HTMLElement>("[data-hero-image]");
    let frame = 0;
    const updateParallax = () => {
      frame = 0;
      if (!hero || !heroImage) return;
      const rect = hero.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      const shift = Math.max(0, Math.min(hero.offsetHeight, -rect.top)) * 0.17;
      heroImage.style.setProperty("--hero-shift", `${shift}px`);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(updateParallax);
    };
    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      observer.disconnect();
      reveals.forEach((element) => element.classList.remove("site-reveal", "is-revealed"));
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
      heroImage?.style.removeProperty("--hero-shift");
    };
  }, [pathname]);

  return null;
}
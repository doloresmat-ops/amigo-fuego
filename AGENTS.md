<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Route conversion links through the shared CtaLink and design-system Button so primary actions remain visually consistent across pages.
- Use CtaLink's secondary variant only for a menu action paired with a primary quote action, so adjacent calls to action keep a clear hierarchy.
- Looping photo marquees use equal duplicated groups and honor reduced-motion preferences so the cycle has no visible jump and stays accessible.
- Keep site-wide scroll reveals and hero parallax in one progressive-enhancement controller, with reduced-motion fallbacks and no hidden server-rendered content.
- Use the shared PageHero cinematic mode for centered photo banners so they retain the global parallax controller without changing other page layouts.
- Choose a PageHero overlay level instead of adding per-page scrim layers: the lightest keeps the photograph clearly visible while still lifting the headline, the middle one is the default, and the strongest is for banners whose photo is very bright.
- Keep the board presentation, size options, and ingredient groups in one shared catalog consumed by Home and /tablas to prevent inconsistent product information.
- Keep main-menu dropdown entries in the shared header module so the desktop panel and the mobile accordion always render the same destinations from one definition.
- Keep the site-wide campaign strip in the shared header module, rendered once above the sticky header, so every page shows the same announcement and points to the same destination without per-page copies.
- Serve brand marks and the Menu/Tablas photography from jsDelivr (`https://cdn.jsdelivr.net/gh/doloresmat-ops/amigo-fuego@main/public/...`) now that the source repository is public; the `@main` branch segment is required because the repo has no tags.


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

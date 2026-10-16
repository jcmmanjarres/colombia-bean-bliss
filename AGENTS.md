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
- Static GitHub Pages output is produced by `bun run build:static` (vite build + scripts/prerender.mjs rendering each page from the built server into dist/client); add new page paths to that script. Why: built-in TanStack prerender hits a redirect loop on subpages.
- BASE_PATH env sets vite base and router basepath for repo-subpath hosting.

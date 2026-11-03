# Raffinity docs

User guides for operators who run a competition site on Raffinity. Built with VitePress and published at https://docs.raffinity.co.uk through GitHub Pages.

## Work on it

```
npm install
npm run dev        # local preview
npm run check      # dash check, then a full build
```

## Where things are

- `docs/` the pages. One folder per category, each with an `index.md`.
- `docs/.vitepress/config.mts` the sidebar, top menu and search. To add a guide, add it under its category's `items`.
- `docs/.vitepress/theme/` the Raffinity look (colours, fonts, home page heading, 404).
- `docs/public/` logo, favicon and screenshots (`docs/public/screenshots/`).

## House rules for writing

- Friendly, plain, British English. Short sentences. Say what to do, with the real names from the admin.
- No em dashes and no en dashes. The CI check fails the build if one appears.
- No emojis used as icons.
- Money, refund, limit and legal points must match what the platform really does. If a rule is unclear, ask the platform team instead of guessing.

# Yarn monorepo demo

🚧 _This demo is being built_ 🚧

## What this shows

This repo is a simplified example of our company's monorepo that houses several projects, some relatively unrelated. We use the repo root for devDependencies only, all "real projects" are in subfolders, some using Yarn 1, some Yarn 2 + PnP, some Yarn 2 + node_modules, some are not JS projects at all.

## Repo structure

```
. (<repo-root>) 1️⃣
├── docs        2️⃣
└── packages    3️⃣
    └── app     4️⃣
```

### 1️⃣ `<repo-root>`

- Contains two core `devDependencies`, TypeScript and Prettier.
- Uses PnP to avoid root-level `node_modules`.
- Uses pnpified VSCode SDKs (`yarn pnpify --sdk vscode`).
- Contains two test files, [`hello.js`](hello.js) and [`hello.ts`](hello.ts), to play with TS and Prettier.

### 2️⃣ `docs`

- Showcases an "isolated" project (no relation to `packages`).
- Uses Yarn 1 + node_modules.

### 3️⃣ `packages`

- Root of Yarn workspaces (`"workspaces": [...]` is defined here, _not_ in `<repo-root>/package.json`).
- Uses Yarn 2.4 and PnP.

### 4️⃣ `packages/app`

- Basic Next.js app
- TypeScript setup, e.g., `pages/index.tsx` instead of `.jsx`.

---

_To be added:_

- [ ] Add `packages/lib` (another Yarn workspace under `packages`), use it from `app`.
- [ ] Add `examples/basic` – a Next.js app that uses `portal:` to link to `packages/lib`.

---

## What to try

First, open the repo in VSCode, as a whole.

Try opening `hello.js` and `hello.ts`. Prettier, TypeScript, cmd-clicking into dependencies etc. should work.

Then try inspecting some source files in subprojects, e.g., `docs/index.ts` or `packages/app/pages/index.tsx`. That should be more challenging. _(TODO add conclusions; right now, I'm in the middle of experimenting.)_

# Yarn monorepo demo

_Huge thanks to @merceyz for helping with this!_

## What this shows

This repo is a simplified example of our company's monorepo which generally uses JS/TS and Yarn but various subfolders are relatively autonomous projects that are free to use their own:

- Yarn version (1 vs. 2+)
- Linker (PnP vs. node-modules)
- Workspaces (yes or no)

Repo root is for core dev-dependencies only, like Prettier or ESLint or Git pre-commit hooks. All "real projects" live in subfolders.

This setup is relatively tricky to support, for example, VSCode's TypeScript SDK needs to be pnpified but on the other hand, subfolders that use node_modules should resolve from there. So this repo is a test case that you can try to run yourself and see if everything works (it should!).

## Repo structure

```
. (<repo-root>) 1️⃣
├── docs        2️⃣
└── packages    3️⃣
    ├── app     4️⃣
    └── lib     5️⃣
```

### 1️⃣ `<repo-root>`

- Contains `devDependencies` only, TypeScript and Prettier in this example.
- Uses **PnP** to avoid root-level `node_modules`.
- Uses pnpified VSCode SDKs (`yarn pnpify --sdk vscode`).
- Contains [`hello.js`](hello.js) and [`hello.ts`](hello.ts) that demonstrate root-level scripts. Those are the only source files that can use repo-root `devDependencies`.

### 2️⃣ `docs`

- Showcases a separate application that has no desire to consume `packages`.
- Uses **Yarn 1 + node_modules**.

### 3️⃣ `packages`

- A set of modules managed as **Yarn workspaces**.
    - The root of workspaces is here, _not_ in `<repo-root>/package.json`.
- Uses **Yarn 2 + PnP**.

### 4️⃣ `packages/app`

- Is a basic Next.js app.
- Uses TypeScript, e.g., `pages/index.tsx` instead of `.jsx`.
- Consumes things from `lib`.

### 5️⃣ `packages/lib`

- Written in TypeScript.
- No build step – the app uses [next-transpile-modules](https://github.com/martpie/next-transpile-modules).
- Contains `utils.ts` that exports a `snakeCase` function – uses `lodash.snakecase` as a dependency.

---

_To be added:_

- [ ] Add `examples/basic` – a Next.js app that uses `portal:` to link to `packages/lib`.
- [ ] Verify more tools, e.g., ESLint.

---

## How to try

1. Run `yarn` in repo root.
2. Run `yarn` in all sub-projects (where `.yarnrc.yml` files are; not scripted yet, sorry).
3. Open the repo (as a whole) in VSCode.
4. Install the recommended extensions, especially [ZipFS](https://marketplace.visualstudio.com/items?itemName=arcanis.vscode-zipfs).

Now try opening JS / TS files in various locations, e.g.:

- [`hello.ts`](hello.ts) (repo root)
- [`docs/index.ts`](docs/index.ts)
- [`packages/app/pages/index.tsx`](packages/app/pages/index.tsx)

And try if the VSCode experience is good:

- Try cmd-clicking into dependencies
- Try formatting via Prettier
- Try to create some error, like `parseInt(0)` (should be a string)

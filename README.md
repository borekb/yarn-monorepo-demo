# Yarn monorepo demo

🚧 _This demo is being built_ 🚧

## Repo root

- Uses PnP
- Contains only `devDependencies`, two to be specific:
    - TypeScript
    - Prettier
- Contains VSCode SDKs (`yarn pnpify --sdk vscode`)
- Contains [`hello.js`](hello.js) script demonstrating that both TypeScript and Prettier work

## `docs`

- Is the most "isolated" project in the repo – wants to use root-level devDependencies (Prettier, TypeScript), that's all
- Uses Yarn 1 (1.22.10) via its [`.yarnrc.yml`](docs/.yarnrc.yml)

## `packages`

- Is a root of Yarn workspaces
    - ❗️ Many repos on GitHub use repo root as a workspaces root. This repo is different: workspaces are defined in `packages/package.json` and e.g. if node_modules were hoisted, they would be hoisted to `packages/node_modules`, not `<repo-root>/node_modules`.
- Uses PnP

### `packages/app`

- A basic Next.js app
- Uses TypeScript, e.g., `pages/index.tsx` instead of `.jsx`

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

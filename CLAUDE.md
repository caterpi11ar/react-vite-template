# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is **pnpm** — enforced by `preinstall: only-allow pnpm`. Do not use npm/yarn.

- `pnpm dev` — start Vite dev server
- `pnpm build` — type-check (`tsc -b`) then build with Vite
- `pnpm format` — run ESLint with `--fix --cache` on `.ts`/`.tsx`
- `pnpm preview` — preview the production build

No test runner is configured.

A pre-commit hook runs `lint-staged` (ESLint `--fix` on staged JS/TS) via Husky. Commit messages must follow Conventional Commits (enforced by `@commitlint/config-conventional`).

## File naming convention

All source files and directories use **kebab-case** (`aa-bb`).

- Files: `use-is-mobile.ts`, `query-provider.tsx`, `multi-provider.tsx`, `chunk-error-handler.ts`
- Directories: `src/components/devtools/`, `src/lib/initialize/`
- Exceptions that must stay as-is: `App.tsx`, `__root.tsx` (TanStack Router root-route convention), `routeTree.gen.ts` (generated)

When adding a new file, keep the extension consistent with the content (`.tsx` for JSX, `.ts` otherwise) and match the kebab-case pattern of neighboring files.

## Architecture

Stack: React 19 + React Compiler, Vite 8 (rolldown), TypeScript strict, TanStack Router (file-based), TanStack Query, Zustand, Axios, Zod, Tailwind v4.

### Entry flow

`src/main.tsx` → `<App />` (`src/App.tsx`). `App` composes data-layer providers using a `MultiProvider` helper and then renders `RouterProvider`. To add a new provider, append its element to the `providers` array in `App.tsx` — **do not nest providers manually**.

`MultiProvider` (`src/components/multi-provider.tsx`) uses `reduceRight` + `cloneElement` to wrap `children` with each provider element. Each element in `providers` must be a React element that accepts children (e.g. `<QueryProvider key="query" />`).

### Routing

TanStack Router with **file-based routing** + auto code-splitting, configured in `vite.config.ts` via `tanstackRouter({ target: 'react', autoCodeSplitting: true })`.

- Routes live in `src/routes/`. `__root.tsx` is the root layout (renders `<Outlet />` + `<Devtools />`).
- `src/routeTree.gen.ts` is **generated** — do not hand-edit; the Vite plugin regenerates it when route files change.
- The router instance (`src/lib/router.ts`) declares `Register` module augmentation so `router` is globally typed. Defaults: `defaultPreload: 'intent'`, `defaultPreloadStaleTime: 0`.
- Note the Vite plugin ordering comment in `vite.config.ts`: `@tanstack/router-plugin` must come **before** `@vitejs/plugin-react`.

### Data / query layer

`src/providers/query-provider.tsx` owns the `QueryClient`. Two behaviors worth preserving:
- Environment-aware `retry`: disabled in development, capped in production, and never retried on 401/403 Axios errors.
- Global `queryCache.onError`: a 401 triggers `router.navigate({ to: '/', search: { redirect } })`, where `redirect` is the current href. This couples the query layer to the router — changes to auth-redirect behavior live here.

Environment access goes through `src/lib/env.ts`, which parses `import.meta.env` with a Zod schema. Add new env vars to both the `Env` interface and the schema.

### React Compiler

Enabled via `@rolldown/plugin-babel` with `reactCompilerPreset()` (see the comment in `vite.config.ts` explaining why it is a separate plugin in `@vitejs/plugin-react` v6). Assume the compiler auto-memoizes — avoid manually adding `useMemo`/`useCallback` unless profiling justifies it.

### Initialization modules

`src/lib/initialize/` defines a small pluggable init system: each module implements the `InitModule` type, `index.ts` runs them sequentially via `initialize()`. Current modules: `chunk-error-handler`, `react-scan`. Add new one-time startup side effects as a new module and register it in `initialize/index.ts`.

### Devtools

`src/components/devtools/` lazy-loads TanStack Router + React Query devtools wrapped in `<Suspense>`. Mounted from the root route.

## Conventions

- Path alias: `@/*` → `src/*` (wired by `tsconfigPaths: true` in `vite.config.ts`).
- Imports of Zod use `zod/v4` subpath (see `src/lib/env.ts`).
- ESLint config is `@antfu/eslint-config` with project-specific rule overrides in `eslint.config.mjs`. `src/routeTree.gen.ts` is ignored.
- TypeScript `strict` is on with `noUnusedLocals`, `noUnusedParameters`, `noUncheckedSideEffectImports`.

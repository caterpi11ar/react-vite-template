# Roadmap

Planned features for this template. Items are roughly ordered by priority.

## Core

- [ ] **Authentication & Authorization**
  - [ ] Login / logout flow
  - [ ] Token refresh & persistence
  - [ ] Role-Based Access Control (RBAC)
  - [ ] Route-level permission guards
  - [ ] Component-level permission directive / hook

- [ ] **Internationalization (i18n)**
  - [ ] `react-i18next` integration
  - [ ] Language switcher
  - [ ] Locale-aware date / number formatting
  - [ ] Lazy-loaded translation namespaces

- [ ] **Theming**
  - [ ] Light / dark / system mode toggle
  - [ ] Theme persistence (localStorage)
  - [ ] Customizable color tokens via Tailwind v4 `@theme`
  - [ ] Preset theme variants

## Layout & UI

- [ ] Dashboard shell (sidebar + header + content)
- [ ] Collapsible / responsive sidebar
- [ ] Breadcrumb driven by route tree
- [ ] Global search (command palette)
- [ ] Notification center
- [ ] User profile menu

## Developer Experience

- [ ] Mock server (msw) for local development
- [ ] Unit testing setup (Vitest + Testing Library)
- [ ] E2E testing setup (Playwright)
- [ ] Storybook for component catalog
- [ ] OpenAPI / Swagger type generation

## Data Layer

- [ ] Typed API client layer on top of Axios
- [ ] Request / response interceptor patterns
- [ ] Optimistic updates examples
- [ ] Infinite query / pagination examples

## Ops

- [ ] CI pipeline (lint + type-check + build)
- [ ] Bundle analysis script
- [ ] Docker image
- [ ] Deployment examples (Vercel / Netlify / static)

import type { RouteObject } from 'react-router'
import { createBrowserRouter } from 'react-router'
import { indexRoutes } from '@/routes/index'

export const appRoutes = [
  ...indexRoutes,
] satisfies RouteObject[]

export const router = createBrowserRouter(appRoutes)

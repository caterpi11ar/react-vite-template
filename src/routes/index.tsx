import type { FC } from 'react'
import type { RouteObject } from 'react-router'

export const IndexRoute: FC = () => {
  return <main aria-label="Application" />
}

export const indexRoutes = [
  {
    path: '/',
    Component: IndexRoute,
  },
] satisfies RouteObject[]

import { lazy } from 'react'
import { env } from '@/lib/env'

const LazyTanStackRouterDevtools = env.MODE === 'development'
  ? lazy(() =>
      import('@tanstack/react-router-devtools').then(m => ({
        default: m.TanStackRouterDevtools,
      })),
    )
  : null

export function TanstackRouterDevtools() {
  if (!LazyTanStackRouterDevtools)
    return null

  return <LazyTanStackRouterDevtools />
}

import { lazy } from 'react'
import { env } from '@/lib/env'

const LazyReactQueryDevtools = env.MODE === 'development'
  ? lazy(() =>
      import('@tanstack/react-query-devtools').then(m => ({
        default: m.ReactQueryDevtools,
      })),
    )
  : null

export function ReactQueryDevtools() {
  if (!LazyReactQueryDevtools)
    return null

  return <LazyReactQueryDevtools buttonPosition="bottom-right" />
}

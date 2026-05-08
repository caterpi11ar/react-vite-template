import { Suspense } from 'react'
import { ReactQueryDevtools } from './react-query'
import { TanstackRouterDevtools } from './tanstack-router'

export function Devtools() {
  return (
    <Suspense fallback={null}>
      <TanstackRouterDevtools />
      <ReactQueryDevtools />
    </Suspense>
  )
}

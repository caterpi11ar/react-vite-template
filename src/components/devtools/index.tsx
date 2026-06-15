import { Suspense } from 'react'
import { ReactQueryDevtools } from './react-query'

export function Devtools() {
  return (
    <Suspense fallback={null}>
      <ReactQueryDevtools />
    </Suspense>
  )
}

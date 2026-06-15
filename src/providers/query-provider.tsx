import type { PropsWithChildren } from 'react'
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useState } from 'react'
import { env } from '@/lib/env'
import { router } from '@/lib/router'

export function QueryProvider({ children }: PropsWithChildren) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        retry: (failureCount, error) => {
          if (env.MODE === 'development')
            console.log({ failureCount, error })

          if (failureCount >= 0 && env.MODE === 'development')
            return false
          if (failureCount > 3 && env.MODE === 'production')
            return false

          return !(
            error instanceof AxiosError
            && [401, 403].includes(error.response?.status ?? 0)
          )
        },
        refetchOnWindowFocus: env.MODE === 'production',
        staleTime: 10 * 1000,
      },
    },
    queryCache: new QueryCache({
      onError: (error) => {
        if (!(error instanceof AxiosError))
          return

        if (error.response?.status === 401) {
          const redirect = window.location.href
          void router.navigate(`/?redirect=${encodeURIComponent(redirect)}`)
        }
      },
    }),
  }))

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

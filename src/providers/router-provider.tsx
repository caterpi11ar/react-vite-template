import { RouterProvider as ReactRouterProvider } from 'react-router'
import { router } from '@/lib/router'

export function RouterProvider() {
  return <ReactRouterProvider router={router} />
}

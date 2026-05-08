import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Devtools } from '@/components/devtools'

function RootComponent() {
  return (
    <>
      <Outlet />
      <Devtools />
    </>
  )
}

export const Route = createRootRoute({ component: RootComponent })

import type { FC } from 'react'
import { createFileRoute } from '@tanstack/react-router'

const IndexRoute: FC = () => {
  return <main aria-label="Application" />
}

export const Route = createFileRoute('/')({
  component: IndexRoute,
})

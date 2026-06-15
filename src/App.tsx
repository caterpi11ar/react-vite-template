import type { FC } from 'react'
import { Devtools } from '@/components/devtools'
import { AntdProvider } from '@/providers/antd-provider'
import { MultiProvider } from '@/providers/multi-provider'
import { QueryProvider } from '@/providers/query-provider'
import { RouterProvider } from '@/providers/router-provider'

const App: FC = () => {
  const providers = [
    <AntdProvider key="antd" />,
    <QueryProvider key="query" />,
  ]

  return (
    <MultiProvider providers={providers}>
      <RouterProvider />
      <Devtools />
    </MultiProvider>
  )
}

export default App

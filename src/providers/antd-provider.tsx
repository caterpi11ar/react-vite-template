import type { FC, PropsWithChildren } from 'react'
import { App, ConfigProvider, theme } from 'antd'

export const AntdProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
      }}
    >
      <App>{children}</App>
    </ConfigProvider>
  )
}

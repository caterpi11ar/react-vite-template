import type { FC, JSX, PropsWithChildren } from 'react'
import { cloneElement } from 'react'

interface MultiProviderProps {
  providers: readonly JSX.Element[]
}

export const MultiProvider: FC<PropsWithChildren<MultiProviderProps>> = ({
  children,
  providers,
}) => {
  const wrapped = providers.reduceRight(
    (wrappedChildren, provider) =>
      cloneElement(provider, undefined, wrappedChildren),
    children,
  )

  return <>{wrapped}</>
}

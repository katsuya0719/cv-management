declare module 'nextra/mdx' {
  import type { ComponentType } from 'react'

  export type MDXComponents = {
    [key: string]: ComponentType<any>
  }
}
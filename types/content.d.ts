// types/content.d.ts
declare module '#content' {
  import type { Content } from '@nuxt/content/dist/runtime/types'
  export function useContent<T = any>(): {
    fetch: () => Promise<T[]>
    where: (query: Record<string, any>) => ReturnType<typeof useContent>
  }
}

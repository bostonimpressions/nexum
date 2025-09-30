export async function useContentSection(key: string, path: string) {
  const { data } = await useAsyncData(key, () =>
    queryCollection('content').path(path).first()
  )
  return data
}

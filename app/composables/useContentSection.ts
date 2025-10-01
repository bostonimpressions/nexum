export async function useContentSection(section: string, path: string) {
  const routeKey = `${section}-${path}` // unique per route
  const { data } = await useAsyncData(routeKey, () =>
    queryCollection('content').path(path).first()
  )
  return data
}

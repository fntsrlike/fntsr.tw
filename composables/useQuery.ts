// 2023-06-13T17:26:23.000Z
const IsoDateTimeRegExp = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/

const quertRecentlyPosts = (type: string, count: number) => {
  return queryContent(type)
    .only(['title', 'title_en', 'created_at', 'published_at', '_path'])
    .where({ published_at: { $eq: IsoDateTimeRegExp } })
    .limit(count)
    .sort({ created_at: -1, published_at: -1 })
    .find()
}

export const useQuery = () => ({
  quertRecentlyPosts,
})

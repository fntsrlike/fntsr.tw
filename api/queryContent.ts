import { Ref } from 'vue'
import { Post } from '@/types/index'

import {
  isDraft,
  isNotDraft,
  containsTag,
  inDir,
  existsTags,
  existsPublishedAt,
  excludeIndex,
} from './_whereStatement'

const queryForTest = (slug = '/') => {
  return queryContent(slug).find()
}

const queryPosts = (slug = '/') => {
  return queryContent(slug)
    .where(excludeIndex(slug))
    .sort({ created_at: -1, published_at: -1 })
    .find()
}

const queryPostsRecently = (type: string, count: number) => {
  return queryContent(type)
    .only(['title', 'title_en', 'created_at', 'published_at', '_path'])
    .where(isNotDraft())
    .limit(count)
    .sort({ created_at: -1, published_at: -1 })
    .find()
}

const queryPostsByTag = (tag: string) => {
  return queryContent()
    .where(inDir(['articles', 'notes', 'literatures']))
    .where(containsTag(tag))
    .find()
}

const queryContentList = () => {
  return queryContent('/')
    .sort({ _source: 1, _path: 1 })
    .only(['_source', '_path', 'title', '_file'])
    .find()
}

const queryLegacyArticles = () => {
  return queryContent('legacy-articles')
    .sort({ created_at: -1 })
    .find()
}

const queryTags = () => {
  return queryContent('/')
  .only(['tags'])
  .where(existsTags())
  .where(isNotDraft())
  .find()
}

const fetch = async (key: string, queryFunction: Function ) => {
  const { data, error } = await useAsyncData(key,  () => queryFunction())

  if (error) {
    console.log('Fetch failed:', error)
  }

  const posts = data as Ref<Post[]>
  return posts
}

export {
  queryForTest,
  queryPosts,
  queryPostsByTag,
  queryPostsRecently,
  queryContentList,
  queryLegacyArticles,
  queryTags,
  fetch
}

import { Post } from '@/types/index'

const isPostDraft = (post: Post): boolean => {
  return post._draft || post.draft || !post.published_at
}

export {
  isPostDraft,
}

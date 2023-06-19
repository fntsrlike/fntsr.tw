import { Post } from '@/types/index'

const isDraft = (post: Post): boolean => {
  return post._draft || post.draft || !post.published_at
}

export const usePost = () => ({
  isDraft,
})

import { ParsedContent } from "@nuxt/content/dist/runtime/types"
interface PostContent {
  title: string
  title_en: string
  slug: string
  aliases: string[]
  description: string
  created_at: string
  published_at: string
  updated_at: string
  tags: string[]
  draft: boolean
}

interface Post extends ParsedContent, PostContent {}
interface ToC {
  children: ToC[]
  depth: number
  id: string
  text: string
}

interface Route {
  id: string
  source: string
  path: string
  name: string | undefined
}

export { PostContent, Post, ToC, Route }

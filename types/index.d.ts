import { ParsedContent } from "@nuxt/content/dist/runtime/types"

interface Post extends ParsedContent {
  title: string
  title_en: string
  slug: string
  aliases: string[]
  description: string
  created_at: string
  published_at: string
  updated_at: string
  tags: string[]
}

export {Post}

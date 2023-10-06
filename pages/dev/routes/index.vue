<template>
  <div class="prose dark:prose-invert max-w-full">
    <div class="my-5">
      <h1>Routes Overview</h1>
    </div>
    <div class="my-5">
      <h2>Pages</h2>
      <RouteList :data="routeMap" />
    </div>
    <div class="my-5">
      <h2>Content</h2>
      <RouteList :data="contentMap" />
    </div>
</div>
</template>
<script setup lang="ts">
import { fetch, queryContentList } from '@/api/queryContent'
import { Post, Route } from '@/types/index'

const routeMap = [] as Route[]
const router = useRouter()
router.options.routes
  .forEach((route) => {
    routeMap.push({
      id: route.path,
      source: 'page',
      path: route.path,
      name: route.name?.toString(),
    })
})
routeMap.sort((obj1, obj2) => obj1.path.localeCompare(obj2.path))

const posts = await fetch('routeContent', () => queryContentList())

const contentMap = posts.value.map((content: Post) => {
  let path = content._file?.split('/').slice(0, -1).join('/')
  path = path ? `/${path}/` : '/'

  return {
    id: content._path,
    source: content._source,
    path: content._path,
    name: content.title,
  } as Route
})

</script>

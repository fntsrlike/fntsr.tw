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

<script setup>
const routeMap = []
const router = useRouter()
router.options.routes
  // .filter((route) => !route.path.includes('/:slug(.*)*'))
  .forEach((route) => {
    routeMap.push({
      source: 'page',
      path: route.path,
      name: route.name,
    })
})
routeMap.sort((obj1, obj2) => obj1.path.localeCompare(obj2.path))


const { data } = await useAsyncData('home', () =>
  queryContent('/')
    .sort({ _source: 1, _path: 1 })
    .only(['_source', '_path', 'title', '_file'])
    .find()
)
const contentMap = data.value.map((content) => {
  let path = content._file.split('/').slice(0, -1).join('/')
  path = path ? `/${path}/` : '/'

  return {
    source: content._source,
    path: content._path,
    name: content.title,
  }
})

</script>

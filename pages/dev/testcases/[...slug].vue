<template>
  <ContentDoc>
    <template #default="{ doc }">
      <PostPage :post="doc" />
    </template>
    <template #not-found>
      <p>404: test cases not found</p>
      <p>back to <NuxtLink to="/">index</NuxtLink>.</p>
    </template>
  </ContentDoc>
</template>

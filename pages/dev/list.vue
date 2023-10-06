<template>
  <ListSection :posts="posts"/>
</template>
<script setup lang="ts">
import { fetch, queryForTest } from '@/api/queryContent'

const posts = await fetch('', () => queryForTest())
</script>

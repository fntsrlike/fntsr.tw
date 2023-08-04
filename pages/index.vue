<template>
  <div class="prose dark:prose-invert mb-48">
    <ContentDoc>
      <template #default="{ doc }">
        <ContentRenderer :value="doc" />
      </template>
      <template #not-found>
        <p>There has no markdown file for index.</p>
      </template>
    </ContentDoc>
    <section class="mt-12">
      <header>
        <h2 class="mb-0 inline">Recently</h2>
        <dl :title="buildTime">
          <dt class="inline">{{ 'with last build at ' }}</dt>
          <dd class="inline">
            <time :dateTime="buildTime">
              {{ buildTimeFormat }}
            </time>
          </dd>
        </dl>
      </header>
      <RecentlyDateList
        title="Announce"
        type="announce"
        :count="5"
      ></RecentlyDateList>
      <RecentlyDateList
        title="Articles"
        type="articles"
        :count="5"
      ></RecentlyDateList>
      <RecentlyNameList
        title="Notes"
        type="notes"
        :count="5"
      ></RecentlyNameList>
      <RecentlyDateList
        title="Literatures"
        type="literatures"
        :count="5"
      ></RecentlyDateList>
    </section>
  </div>
</template>
<script setup>
import { DateTime } from 'luxon'

const config = useAppConfig()
const { buildTime } = config
const buildTimeFormat = DateTime.fromISO(buildTime)
  .toLocal()
  .toFormat('yyyy-LL-dd HH:mm')
</script>

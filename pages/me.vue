<template>
  <div class="flex h-screen">
    <div class="m-auto md:mt-24 text-center">
      <div class="">
        <NuxtLink to="/">
          <div class="pb-5 text-center">
            <img
              src="/img/avatar.png"
              alt="avatar"
              class="rounded-full h-48 mx-auto"
            />
          </div>
          <div class="justify-center">
            <h1 class="text-3xl">Yuehu Lin</h1>
          </div>
          <div class="justify-center">
            <p class="text-xl">ScrumMaster of Titansoft</p>
          </div>
        </NuxtLink>
        <div class="mt-3">
          <SocialIcon
            v-for="(item, kind) in socialMedias"
            :key="kind"
            :href="item"
            :kind="kind"
            :size="6"
            class="mx-2"
          />
        </div>
      </div>

      <div class="pt-12">
        <h2 class="text-2xl py-3">- Recently -</h2>
        <ol class="text-left list-disc">
          <li>參與《軟體測試實務》寫作</li>
          <li>受邀為 Agile Summit 2023 的 Panel 與談者</li>
          <li>獲選 ACT 台灣敏捷大賞 年度變革引導者</li>
        </ol>
      </div>
    </div>
  </div>
</template>
<script setup>
import siteMetadata from '@/_write/siteMetadata'
import headerNavLinks from '@/_write/headerNavLinks'

definePageMeta({
  layout: false,
})

const { socialMedias } = siteMetadata
</script>

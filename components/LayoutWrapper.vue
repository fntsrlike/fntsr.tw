<template>
  <SectionContainer>
    <div class="flex h-screen flex-col justify-between font-sans">
      <TheHeader />
      <main class="mb-auto">
        <NuxtLayout>
          <slot />
        </NuxtLayout>
      </main>
      <TheFooter />
    </div>
  </SectionContainer>
</template>

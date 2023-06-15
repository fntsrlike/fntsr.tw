<template>
  <SectionContainer class="xl:text-lg">
    <div class="flex h-screen flex-col justify-between font-sans">
      <TheHeader />
      <main class="mb-auto">
        <slot />
      </main>
      <TheFooter />
    </div>
  </SectionContainer>
</template>

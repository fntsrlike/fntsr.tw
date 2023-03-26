<template>
  <div class="container mx-auto">
    <header class="text-center">
      <nav class="py-4">
        <div
          class="max-w-2xl mx-auto flex flex-row justify-between item-baseline"
        >
          <div class="text-xl mt-2">
            <NuxtLink to="/">深藏若虛</NuxtLink>
          </div>
          <ul class="flex text-xl justify-center mt-2">
            <li class="mr-4"><NuxtLink to="/about">About</NuxtLink></li>
            <li class="mr-4"><NuxtLink to="/articles">Articles</NuxtLink></li>
            <li class="mr-4"><NuxtLink to="/notes">Notes</NuxtLink></li>
            <li class="mr-4"><NuxtLink to="/moc">MoC</NuxtLink></li>
            <li class=""><NuxtLink to="/gallery">Gallery</NuxtLink></li>
          </ul>
        </div>
      </nav>
    </header>
    <main class="max-w-3xl mx-auto px-12 py-6 border-2 rounded-md">
      <slot />
    </main>
    <footer
      class="max-w-2xl mx-auto flex flex-row justify-between item-baseline"
      style="height: 120px"
    ></footer>
  </div>
</template>

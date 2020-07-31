<template>
  <div class="bg-light">
    <Navbar class="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64" />
    <Nuxt class="text-light px-4 sm:px-8 md:px-0 lg:px-16 xl:px-48 pt-navbar" />
  </div>
</template>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>>
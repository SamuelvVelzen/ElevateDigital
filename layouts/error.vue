<template>
  <article class="flex flex-col justify-center items-center bg-primary h-screen w-screen">
    <h1>Error</h1>
    <p>
      <span class="font-bold">{{ this.$route.path }}</span> pagina bestaat
      niet
    </p>

    <div class="mt-4 text-center">
      <p>Probeer deze link</p>
      <nuxt-link to="/" class="underline">Startpagina</nuxt-link>
    </div>
  </article>
</template>
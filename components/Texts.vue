<template>
  <section class="px-4 py-4 sm:px-12 md:px-16 lg:px-16" :class="textClass">
    <nuxt-content :document="content" />
  </section>
</template>

<script>
export default {
  props: {
    textClass: {
      type: String,
      default: "",
    },
    content: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
};
</script>

<template>
  <section class="md:px-16 py-8" :class="textClass">
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

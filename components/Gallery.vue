<template>
  <section
    class="gallery flex overflow-x-hidden my-4 mx-4 sm:mx-12 md:mx-16 lg:mx-20 relative"
    :style="cssProps"
  >
    <div class="images flex h-full w-full">
      <img
        v-for="n in galleryContent"
        :key="n.alt"
        class="h-full w-full"
        :src="showImage(n.url)"
        :alt="n.alt"
      />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    galleryContent: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  computed: {
    cssProps() {
      return {
        "--galleryLength":
          "-" + Object.keys(this.galleryContent).length * 100 + "%",
        "--gallerySpeed": Object.keys(this.galleryContent).length * 6 + "s",
      };
    },
  },
  methods: {
    showImage(img) {
      return require("../assets/" + img);
    },
  },
};
</script>
>

<style lang="scss">
.gallery {
  background-color: white;
}

.images {
  animation: slideshow linear infinite normal;
  animation-duration: var(--gallerySpeed);
  transform: translateX(60%);
}

@keyframes slideshow {
  0% {
    transform: translateX(60%);
  }
  100% {
    transform: translateX(var(--galleryLength));
  }
}
</style>

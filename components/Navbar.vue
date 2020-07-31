<template>
  <nav
    class="sticky top-0 w-full flex flex-wrap justify-between bg-dark items-center py-2 z-50 opacity-95"
    :class="open ? 'open' : null"
  >
    <nuxt-link to="/" class="text-2xl font-bold text-light">Samuel.</nuxt-link>
    <label class="menu-icon sm:hidden cursor-pointer ml-auto pt-px-10 pb-px-10" @click="mobileNav">
      <span class="menu-icon-line block"></span>
    </label>

    <transition name="navbar">
      <div
        class="navLinksTest sm:block sm:w-auto sm:transition-none border-t-2 border-light sm:border-t-0 w-full flex flex-wrap justify-between"
        v-if="open"
      >
        <nuxt-link to="#" class="mb-4 text-light w-full">Test</nuxt-link>
        <nuxt-link to="#" class="mb-4 text-light w-full">Test</nuxt-link>
        <nuxt-link to="#" class="mb-4 text-light w-full">Test</nuxt-link>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      open: true,
    };
  },

  mounted() {
    if (window.innerWidth < 640) {
      this.open = false;
    }

    window.addEventListener("resize", this.checkMobileNav);
  },
  destroyed() {
    window.removeEventListener("resize", this.checkMobileNav);
  },
  methods: {
    mobileNav() {
      console.log(this.open);
      if (this.open) {
        this.open = false;
      } else {
        this.open = true;
      }
    },
    checkMobileNav() {
      if (window.innerWidth > 640) {
        this.open = true;
      } else {
        this.open = false;
      }
    },
  },
};
</script>

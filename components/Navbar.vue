<template>
  <nav
    class="fixed w-full flex justify-between bg-light items-center py-2 px-4 sm:px-16 md:px-20 lg:px-16 lg:max-w-3/4 lg:mx-auto z-50 opacity-95 flex-wrap lg:left-1/8"
    :class="open ? 'open' : null"
  >
    <nuxt-link to="/" class="text-2xl font-bold">Samuel.</nuxt-link>
    <label class="menu-icon sm:hidden cursor-pointer ml-auto pt-px-10 pb-px-10" @click="mobileNav">
      <span class="menu-icon-line block"></span>
    </label>

    <transition name="navbar">
      <div
        class="navLinksTest sm:block sm:w-auto sm:transition-none border-t-2 border-dark sm:border-t-0 w-full flex justify-between"
        v-if="open"
      >
        <nuxt-link to="#" class="sm:ml-auto">Test</nuxt-link>
        <nuxt-link to="#" class="ml-4">Test</nuxt-link>
        <nuxt-link to="#" class="ml-4">Test</nuxt-link>
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

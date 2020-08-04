<template>
  <nav
    class="fixed w-full flex flex-wrap justify-between items-center z-50 opacity-95 sm:bg-dark overflow-hidden"
    :class="open ? 'open' : null"
  >
    <div
      class="bg-dark px-4 py-2 sm:px-8 md:px-16 lg:px-32 xl:px-64 w-full sm:w-auto flex items-center border-b-2 border-light sm:border-none"
    >
      <nuxt-link to="/" class="text-2xl font-bold text-light company">Samuel.</nuxt-link>
      <label
        class="menu-icon sm:hidden cursor-pointer ml-auto pt-px-10 pb-px-10"
        @click="mobileNav"
      >
        <span class="menu-icon-line block"></span>
      </label>
    </div>
    <transition name="navbar">
      <div
        class="sm:block sm:w-auto sm:transition-none w-full flex flex-wrap justify-between bg-dark px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64"
        v-if="open"
      >
        <nuxt-link
          to="/"
          class="navLink relative sm:ml-4 my-2 sm:pb-3 text-light w-full"
        >Introductie</nuxt-link>
        <nuxt-link
          to="/timeline"
          class="navLink relative sm:ml-4 my-2 sm:pb-3 text-light w-full"
        >Tijdlijn</nuxt-link>
        <nuxt-link
          to="/login"
          class="navLink relative sm:ml-4 my-2 sm:pb-3 text-light w-full"
        >Inloggen</nuxt-link>
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

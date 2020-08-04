<template>
  <article class="flex flex-col">
    <!-- <Cards :cards-content="page" /> -->
    <image-text :image-content="image" />
    <Texts :content="page" />
    <Gallery :gallery-content="galleryObject" />
    <Texts :content="page" class="'dark'" />
    <Texts :content="page" />
    <Gallery :gallery-content="galleryObject" />
  </article>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<script>
export default {
  async asyncData({ $content }) {
    const image = await $content("index/imagetext").fetch();
    const page = await $content("index/texts").fetch();
    const galleryObject = {
      img1: {
        url: "images/Html.png",
        alt: "HTML logo",
      },
      img2: {
        url: "images/Css.png",
        alt: "Css Logo",
      },
      img3: {
        url: "images/Js.png",
        alt: "JavaScript Logo",
      },
      img4: {
        url: "images/RN.png",
        alt: "React Native Logo",
      },
    };

    return {
      image,
      page,
      galleryObject,
    };
  },
};
</script>

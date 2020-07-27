<template>
	<article class="flex flex-col mx-4 sm:mx-8 lg:max-w-3/4 lg:mx-auto">
		<!-- <Cards :cards-content="page" /> -->
		<image-text :image-content="image" />
		<Texts :texts="page" />
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
				url: "images/gallery.jpg",
				alt: "wow background image swag",
			},
			img2: {
				url: "images/gallery.jpg",
				alt: "nice swag",
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

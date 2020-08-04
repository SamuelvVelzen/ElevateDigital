<template>
	<b-container>
		<b-carousel
			id="carousel-1"
			:interval="4000"
			controls
			indicators
			background="light"
		>
			<b-carousel-slide
				v-for="n in galleryContent"
				:key="n.alt"
				:img-src="showImage(n.url)"
				:img-alt="n.alt"
			></b-carousel-slide>
		</b-carousel>
	</b-container>
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
	methods: {
		showImage(img) {
			return require("../assets/" + img);
		},
	},
};
</script>

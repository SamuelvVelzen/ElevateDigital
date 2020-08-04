<template>
	<section>
		<b-carousel
			id="carousel-1"
			:interval="4000"
			controls
			indicators
			background="light"
			img-width="1024"
			img-height="480"
		>
			<b-carousel-slide
				v-for="n in galleryContent"
				:key="n.alt"
				:img-src="showImage(n.url)"
				:img-alt="n.alt"
			></b-carousel-slide>
		</b-carousel>
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
	methods: {
		showImage(img) {
			return require("../assets/" + img);
		},
	},
};
</script>

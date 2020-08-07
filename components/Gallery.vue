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
				v-for="(item, index) in content"
				:key="index"
				:img-src="require('../assets/' + item.img)"
				:img-alt="item.alt"
			></b-carousel-slide>
		</b-carousel>
	</b-container>
</template>

<script>
export default {
	props: {
		content: {
			type: Array,
			default: () => {
				return [];
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

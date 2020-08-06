<template>
	<b-container>
		<b-row align-v="center">
			<b-col cols="12" md="6" class="order-2 order-md-1">
				<nuxt-content :document="imageContent" />
			</b-col>
			<b-col cols="12" md="6" class="mb-md-0 mb-4 order-md-10 order-1">
				<img class="w-100" :src="showImage()" :alt="imageContent.alt" />
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
export default {
	props: {
		imageContent: {
			type: Object,
			default: () => {
				return {};
			},
		},
	},
	methods: {
		showImage() {
			return require("../assets/" + this.imageContent.img);
		},
	},
};
</script>

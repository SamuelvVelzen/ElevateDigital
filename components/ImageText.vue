<template>
	<b-container>
		<b-row align-v="center">
			<b-col cols="12" md="6" class="order-2 order-md-1">
				<h1 class="title">{{ content.title }}</h1>
				<p class="subtitle">{{ content.subtitle }}</p>
			</b-col>
			<b-col cols="12" md="6" class="mb-md-0 mb-4 order-md-10 order-1">
				<img
					class="w-100"
					:src="require('../assets/' + content.img)"
					:alt="content.alt"
				/>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
export default {
	props: {
		content: {
			type: Object,
			default: () => {
				return {};
			},
		},
	},
	methods: {
		showImage() {
			return require("../assets/" + this.content.img);
		},
	},
};
</script>

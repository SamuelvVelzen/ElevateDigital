<template>
	<section
		class="py-4 px-0 sm:px-8 md:px-12 lg:px-16 flex justify-between items-center flex-wrap"
	>
		<div class="flex-1 order-2 pr-0 sm:pr-4">
			<nuxt-content :document="imageContent" />
		</div>
		<img
			class="flex-initial w-100 pb-8 sm:pb-0 sm:max-w-1/2 w-auto order-1 sm:order-3"
			:src="showImage()"
			:alt="imageContent.alt"
		/>
	</section>
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

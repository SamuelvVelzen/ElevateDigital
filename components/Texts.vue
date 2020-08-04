<template>
	<section :class="textClass">
		<nuxt-content :document="content" />
	</section>
</template>

<script>
export default {
	props: {
		textClass: {
			type: String,
			default: "",
		},
		content: {
			type: Object,
			default: () => {
				return {};
			},
		},
	},
};
</script>

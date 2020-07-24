<template>
	<section class="py-4 px-0 sm:px-8 md:px-12 lg:px-16">
		<nuxt-content :document="texts" />
	</section>
</template>

<script>
export default {
	props: {
		texts: {
			type: Object,
			default: () => {
				return {};
			},
		},
	},
};
</script>

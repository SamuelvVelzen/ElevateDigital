<template>
	<b-container v-bind:class="{ 'bg-dark text-light': fluid }" :fluid="fluid">
		<b-container v-if="fluid" class="p-0">
			<nuxt-content :document="content" />
		</b-container>

		<nuxt-content v-else :document="content" />
	</b-container>
</template>

<script>
export default {
	props: {
		fluid: {
			type: Boolean,
			default: false,
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

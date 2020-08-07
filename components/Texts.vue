<template>
	<b-container v-bind:class="{ 'bg-dark text-light': fluid }" :fluid="fluid">
		<b-container v-if="fluid" :key="index">
			<nuxt-content :document="content" />
			<h1>{{ content.title }}</h1>

			<template v-for="(item, index) in content.paragraphs">
				<p :key="index">{{ item }}</p>
			</template>
		</b-container>

		<template v-else>
			<h1>{{ content.title }}</h1>

			<template v-for="(item, index) in content.paragraphs">
				<p :key="index">{{ item }}</p>
			</template>
		</template>
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

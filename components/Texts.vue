<template>
	<b-container :fluid="darkmode">
		<b-container v-if="darkmode" :key="index">
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
		darkmode: {
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

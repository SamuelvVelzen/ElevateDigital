<template>
	<div
		class="bg-primary sm:rounded-md w-full lg:w-3/10 p-4 mb-8 lg:mb-0 last:mb-0"
	>
		<h2 class="text-xl font-bold text-center pb-3">
			{{ title }}
		</h2>
		<p class="">{{ content }}</p>
	</div>
</template>

<script>
export default {
	props: {
		title: { type: String, default: "test" },
		content: { type: String, default: "test" },
	},
};
</script>

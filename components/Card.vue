<template>
	<div class="bg-primary sm:my-4 py-4 px-10 sm:rounded-md w-full lg:w-3/10">
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

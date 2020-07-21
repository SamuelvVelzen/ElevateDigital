<template>
	<article class="h-screen flex flex-col">
		<Cards :cards-content="page" />
	</article>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style>
.title {
	font-family: "Quicksand", "Source Sans Pro", -apple-system,
		BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
		sans-serif;
	display: block;
	font-weight: 300;
	font-size: 100px;
	color: #35495e;
	letter-spacing: 1px;
}

.subtitle {
	font-weight: 300;
	font-size: 42px;
	color: #526488;
	word-spacing: 5px;
	padding-bottom: 15px;
}

.links {
	padding-top: 15px;
}
</style>

<script>
export default {
	async asyncData({ $content }) {
		const page = await $content("index").where({ title: "cards" }).fetch();

		return {
			page,
		};
	},
};
</script>

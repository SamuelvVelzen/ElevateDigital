<template>
	<div class="bg-light">
		<Navbar />
		<Nuxt class="content" />
	</div>
</template>

<style scoped>
.page-enter-active,
.page-leave-active {
	transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
	opacity: 0;
}
</style>

<style>
.cursor-pointer {
	cursor: pointer;
}
</style>

<script>
export default {
	middleware: ["check-auth", "auth"],
};
</script>

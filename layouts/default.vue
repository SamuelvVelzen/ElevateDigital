<template>
	<div class="bg-light">
		<Navbar />
		<Nuxt />
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

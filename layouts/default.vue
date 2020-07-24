<template>
	<div class="bg-primary">
		<Navbar />
		<Nuxt class="text-primary pt-navbar" />
	</div>
</template>

<style>
html {
	@apply font-default text-base tracking-normal;

	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
}

*,
*::before,
*::after {
	box-sizing: border-box;
	margin: 0;
	padding: 0;

	@apply text-dark;
}
</style>

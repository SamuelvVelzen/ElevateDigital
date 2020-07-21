<template>
	<div class="bg-primary">
		<Navbar />
		<Nuxt class="text-primary" />
	</div>
</template>

<style>
html {
	font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont,
		"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;

	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;

	@apply font-mono text-base tracking-normal;
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

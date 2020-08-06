<template>
	<article>
		<b-container>
			<h1>Tijdlijn</h1>

			<div class="position-relative">
				<span class="h-line"></span>
				<timeline-item />
				<timeline-item />
				<timeline-item />
			</div>
		</b-container>
	</article>
</template>

<style lang="scss" scoped>
.h-line {
	display: block;
	position: absolute;
	left: 20px;

	height: 100%;
	width: 2px;

	background-color: var(--dark);
}
</style>

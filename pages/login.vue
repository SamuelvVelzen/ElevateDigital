<template>
	<article class="vh-100">
		<b-container class="h-100 w-100">
			<h1>Inloggen</h1>
			<b-container
				fluid="sm"
				class="d-flex flex-wrap justify-content-center buttons p-0"
			>
				<!-- <b-button variant="success" class="w-100 mt-auto mb-2 mw-10">
					Button
				</b-button>

				<b-button variant="success" class="w-100 mb-auto mt-2"
					>Button</b-button
				> -->

				<b-row class="w-100">
					<b-col
						class="p-0 mb-3"
						cols="12"
						sm="8"
						md="4"
						offset-sm="2"
						offset-md="4"
						align-self="end"
					>
						<b-button variant="success" class="w-100">
							Inloggen bij Apple
						</b-button>
					</b-col>
					<b-col
						class="p-0 mt-3"
						cols="12"
						sm="8"
						md="4"
						offset-sm="2"
						offset-md="4"
					>
						<b-button variant="success" class="w-100">
							Inloggen bij Google
						</b-button></b-col
					>
				</b-row>
			</b-container>
		</b-container>
	</article>
</template>

<style lang="scss" scoped>
.buttons {
	height: calc(100% - 48px);
}
</style>

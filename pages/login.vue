<template>
	<article class="vh-100">
		<b-container class="w-100 h-100">
			<h1>Inloggen</h1>

			<b-container
				class="d-flex p-0 flex-column flex-sm-row buttons align-items-center justify-content-center"
			>
				<b-button variant="success" class="">
					Inloggen bij Apple
				</b-button>

				<b-button variant="success" class="mt-4 mt-sm-0 ml-sm-4">
					Inloggen bij Google
				</b-button>
			</b-container>
		</b-container>
	</article>
</template>

<style lang="scss" scoped>
.buttons {
	height: calc(100% - 56px);
}
</style>

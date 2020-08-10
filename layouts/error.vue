<template>
	<!-- <div
		class="flex flex-col justify-center items-center bg-light h-screen w-screen"
	>
		<h1>Error</h1>
		<p>
			<span class="font-bold">{{ this.$route.path }}</span> pagina bestaat
			niet
		</p>

		<div class="mt-4 text-center">
			<p>Probeer deze link</p>
			<nuxt-link to="/" class="underline">Startpagina</nuxt-link>
		</div>
	</div> -->
	<article class="vh-100">
		<b-container class="h-100 w-100">
			<h1>Error</h1>

			<b-container
				fluid="sm"
				class="d-flex flex-wrap justify-content-center buttons p-0"
			>
				<b-row class="w-100">
					<b-col
						class="p-0 mb-3 text-center"
						cols="12"
						sm="8"
						md="4"
						offset-sm="2"
						offset-md="4"
						align-self="end"
					>
						<h3>
							<span class="font-weight-bold">{{
								this.$route.path
							}}</span>
							pagina bestaat niet
						</h3>
					</b-col>
					<b-col
						class="p-0 mb-3 text-center"
						cols="12"
						sm="8"
						md="4"
						offset-sm="2"
						offset-md="4"
						align-self="end"
					>
						<p>Probeer deze links</p>
						<b-link to="/">Homepage</b-link>
					</b-col>
					<b-col
						class="p-0 mb-3 text-center"
						cols="12"
						sm="8"
						md="4"
						offset-sm="2"
						offset-md="4"
						align-self="end"
					>
						<b-link to="/timeline">Tijdlijn</b-link>
					</b-col>
					<b-col
						class="p-0 mb-3 text-center"
						cols="12"
						sm="8"
						md="4"
						offset-sm="2"
						offset-md="4"
						align-self="end"
					>
						<b-link to="/login">Inloggen</b-link>
					</b-col>
				</b-row>
			</b-container>
		</b-container>
	</article>
</template>

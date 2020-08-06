<template>
	<b-navbar toggleable="sm" variant="dark" :sticky="true">
		<b-container class="p-0">
			<b-navbar-brand tag="h1" to="/">Samuel.</b-navbar-brand>

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav class="ml-auto">
					<b-nav-item to="/">Homepagina</b-nav-item>
					<b-nav-item to="/timeline">Tijdlijn</b-nav-item>
					<b-nav-item to="/login">Inloggen</b-nav-item>
				</b-navbar-nav>
			</b-collapse>
		</b-container>
	</b-navbar>
</template>

<script>
export default {};
</script>

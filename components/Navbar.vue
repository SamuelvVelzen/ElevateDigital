<template>
	<nav>
		<b-navbar toggleable="sm" type="dark" variant="dark">
			<b-navbar-brand to="/">NavBar</b-navbar-brand>

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav class="ml-auto">
					<b-nav-item to="/home">Homepagina</b-nav-item>
					<b-nav-item to="/timeline">Tijdlijn</b-nav-item>
					<b-nav-item to="/login">Inloggen</b-nav-item>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
	</nav>
</template>

<script>
export default {};
</script>

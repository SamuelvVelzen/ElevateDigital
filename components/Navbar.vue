<template>
	<b-navbar toggleable="sm" type="dark" variant="dark" :sticky="true">
		<div class="container text-light">
			<b-navbar-brand to="/">Samuel.</b-navbar-brand>

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav class="ml-auto">
					<b-nav-item to="/home">Homepagina</b-nav-item>
					<b-nav-item to="/timeline">Tijdlijn</b-nav-item>
					<b-nav-item to="/login">Inloggen</b-nav-item>
				</b-navbar-nav>
			</b-collapse>
		</div>
	</b-navbar>
</template>

<script>
export default {};
</script>

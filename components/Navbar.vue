<template>
	<b-navbar toggleable="sm" variant="dark" fixed="top">
		<b-container>
			<b-navbar-brand tag="h1" to="/">Samuel.</b-navbar-brand>

			<b-navbar-toggle
				target="nav-collapse"
				class="p-0"
			></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav class="ml-auto">
					<b-nav-item to="/">Homepagina</b-nav-item>
					<b-nav-item to="/timeline">Tijdlijn</b-nav-item>
					<b-nav-item v-if="!isAuthenticated()" to="/login"
						>Inloggen</b-nav-item
					>
					<b-nav-item v-else v-on:click="logout"
						>Uitloggen</b-nav-item
					>
				</b-navbar-nav>
			</b-collapse>
		</b-container>
	</b-navbar>
</template>

<script>
export default {
	methods: {
		isAuthenticated() {
			return this.$store.getters.isAuthenticated;
		},
		logout() {
			this.$store
				.dispatch("logoutUser")
				.then(() => {
					this.$router.push("/");

					setTimeout(() => {
						this.$bvToast.toast("", {
							title: "Success | Logout successful",
							variant: "success",
							toaster: "b-toaster-bottom-right",
							autoHideDelay: 2500,
							appendToast: false,
						});
					}, 500);
				})
				.catch((e) => {
					console.log(e);
				});
		},
	},
};
</script>

<template>
	<article class="vh-100">
		<b-container class="w-100 h-100">
			<div class="d-flex align-items-center">
				<h1>Inloggen</h1>

				<span class="font-weight-bold ml-auto d-none d-sm-block"
					>Registreren</span
				>
				<b-iconstack
					font-scale="3"
					v-on:click="route('register')"
					class="ml-sm-2 ml-auto"
				>
					<b-icon stacked icon="circle-fill" variant="light"></b-icon>
					<b-icon
						icon="arrow-right"
						font-scale="0.3"
						variant="dark"
						shift-h="1"
						shift-v="-1"
					></b-icon>
					<b-icon stacked icon="circle" variant="dark"></b-icon>
				</b-iconstack>
			</div>

			<b-container
				class="d-flex p-0 flex-column buttons align-items-center justify-content-center"
			>
				<div
					class="d-flex flex-column flex-sm-row w-100 justify-content-center"
				>
					<b-button variant="success" class
						>Inloggen bij Apple</b-button
					>

					<b-button variant="success" class="mt-4 mt-sm-0 ml-sm-4"
						>Inloggen bij Google</b-button
					>
				</div>
				<hr class="w-100" />

				<b-form
					@submit="onSubmit"
					@reset="onReset"
					v-if="reset"
					class="w-100"
				>
					<b-form-group
						id="input-group-1"
						label="Username:"
						label-for="input-1"
						class="font-weight-bold"
					>
						<b-form-input
							id="input-1"
							v-model="form.username"
							required
							placeholder="Enter username"
							autocomplete="username"
						></b-form-input>
					</b-form-group>

					<b-form-group
						id="input-group-2"
						label="Password:"
						label-for="input-2"
						d
						class="font-weight-bold"
					>
						<b-form-input
							id="input-2"
							v-model="form.password"
							required
							type="password"
							placeholder="Enter password"
							autocomplete="current-password"
						></b-form-input>
					</b-form-group>

					<div class="d-flex">
						<b-button type="reset" variant="danger" class="ml-auto"
							>Reset</b-button
						>
						<b-button type="submit" variant="primary" class="ml-4"
							>Login</b-button
						>
					</div>
				</b-form>
			</b-container>
		</b-container>
	</article>
</template>

<style lang="scss" scoped>
.buttons {
	height: calc(100% - 56px);
}

hr {
	height: 2px;
	background-color: var(--dark);
}
</style>

<script>
export default {
	data() {
		return {
			form: {
				username: "",
				password: "",
			},

			reset: true,
		};
	},
	methods: {
		route(path) {
			this.$router.push("/" + path);
		},
		onSubmit(evt) {
			evt.preventDefault();
			alert(JSON.stringify(this.form));
		},
		onReset(evt) {
			evt.preventDefault();
			// Reset our form values
			this.form.username = "";
			this.form.password = "";

			// Trick to reset/clear native browser form validation state
			this.reset = false;
			this.$nextTick(() => {
				this.show = true;
			});
		},
	},
};
</script>

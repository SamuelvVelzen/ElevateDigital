<template>
	<article class="vh-100">
		<b-container class="w-100 h-100">
			<div class="d-flex align-items-center">
				<h1>Registreren</h1>

				<span class="font-weight-bold ml-auto d-none d-sm-block"
					>Login</span
				>
				<b-iconstack
					font-scale="3"
					v-on:click="route('login')"
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
				class="d-flex p-0 flex-column flex-sm-row buttons align-items-center justify-content-center"
			>
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
					>
						<b-form-input
							id="input-1"
							v-model="form.username"
							required
							placeholder="Enter username"
							autocomplete="off"
						></b-form-input>
					</b-form-group>

					<b-form-group
						id="input-group-2"
						label="Password:"
						label-for="input-2"
					>
						<b-form-input
							id="input-2"
							v-model="form.password"
							required
							type="password"
							placeholder="Enter password"
							autocomplete="new-password"
						></b-form-input>
					</b-form-group>

					<b-button type="reset" variant="danger" class="ml-auto"
						>Reset</b-button
					>
					<b-button type="submit" variant="primary"
						>Register</b-button
					>
				</b-form>
			</b-container>
		</b-container>
	</article>
</template>

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
			this.$router.push("/login");
			console.log(this.form);
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

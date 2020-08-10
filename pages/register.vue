<template>
	<article class="vh-100">
		<b-container class="w-100 h-100">
			<h1>Register</h1>

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

					<b-link to="/login">Login</b-link>
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
		onSubmit(evt) {
			evt.preventDefault();
			this.$router.push("/login");
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

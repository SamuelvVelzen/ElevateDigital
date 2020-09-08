<template>
	<article>
		<section>
			<b-container :class="'d-flex align-items-center'" tag="section">
				<span class="title">
					Welcome{{ !firstTime ? ` ${userInfo.displayName}` : null }},
					to your Profile
				</span>

				<b-button to="/admin/profile/edit" :class="'ml-auto'"
					>Edit profile</b-button
				>
			</b-container>

			<b-container v-if="firsTime">
				<p>
					Hiet ziet er naar uit dat wij je nog niet goed kennen. Vul
					hieronder alstublieft uw informatie aan.
				</p>

				<b-form @submit="onSubmit" @reset="onReset" v-if="show">
					<b-form-group
						id="input-group-1"
						label="Uw naam:"
						label-for="input-1"
					>
						<b-form-input
							id="input-1"
							v-model="form.name"
							required
							:placeholder="
								userInfo.displayName
									? userInfo.displayName
									: 'Enter naam'
							"
						></b-form-input>
					</b-form-group>

					<b-form-group
						id="input-group-2"
						label="Uw naam:"
						label-for="input-2"
					>
						<b-form-input
							id="input-2"
							type="url"
							v-model="form.photo"
							value="test"
							:placeholder="
								userInfo.photoUrl
									? userInfo.photoUrl
									: 'Enter foto url of een random foto van unsplash zal gekozen worden'
							"
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

			<b-container>
				<b-button to="/admin/edit">Edit homepage</b-button>
				<b-button to="/admin/edit">Edit timeline</b-button>
			</b-container>
		</section>
	</article>
</template>

<script>
import User from "./../../assets/logics/user";
import Auth from "./../../assets/logics/auth";
import Unsplash from "./../../assets/logics/unsplash";

export default {
	layout: "auth",
	data() {
		return {
			userInfo: { type: "Object", default: null },
			firstTime: { type: "Boolean", default: true },
			form: {
				name: "",
				photo: "",
			},
			show: true,
		};
	},
	methods: {
		async onSubmit(evt) {
			evt.preventDefault();

			if (this.form.photo === "") {
				this.form.photo = await new Unsplash().getRandomPhotoURL();
			}

			new User().changeUserInfo(this.$store.getters.getToken, {
				displayName: this.form.name,
				photoUrl: this.form.photo,
			});

			alert(JSON.stringify(this.form));
		},
		onReset(evt) {
			evt.preventDefault();
			// Reset our form values

			this.form.name = "";
			this.form.name = "";
			// Trick to reset/clear native browser form validation state
			this.show = false;
			this.$nextTick(() => {
				this.show = true;
			});
		},
	},
	mounted() {
		new User()
			.getUserInfo(this.$store.getters.getToken)
			.then((res) => {
				this.userInfo = res.data.users[0];

				if (this.userInfo.displayName !== "") {
					this.firstTime = false;
				}
			})
			.catch((e) => {
				console.log(e);
			});
	},
};
</script>

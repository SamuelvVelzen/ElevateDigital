import { FirebaseAxios } from "./axiosConfig";

export default class User {
	constructor() {
		this.AxiosInstance = FirebaseAxios;
		this.Key = process.env.fbAPIKey;
	}

	getUserInfo(token) {
		//find way to change key in url as in bind to query param
		return this.AxiosInstance.post(
			"accounts:lookup",
			{
				idToken: token,
			},
			{
				params: {
					key: this.Key,
				},
			}
		)
			.then((res) => {
				return res;
			})
			.catch((e) => {
				console.dir(e);
			});
	}

	changeUserInfo(token, userinfo) {
		return this.AxiosInstance.post(
			"accounts:update",
			{
				idToken: token,
				displayName: userinfo.displayName,
				photoUrl: userinfo.photoUrl,
			},
			{
				params: {
					key: this.Key,
				},
			}
		);
	}
}

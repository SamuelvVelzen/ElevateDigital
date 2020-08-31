import { UnsplashAxios } from "./axiosConfig";

export default class Unsplash {
	constructor() {
		this.axiosIn = UnsplashAxios;
	}

	getRandomPhotoURL() {
		return this.axiosIn
			.get("photos/random")
			.then((res) => {
				return res.data.urls.thumb;
			})
			.catch((err) => {
				console.log(err);
			});
	}
}

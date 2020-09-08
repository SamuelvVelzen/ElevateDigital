import Axios from "axios";

export const FirebaseAxios = Axios.create({
	baseURL: "https://identitytoolkit.googleapis.com/v1/",
});

export const UnsplashAxios = Axios.create({
	baseURL: "https://api.unsplash.com/",
	headers: {
		Authorization: `Client-ID ${process.env.unsplashAPIKey}`,
		"Accept-Version": "v1",
	},
});

import Vuex from "vuex";
import Axios from "axios";
import Auth from "./../assets/logics/auth";
import Cookie from "js-cookie";

const secure = new Auth();

const AxiosIn = Axios.create({
	baseURL: "https://samuel-7e153.firebaseio.com/",
});

const createStore = () => {
	return new Vuex.Store({
		state: {
			timelineItems: [],
			introductionItems: [],
			token: null,
		},
		mutations: {
			setTimelineItems(state, items) {
				state.timelineItems = items;
			},
			setIntroductionItems(state, items) {
				state.introductionItems = items;
			},
			setToken(state, token) {
				state.token = token;
			},
			clearToken(state) {
				state.token = null;
			},
		},
		actions: {
			nuxtServerInit(vuexContext, context) {
				const introductionItemsURL = "introductionItems.json",
					timelineItemsURL = "timelineItems.json";

				return Promise.all([
					AxiosIn.get(introductionItemsURL),
					AxiosIn.get(timelineItemsURL),
				])
					.then((res) => {
						const introductionRes = res[0],
							timelineRes = res[1];

						vuexContext.commit(
							"setIntroductionItems",
							introductionRes.data
						);
						vuexContext.commit(
							"setTimelineItems",
							timelineRes.data
						);
					})
					.catch((e) => {
						console.error(e);
					});
			},
			setTimelineItems(vuexContext, items) {
				vuexContext.commit("setTimelineItems", items);
			},
			setIntroductionItems(vuexContext, items) {
				vuexContext.commit("setIntroductionItems", items);
			},
			registerUser(vuexContext, Data) {
				return secure.createUser(Data.email, Data.password);
			},
			loginUser(vuexContext, Data) {
				return secure
					.authenticateUser(Data.email, Data.password)
					.then((result) => {
						return secure
							.getIdToken()
							.then((res) => {
								localStorage.setItem("token", res.token);
								localStorage.setItem(
									"expiration",
									new Date(res.expirationTime).getTime()
								);

								Cookie.set("jwt", res.token);
								Cookie.set(
									"expiration",
									new Date(res.expirationTime).getTime()
								);

								vuexContext.commit("setToken", res.token);
							})
							.catch((e) => {
								console.log(e);
							});
					});
			},
			logoutUser(vuexContext) {
				return secure.logoutUser().then(() => {
					vuexContext.commit("clearToken");
					Cookie.remove("token");
					Cookie.remove("expiration");

					if (process.client) {
						localStorage.removeItem("token");
						localStorage.removeItem("expiration");
					}
				});
			},
			initAuth(vuexContext, req) {
				let token, expirationDate;

				if (req) {
					if (!req.headers.cookie) {
						return;
					}
					const jwtCookie = req.headers.cookie
							.split(";")
							.find((c) => c.trim().startsWith("jwt=")),
						expirationCookie = req.headers.cookie
							.split(";")
							.find((c) => c.trim().startsWith("expiration="));

					if (!jwtCookie || !expirationCookie) {
						return;
					}

					token = jwtCookie.split("=")[1];
					expirationDate = expirationCookie.split("=")[1];
				} else {
					token = localStorage.getItem("token");
					expirationDate = localStorage.getItem("expiration");
				}

				expirationDate = new Date(parseInt(expirationDate));

				if (new Date() > expirationDate || !token) {
					vuexContext.dispatch("logoutUser");
					return;
				}

				vuexContext.commit("setToken", token);
			},
		},
		getters: {
			getTimelineItems(state) {
				return state.timelineItems;
			},
			getIntroductionItems(state) {
				return state.introductionItems;
			},
			isAuthenticated(state) {
				return state.token != null;
			},
		},
	});
};

export default createStore;

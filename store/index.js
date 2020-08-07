import Vuex from "vuex";
import Axios from "axios";

const AxiosIn = Axios.create({
	baseURL: "https://samuel-7e153.firebaseio.com/",
});

const createStore = () => {
	return new Vuex.Store({
		state: {
			timelineItems: [],
			introductionItems: [],
		},
		mutations: {
			setTimelineItems(state, items) {
				state.timelineItems = items;
			},
			setIntroductionItems(state, items) {
				state.introductionItems = items;
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
						context.error(e);
					});
			},
			setTimelineItems(vuexContext, items) {
				vuexContext.commit("setTimelineItems", items);
			},
			setIntroductionItems(vuexContext, items) {
				vuexContext.commit("setIntroductionItems", items);
			},
		},
		getters: {
			getTimelineItems(state) {
				return state.timelineItems;
			},
			getIntroductionItems(state) {
				return state.introductionItems;
			},
		},
	});
};

export default createStore;

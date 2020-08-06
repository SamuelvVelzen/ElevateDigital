import Vuex from "vuex";
import Axios from "axios";

const createStore = () => {
	return new Vuex.Store({
		state: {
			timelineItems: [],
		},
		mutations: {
			setTimelineItems(state, items) {
				state.timelineItems = items;
			},
		},
		actions: {
			nuxtServerInit(vuexContext, context) {
				return Axios.get(
					"https://samuel-7e153.firebaseio.com/timelineItems.json"
				)
					.then((res) => {
						const timelineItems = [];
						for (const key in res.data) {
							timelineItems.push({ ...res.data[key], id: key });
						}

						vuexContext.commit("setTimelineItems", timelineItems);
					})
					.catch((e) => {
						console.error(e);
						context.error(e);
					});
			},
			setTimelineItems(vuexContext, items) {
				vuexContext.commit("setTimelineItems", items);
			},
		},
		getters: {
			getTimelineItems(state) {
				return state.timelineItems;
			},
		},
	});
};

export default createStore;

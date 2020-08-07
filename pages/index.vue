<template>
	<article>
		<template v-for="(introductionItem, index) in introductionItems">
			<section :key="index">
				<component
					:is="introductionItem.type"
					:content="introductionItem.content"
				/>

				<Gallery
					v-if="introductionItem.gallery"
					:content="introductionItem.gallery"
				/>
			</section>
		</template>
	</article>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<script>
import ImageText from "./../components/ImageText";
import Texts from "./../components/Texts";
import Gallery from "./../components/Gallery";

export default {
	components: { ImageText, Texts, Gallery },
	data: () => {
		return {};
	},
	computed: {
		introductionItems() {
			return this.$store.getters.getIntroductionItems;
		},
	},
};
</script>

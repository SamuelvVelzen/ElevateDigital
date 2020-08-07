<template>
	<article>
		<b-container>
			<h1>Tijdlijn</h1>

			<div class="position-relative">
				<span class="h-line"></span>
				<timeline-item
					v-for="timelineItem in timelineItems"
					:item="timelineItem"
					:key="timelineItem.id"
				/>
			</div>
		</b-container>
	</article>
</template>

<style lang="scss" scoped>
.h-line {
	display: block;
	position: absolute;
	left: 19px;

	height: 100%;
	width: 2px;

	background-color: var(--dark);
}
</style>

<script>
export default {
	computed: {
		timelineItems() {
			return this.$store.getters.getTimelineItems;
		},
	},
};
</script>

<template>
	<section
		class="flex flex-row flex-wrap justify-between bg-dark rounded-md sm:px-20 sm:py-4"
	>
		<Card
			:title="cardsContent.card1"
			:content="cardsContent.card1content"
		/>
		<Card
			:title="cardsContent.card2"
			:content="cardsContent.card2content"
		/>
		<Card
			:title="cardsContent.card3"
			:content="cardsContent.card3content"
		/>
	</section>
</template>

<script>
export default {
	props: {
		cardsContent: {
			type: Object,
			default: () => {
				return {};
			},
		},
	},
};
</script>

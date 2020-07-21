<template>
	<section
		class="flex flex-row flex-wrap justify-between bg-dark sm:px-8 md:px-12 lg:px-16 sm:p-8"
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

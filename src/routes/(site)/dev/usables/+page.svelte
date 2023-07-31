<script>
	import RecipeCard from '$lib/components/usables/RecipeCard/RecipeCard.svelte';
</script>

<main>
	<RecipeCard
		title="Lemon Pie"
		ingredients={[
			{ quantity: 1, item: 'lemon' },
			{ quantity: 2.5, item: 'cups of flour' },
			{ quantity: 3, item: 'eggs' },
			{ quantity: 2, item: 'cups of milk' },
			{ item: 'A pinch of salt' },
		]}
		steps={[
			'Preheat oven to 350 degrees fahrenheit.',
			'Mix all dry ingredients together in a bowl.',
			'Mix all wet ingredients together in a bowl.',
			'Combine by pouring wet into dry.',
			'Put in oven on middle rack for 30 minutes',
		]}
	/>
</main>

<style>
	main {
		padding: var(--spacing-32);
	}
</style>

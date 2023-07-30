<script lang="ts">
	import Body1 from '$lib/components/typography/Body1.svelte';
	import H2 from '$lib/components/typography/H2.svelte';

	export let data;

	const {
		gallery: { title, description, date, photos },
	} = data;
</script>

<main>
	<H2>{title}</H2>
	<Body1>{description}</Body1>
	{#if date}
		<p>{date}</p>
	{/if}
	<div class="gallery-grid">
		{#each photos as photo}
			<!-- alt needs to be better than this -->
			<img src={photo} alt={photo.split('/').pop()?.split('.').shift() ?? ''} />
		{/each}
	</div>
</main>

<style>
	.gallery-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		gap: var(--spacing-24);
		padding: var(--spacing-24);
	}
</style>

<script lang="ts">
	import H5 from '$lib/components/internal/typography/H5.svelte';

	export let data;

	const { categoriesWithCounts } = data;
</script>

<ul>
	{#each categoriesWithCounts as category}
		<li>
			<a href="/posts/category/{category.title}">
				<H5>
					{category.title} ({category.count})
				</H5>
			</a>
		</li>
	{/each}
</ul>

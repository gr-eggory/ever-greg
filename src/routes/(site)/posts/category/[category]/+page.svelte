<script lang="ts">
	import PostsList from '$lib/components/internal/PostsList/PostsList.svelte';
	import H2 from '$lib/components/internal/typography/H2.svelte';

	export let data;

	const category = data.category;
	const posts = data.posts;
</script>

<main>
	<H2>Category: <b>{category}</b></H2>

	<PostsList {posts} />
</main>

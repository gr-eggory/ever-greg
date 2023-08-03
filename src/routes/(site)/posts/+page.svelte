<script lang="ts">
	import type { PageData } from './$types';
	import { siteConfig } from '$lib/config';
	import Pagination from '$lib/components/internal/Pagination/Pagination.svelte';
	import PostsList from '$lib/components/internal/PostsList/PostsList.svelte';

	export let data: PageData;

	let posts = data.posts || [];
	let totalPosts = data.total;
</script>

<svelte:head>
	<title>{siteConfig.title} | Posts</title>
	<meta data-key="description" name="description" content={siteConfig.description} />
	<!-- <meta property="og:image" content="{siteConfig.url}/images/site-image.png" /> -->
	<!-- <meta name="twitter:image" content="{siteConfig.url}/images/site-image.png" /> -->
</svelte:head>

<main>
	<PostsList {posts} />

	<Pagination currentPage={1} {totalPosts} />
</main>

<style lang="scss">
</style>

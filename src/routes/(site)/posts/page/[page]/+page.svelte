<script lang="ts">
	import { postsPerPage, siteConfig } from '$lib/config.js';
	import Pagination from '$lib/components/Pagination/Pagination.svelte';
	import PostsList from '$lib/components/PostsList/PostsList.svelte';
	import H3 from '$lib/components/typography/H3.svelte';

	export let data;

	const { posts, page, totalPosts } = data;

	$: lowerBound = page * postsPerPage - (postsPerPage - 1) || 1;
	$: upperBound = Math.min(page * postsPerPage, totalPosts);
</script>

<svelte:head>
	<title>{siteConfig.author} | Posts page {page}</title>
	<meta data-key="description" name="description" content={siteConfig.description} />
	<!-- <meta property="og:image" content="https://joshcollinsworth.com/images/site-image.png" />
	<meta name="twitter:image" content="https://joshcollinsworth.com/images/site-image.png"/> -->
</svelte:head>

<main tabindex="-1">
	{#if lowerBound === totalPosts}
		<H3>Post {totalPosts} of {totalPosts}</H3>
	{:else}
		<H3>Posts {lowerBound}–{upperBound} of {totalPosts}</H3>
	{/if}
	<Pagination currentPage={page} {totalPosts} />
	<PostsList {posts} />
	<Pagination currentPage={page} {totalPosts} />
</main>

<script lang="ts">
	import type { Tag } from '$lib/types/post';
	import Body1 from '../typography/Body1.svelte';
	import H4 from '../typography/H4.svelte';

	// import TagList from './tags/TagList.svelte'
	// import Tag from './tags/Tag.svelte'
	// import PostSearch from './PostSearch.svelte'

	export let popularPosts: Tag[];
	export let allCategories: string[];
</script>

<aside>
	<H4><a href="/posts/category">Categories</a></H4>
	<ul>
		{#each allCategories as category}
			<li>
				<a href="/posts/category/{category}"><Body1>{category}</Body1></a>
			</li>
		{/each}
	</ul>

	<H4>Popular posts</H4>
	<ul>
		{#each popularPosts as post}
			<li>
				<a href="/posts/{post.slug}">{post.title}</a>
			</li>
		{/each}
	</ul>
</aside>

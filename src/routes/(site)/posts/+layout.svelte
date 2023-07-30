<script lang="ts">
	import type { LayoutData } from './$types';
	import Sidebar from '$lib/components/internal/Sidebar/Sidebar.svelte';
	import Transition from '$lib/components/internal/Transition/Transition.svelte';

	export let data: LayoutData;
	let popularPosts: LayoutData['popularPosts'];
	let allCategories: LayoutData['allCategories'];
	$: ({ popularPosts, allCategories } = data);
	// onMount(() => {
	// 	if (!prefersReducedData()) {
	// 		popularPosts.forEach((post) => {
	// 			preloadCode(`/posts/${post.slug}`);
	// 		});
	// 	}
	// });
</script>

<div class="layout">
	<Sidebar {popularPosts} {allCategories} />

	<Transition url={data.currentUrl}>
		<slot />
	</Transition>
</div>

<style lang="scss">
	.layout {
		display: flex;
		gap: var(--spacing-24);
	}
</style>

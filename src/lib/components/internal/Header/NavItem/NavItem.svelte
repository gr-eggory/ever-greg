<script lang="ts">
	import { page } from '$app/stores';
	import H5 from '../../typography/H5.svelte';

	export let href: string;

	$: isCurrentPage = $page.url.pathname.startsWith(href);
</script>

<li>
	<a {href} class:active={isCurrentPage} aria-current={isCurrentPage}>
		<H5>
			<slot />
		</H5>
	</a>
</li>

<style>
	a {
		font-size: var(--font-24);
	}

	.active {
		text-decoration: underline;
	}
</style>

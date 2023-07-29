<script lang="ts">
	import { shades } from './constants';

	export let color: string;
</script>

<h3>{color}</h3>
{#each shades as shade}
	<div style="background-color: var(--clr-{color}-{shade});" />
{/each}

<style>
	div {
		height: 90px;
	}
</style>

<script lang="ts">
	import Body1 from '$lib/components/typography/Body1.svelte';
	import Body2 from '$lib/components/typography/Body2.svelte';
	import H1 from '$lib/components/typography/H1.svelte';
	import H2 from '$lib/components/typography/H2.svelte';
	import H3 from '$lib/components/typography/H3.svelte';
	import H4 from '$lib/components/typography/H4.svelte';
	import H5 from '$lib/components/typography/H5.svelte';
	import H6 from '$lib/components/typography/H6.svelte';
	import SubTitle1 from '$lib/components/typography/SubTitle1.svelte';
	import SubTitle2 from '$lib/components/typography/SubTitle2.svelte';
</script>

<main>
	<H1>Heading 1</H1>
	<H2>Heading 2</H2>
	<H3>Heading 3</H3>
	<H4>Heading 4</H4>
	<H5>Heading 5</H5>
	<H6>Heading 6</H6>
	<SubTitle1>Subtitle 1</SubTitle1>
	<SubTitle2>Subtitle 2</SubTitle2>
	<Body1>Body 1</Body1>
	<Body2>Body 2</Body2>
</main>

<style lang="scss">
	main {
		padding: var(--spacing-32);
	}
</style>

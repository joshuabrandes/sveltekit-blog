<script>
	import { siteTitle } from '$lib/config';

	let { data } = $props();

	// Info: as of 2025-04-20, the corresponding +page.js redirects automatically to /blog
</script>

<svelte:head>
	<title>{siteTitle}</title>
</svelte:head>

<!-- This is the README.md file in the root of the repo. It serves double duty as the homepage's content. If you'd rather use your own HTML and/or Svelte, you can delete/modify everything in this file. -->
<!-- <data.ReadMe /> -->

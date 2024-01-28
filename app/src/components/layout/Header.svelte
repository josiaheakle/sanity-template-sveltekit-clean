<script lang="ts">
	import type { SiteSettings } from '$lib/utils/sanity.types';

	export let siteSettings: SiteSettings;
</script>

<header>
	<h1>
		{siteSettings.title}
	</h1>
</header>

<style>
	header {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 4rem;
	}
</style>

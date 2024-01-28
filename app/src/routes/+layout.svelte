<script lang="ts">
	import { onMount } from 'svelte';
	import type { LayoutData, PageData } from './$types';
	import { urlFor } from '$lib/utils/image';
	import Header from '../components/layout/Header.svelte';

	export let data: LayoutData;
</script>

<Header siteSettings={data.siteSettings} />
<main>
	<slot />
</main>
<footer class="footer" />

<style>
</style>

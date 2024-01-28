<script lang="ts">
	import { urlFor } from '$lib/utils/image';
	import { onMount } from 'svelte';
	import Card from '../components/Card.svelte';
	import Welcome from '../components/Welcome.svelte';
	import type { PageData } from './$types';
	import Hero from '../components/home/Hero.svelte';

	export let data: PageData;
</script>

<Hero siteSettings={data.siteSettings} />

<div class="" />
<br />
<br />
<br />

<section />

<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/utils/image';
	import Card from '../../../components/Card.svelte';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section class="post">
	{#if data.post.mainImage}
		<img
			class="post__cover"
			src={urlFor(data.post.mainImage).url()}
			alt="Cover image for {data.post.title}"
		/>
	{:else}
		<div class="post__cover--none" />
	{/if}
	<div class="post__container">
		<h1 class="post__title">{data.post.title}</h1>
		<p class="post__excerpt">{data.post.excerpt}</p>
		<p class="post__date">
			{formatDate(data.post._createdAt)}
		</p>
		<div class="post__content">
			<PortableText value={data.post.body} components={{}} />
		</div>
	</div>
</section>

<script lang="ts">
	import { urlFor } from '$lib/utils/image';
	import type { PageData } from '../$types';

	export let data: PageData;
</script>

{#if data.posts}
	{#each data.posts as post}
		{post.title}
		{#if post.mainImage}
			<img
				class="post__cover"
				src={urlFor(post.mainImage).url()}
				alt="Cover image for {post.title}"
			/>
		{/if}
	{/each}
{/if}

<style>
</style>

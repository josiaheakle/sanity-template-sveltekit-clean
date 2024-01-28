<script lang="ts">
	export let title: string;
	export let subtitle: string;

	export let fontSize: string = '6rem';
</script>

<div class="tagline" style="font-size: {fontSize};">
	<h1 class="title">{title}</h1>
	<span class="subtitle">{subtitle}</span>
</div>

<style>
	.tagline {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: fit-content;
	}

	.title {
		font-size: 1em;
	}

	.subtitle {
		font-size: 0.25em;
		margin-top: -1em;
	}
</style>

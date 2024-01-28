<script lang="ts">
	import { urlFor } from '$lib/utils/image';
	import type { SiteSettings } from '$lib/utils/sanity.types';
	import Tagline from '../Tagline.svelte';

	export let siteSettings: SiteSettings;
</script>

<section id="hero" style="background-image: url({urlFor(siteSettings.heroImage).url()});">
	<div id="hero-background" />
	<div id="hero-text">
		<Tagline title={siteSettings.title} subtitle={siteSettings.subtitle} fontSize="9vw" />
		<button>Learn More</button>
	</div>
</section>

<style>
	@keyframes fadeIn {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	#hero {
		box-sizing: border-box;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100dvh;
		padding: 0 var(--pad-side);
		box-shadow: var(--shadow-medium);
		background-position: center;
		background-size: cover;
		backdrop-filter: blur(4px);

		--animation-time: 1500ms;
	}

	#hero-background {
		opacity: 0;
		background: linear-gradient(transparent, var(--color-dark-transparent));
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: -1;
		top: 0;
		left: 0;
		animation: fadeIn var(--animation-time) forwards;
		animation-delay: 750ms;

		-webkit-mask: linear-gradient(#0000, #000);
		mask: linear-gradient(#0000, #000);

		backdrop-filter: blur(8px);
	}

	#hero-text {
		opacity: 0;
		padding-top: 25vh;
		width: fit-content;
		animation: fadeIn var(--animation-time) forwards;
		animation-delay: 750ms;
	}

	h1 {
		font-size: 10rem;
	}
</style>

import { error } from '@sveltejs/kit';
import type { LayoutLoad, PageLoad } from './$types';
import { getDataEntry, getSiteData } from '$lib/utils/sanity';

export const load = (async () => {
	const siteSettings = await getSiteData();

	return {
		siteSettings
	};
}) satisfies LayoutLoad;

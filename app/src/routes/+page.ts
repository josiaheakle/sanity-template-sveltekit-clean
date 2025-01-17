import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getDataEntry, getSiteData } from '$lib/utils/sanity';

export const load = async () => {
	const posts = await getDataEntry('post');
	const siteSettings = await getSiteData();

	console.log({ posts, siteSettings });

	return {
		posts,
		siteSettings
	};
};

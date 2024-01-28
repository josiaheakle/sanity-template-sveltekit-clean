import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getDataEntry } from '$lib/utils/sanity';
import type { Post } from '$lib/utils/sanity.types';

// export const ssr = false;

export const load = async ({ params }) => {
	const post = await getDataEntry('post', params.slug);
	return { post };
};

import { getDataEntry } from '$lib/utils/sanity';

export const load = async ({ params }) => {
	const posts = await getDataEntry('post');
	return { posts: posts };
};

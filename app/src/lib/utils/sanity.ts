import { createClient } from '@sanity/client';
import groq from 'groq';

import { PUBLIC_SANITY_DATASET, PUBLIC_SANITY_PROJECT_ID } from '$env/static/public';
import type { DataType, SanityData, SiteSettings } from './sanity.types';

if (!PUBLIC_SANITY_PROJECT_ID || !PUBLIC_SANITY_DATASET) {
	throw new Error('Did you forget to run sanity init --env?');
}

export const client = createClient({
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: PUBLIC_SANITY_DATASET,
	useCdn: false, // `false` if you want to ensure fresh data
	apiVersion: '2023-03-20' // date of setup
});

/**
 * Gets an array of the requested Sanity data type
 * ! Update SanityData type in ./sanity.types.ts to ensure the types are up to date
 * @param dataType The name of the Sanity data type
 */
export async function getDataEntry<T extends DataType>(
	dataType: T
): Promise<
	Array<
		SanityData & {
			_type: T;
		}
	>
>;

/**
 * Gets a single entry of the requested Sanity data type
 * ! Update SanityData type in ./sanity.types.ts to ensure the types are up to date
 * @param dataType The name of the Sanity data type
 * @param slug The slug of the entry
 */
export async function getDataEntry<T extends DataType>(
	dataType: T,
	slug: string
): Promise<
	SanityData & {
		_type: T;
	}
>;

/**
 * Gets an array or single entry of the requested Sanity data type
 * ! Update SanityData type in ./sanity.types.ts to ensure the types are up to date
 * @param dataType The name of the Sanity data type
 * @param slug [OPTIONAL] The slug of the entry
 */
export async function getDataEntry<T extends DataType>(
	dataType: T,
	slug?: string
): Promise<
	| Array<
			SanityData & {
				_type: T;
			}
	  >
	| (SanityData & {
			_type: T;
	  })
> {
	if (slug) {
		return (await client.fetch(groq`*[_type == "${dataType}" && slug.current == $slug][0]`, {
			slug
		})) as Array<
			SanityData & {
				_type: T;
			}
		>;
	}

	return (await client.fetch(
		groq`*[_type == "${dataType}" && defined(slug.current)] | order(_createdAt desc)`
	)) as SanityData & {
		_type: T;
	};
}

/**
 * Gets the site settings
 */
export async function getSiteData(): Promise<SiteSettings> {
	return await client.fetch(groq`*[_type == "siteSettings"][0]`);
}

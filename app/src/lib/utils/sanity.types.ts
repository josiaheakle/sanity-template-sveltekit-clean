import type { PortableTextBlock } from '@portabletext/types';
import type { ImageAsset, Slug } from '@sanity/types';

export type DataType = 'clientTestimonial' | 'post';

type SanityEntry = {
	_type: DataType;
	_createdAt: string;
};

export interface SiteSettings {
	_type: 'siteSettings';
	_createdAt: string;
	title: string;
	heroImage: ImageAsset;
	subtitle: string;
	logo: ImageAsset;
}

export interface ClientTestimonial extends SanityEntry {
	_type: 'clientTestimonial';
	clientName?: string;
	slug: Slug;
	excerpt?: string;
	mainImage?: ImageAsset;
}

export interface Post extends SanityEntry {
	_type: 'post';
	title?: string;
	slug: Slug;
	excerpt?: string;
	mainImage?: ImageAsset;
	body: PortableTextBlock[];
}

export type SanityData = Post | ClientTestimonial;

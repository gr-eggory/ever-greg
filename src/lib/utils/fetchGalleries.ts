import { galleries } from '$lib/content/galleries';
import type { Gallery } from '$lib/types/gallery';

export const fetchGalleries = (): Gallery[] => galleries;

export const fetchGallery = (galleryUrlParam: string): Gallery | undefined =>
	galleries.find(({ slug }) => slug === galleryUrlParam);

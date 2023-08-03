import type { Gallery } from '$lib/types/gallery';

export const galleries: Gallery[] = [
	{
		title: 'Woodland Photography',
		slug: 'woodland-photography',
		excerpt: 'Shots taken in New England',
		description:
			'All photos were taken by a Canon EOS R6 Mark II with post-processing in Photoshop.',
		photos: [
			'/gallery/woodlands/woods1.jpg',
			'/gallery/woodlands/woods2.jpg',
			'/gallery/woodlands/woods3.jpg',
		],
	},
	{
		title: 'Creature Design',
		slug: 'creature-design',
		excerpt: 'Visual studies of speculative evolution.',
		description:
			'My inspirations draw primarily from entymology and herpetology. Most works done in pencil and pen, sometimes with watercolor.',
		photos: [
			'/gallery/animals/grasshopper.webp',
			'/gallery/animals/anole.webp',
			'/gallery/animals/ant.webp',
			'/gallery/animals/cat.webp',
		],
	},
];

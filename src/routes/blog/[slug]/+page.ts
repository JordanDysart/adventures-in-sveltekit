import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = ( async ({ params }) => {
    try {
        if ( params.slug === 'hello-world') {
            return {
                title: 'Hellow World!',
                content: 'Welcome to our blog. Lorem ipsum dolor sit amet...',
            };
        }

        const { slug } = params;
        const post = await import(`../../../posts/${slug}.md`);
        return { 
            content: post.default,
            meta: post.metadata,
        };
    } catch (err) {
        throw error(404, new Error(`Post with slug "${params.slug}" not found`));
    }

}) satisfies PageLoad;

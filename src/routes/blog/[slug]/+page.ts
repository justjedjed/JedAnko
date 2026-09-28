import { error } from '@sveltejs/kit';
import { posts } from '$lib/posts';

export const prerender = true;

export function entries() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function load({ params }: { params: { slug: string } }) {
  const i = posts.findIndex((p) => p.slug === params.slug);
  if (i < 0) error(404, 'Post not found');
  return {
    post: posts[i],
    prev: i > 0 ? posts[i - 1] : null,
    next: i < posts.length - 1 ? posts[i + 1] : null,
  };
}

import PostListItem from '@/app/components/PostListItem';
import { getPostsMeta } from '@/lib/posts';
import Link from 'next/link';
import React from 'react'

type Props = {
  params: Promise<{
    tag: string
  }>
}

export const revalidate = 86400;

export async function generateStaticParams(){
  const posts = await getPostsMeta();

  if(!posts) return [];
  const tags = new Set(posts.map(post => post.tags).flat());

  return Array.from(tags).map((tag) => ({tag}))
}

export async function generateMetadata({params}: Props){
  const { tag } = await params;
  return {
    title: `Posts about ${tag}`
  }
}

export default async function page({params}: Props) {
  const { tag } = await params;
  const posts = await getPostsMeta();
  if (!posts) return <p className='mt-10 text-center'>No posts with {tag} found</p>;
  const renderedPosts = posts.filter(post => post.tags.includes(tag)).map(post => (
    <PostListItem key={post.id} post={post} />
  ));

  return !renderedPosts.length ?  (
    <div className='text-center'>
      <p className='mt-10'>No post found for the keyword</p>
      <Link href="/">◀ Back to home</Link>
    </div>
  ):
  (<section className="mt-6 mx-auto max-w-2xl">
    <h2 className="text-4xl font-bold dark:text-white/90">Blog</h2>
    <ul className="w-full">
      {renderedPosts}
    </ul>
  </section>)
}
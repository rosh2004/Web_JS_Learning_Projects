import getFormattedDate from "@/lib/getFormattedDate";
import { getPostByName, getPostsMeta } from "@/lib/posts";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import 'highlight.js/styles/github-dark.css'

type Props = {
  params: Promise<{
    postId: string;
  }>
}
export const revalidate = 86400;

export async function generateMetadata({params}: Props) : Promise<Metadata> {
  const {postId} = await params;  
  const post = await getPostByName(`${postId}.mdx`);
  
if(!post) return {
  title: 'Page Not Found'
}

  return {
    title: post.meta.title,
  }
}

export async function generateStaticParams(){
  const posts = await getPostsMeta();
  if(!posts) return [];

  return posts.map(post => ({
    postId: post.id
  }))
}
  
export default async function page({params}: Props) {
  const {postId} = await params;
  const post = await getPostByName(`${postId}.mdx`);
  if(!post) notFound();
  
  const {content , meta} = post;
  const {date, title, tags} = meta;
  const pubDate = getFormattedDate(date);

  const renderedTags = tags.map((tag, i) => (
    <Link key={i} href={`/tags/${tag}`}>{tag}</Link>
  ))

  return (
    <>
      <h2 className="text-3xl mt-4 mb-0">{title}</h2>
      <p className="mt-0 text-sm">{pubDate}</p>
      <article>
        {content}
      </article>
      <section>
        <h3>Related:</h3>
        <div className="flex flex-row gap-4">
          {renderedTags}
        </div>
      </section>
      <p className="mb-10">
        <Link href="/">◀ Back to home</Link>
      </p>
    </>
  )
}
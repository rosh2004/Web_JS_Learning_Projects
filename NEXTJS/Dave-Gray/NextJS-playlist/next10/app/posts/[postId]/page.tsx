import getFormattedDate from "@/lib/getFormattedDate";
import { getPostData, getSortedPostsData } from "@/lib/posts";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    postId: string;
  }>
}
export async function generateMetadata({params}: Props) : Promise<Metadata> {
  const posts = getSortedPostsData();
  const {postId} = await params;  
  const post = posts.find(post => post.id === postId);
  
if(!post) return {
  title: 'Page Not Found'
}

  return {
    title: post.title,
  }
}

export function generateStaticParams(){
  const posts = getSortedPostsData();
  return posts.map(post => ({
    postId: post.id
  }))
}
  
export default async function page({params}: Props) {
  const posts = getSortedPostsData();
  const {postId} = await params;

  const {title, date, contentHtml} = await getPostData(postId);
  const pubDate = getFormattedDate(date);

  if(!posts.find(post => post.id === postId)) return notFound();
  return (
    <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
      <h1 className="text-3xl mt-4 mb-0">{title}</h1>
      <p className="mt-0">{pubDate}</p>
      <article>
        <section dangerouslySetInnerHTML={{__html: contentHtml}} />
        <p>
          <Link href="/">🔙 Back to home </Link>
        </p>
      </article>
    </main>
  )
}
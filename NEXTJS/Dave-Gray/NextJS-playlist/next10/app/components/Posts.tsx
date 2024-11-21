import { getSortedPostsData } from "@/lib/posts"
import PostListItem from "./PostListItem";

export default function Posts() {

  const posts = getSortedPostsData();

  const content = posts.map((post) => (
    <PostListItem key={post.id} post={post} />
  ))

  return (
    <section className="mt-6 mx-auto max-w-2xl">
      <h2 className="text-4xl font-bold dark:text-white/90">Blog</h2>
      <ul className="w-full">
        {content}
      </ul>
    </section>
  )
}

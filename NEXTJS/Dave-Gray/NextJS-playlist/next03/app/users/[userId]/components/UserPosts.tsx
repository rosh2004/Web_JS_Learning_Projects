type Props = {
  promise: Promise<Post[]>
}

export default async function UserPosts({promise} : Props){
  const posts = await promise;
  const renderedPosts =  await posts.map((post) => (
    <article className="border rounded bg-slate-300 my-4 p-2 text-gray-900" key={post.id}>
      <h2 className="pb-2 text-lg font-bold">{post.title}</h2>
      <p className="ps-4">{post.body}</p>
    </article>
  ))

  return <>
    {renderedPosts}
  </>
}
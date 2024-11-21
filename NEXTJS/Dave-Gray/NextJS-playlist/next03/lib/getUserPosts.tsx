export default async function getUserPosts(userId: string): Promise<Post[]> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    {next: {revalidate: 60}}
  );
  if(!res.ok) throw new Error('failed to fetch posts')
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  return res.json();
}

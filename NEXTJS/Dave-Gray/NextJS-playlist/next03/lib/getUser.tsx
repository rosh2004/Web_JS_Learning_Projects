export default async function getUser(userId: string) : Promise<User> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  // if(!res.ok) return null;
  return res.json();
}

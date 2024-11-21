import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className='text-2xl'>Hello</h1>
      <Link href={'/about'}>Link To About</Link>
    </main>
  );
}

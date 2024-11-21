import type { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Users'
}

export default async function UsersPage() {
  const userData: Promise<User[]>= getAllUsers();
  const users = await userData;

  const renderedUsers = users.map(user => (
    <div className="border p-2 bg-slate-900" key={user.id}>
      <Link href={`/users/${user.id}`}>{user.name}</Link>
    </div>
  ))

  const content = (
    <section>
      <h2>
        <Link href="/">Back to Home</Link>
      </h2>
      <br />
      <div className="flex flex-wrap gap-2 text-nowrap">
        {renderedUsers}
      </div>
    </section>
  )

  return content
}

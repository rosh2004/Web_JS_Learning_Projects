import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";
import Link from "next/link";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";
import type { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";

import { notFound } from "next/navigation";

type Params = {
  params: Promise<{
    userId: string;
  }>;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { userId } = await params
  const userData: Promise<User> = getUser(userId);
  const user : User = await userData;

  if(!user?.name) {
    return {
      title: "User Not Found"
    }
  }

  return {
    title: user.name,
    description: `This is the page of ${user.name}`
  }
}

export default async function UserPage({params}: Params) {
  const {userId} = await params;
  const userData : Promise<User> = getUser(userId);
  const userPostsData : Promise<Post[]> = getUserPosts(userId);

  // const [user, userPosts] = await Promise.all([userData, userPostsData])
  const user = await userData;
  if(!user?.name) return notFound();

  const renderedUser = (
    <div>
      <div>{user.name}</div>
      <div>{user.email}</div>
    </div>
  ) 
  const renderedFallback = (
    <div>
      Loading....
    </div>
  )

  return (
    <>
      <div>
        <Link prefetch={true} href={'./'}>Go Back</Link>
      </div>
      <br />
      {renderedUser}
      <br />
      <Suspense fallback={renderedFallback}>
        <UserPosts promise={userPostsData}/>
      </Suspense>
    </>
  )
}

export async function generateStaticParams(){
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;

  return users.map((user) => ({
    userId: user.id.toString()
  }))
}

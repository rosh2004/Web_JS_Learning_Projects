import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest){
  const path = request.nextUrl.searchParams.get('path');
  
  if(request.nextUrl.searchParams.get('secret') !== process.env.MY_SECRET_TOKEN) {
    const resJson = {
      revalidate: false,
      now: Date.now(),
      message: "Invalid Token"
    }
    return new NextResponse(
      JSON.stringify(resJson),
      { 
        status: 401
      }
    )
  }

  if(path) {
    revalidatePath(path);
    return NextResponse.json({
      revalidate: true,
      now: Date.now()
    });
  }

  return Response.json({
    revalidate: false,
    now: Date.now(),
    message: 'Missing path to revalidate'
  })
}
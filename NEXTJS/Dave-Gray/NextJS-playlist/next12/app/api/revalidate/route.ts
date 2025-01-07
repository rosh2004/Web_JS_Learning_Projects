import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest){
  const secret = request.nextUrl.searchParams.get('secret');
  if( secret !== process.env.MY_SECRET_TOKEN) {
    const resJson = {
      revalidate: false,
      now: Date.now(),
      message: "Invalid Token"
    }
    return new NextResponse(
      JSON.stringify(resJson),
      { 
        status: 401,
        statusText: 'Unauthorized',
        headers: {
          'Content-Type': 'applicationjson'
        }
      }
    )
  }

  const path = request.nextUrl.searchParams.get('path') || '/';

  if(path) {
    revalidatePath(path);
    return NextResponse.json({
      revalidate: true,
      now: Date.now()
    });
  }
}
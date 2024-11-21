import { NextResponse } from "next/server";

const allowedOrigins = process.env.NODE_ENV === 'production'
  ? ['https://www.some.com', 'https://some.com']
  : ['http://localhost:3000', 'https://www.google.com'];

export function middleware(request: Request) {
  const origin = request.headers.get('origin');
  
  console.log('ORIGIN: ', origin);
  if(origin && !allowedOrigins.includes(origin)){
    return new NextResponse(null, {
      status: 400,
      statusText: "Bad Request",
      headers: {
        'Content-Type': 'text/plain'
      }
    })
  }

  console.log('middleware');
  // console.log(request.method);
  // console.log(request.headers);
  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*'
}
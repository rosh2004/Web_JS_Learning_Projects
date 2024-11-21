import { NextResponse } from "next/server";
import { limiter } from "../config/limiter";

const API_KEY: string = process.env.DATA_API_KEY as string;

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";

export async function GET(request: Request){
  const origin = request.headers.get('origin')
  const remaining = await limiter.removeTokens(1);
  if(remaining < 0) return new NextResponse(null, {
    status: 429,
    statusText: "Too Many Requests",
    headers: {
      'Access-Control-Allow-Origin': origin || '*',
      'Content-Type': 'text/plain',
    }
  })
  console.log('Remaining Rokens ->', remaining);
  const res = await fetch(DATA_SOURCE_URL);
  const todos : Todo[] = await res.json();
  return new NextResponse(JSON.stringify(todos), {
    headers: {
      'Access-Control-Allow-Origin': origin || "*",
      'Content-Type': 'application/json'
    }
  });
}

export async function POST(request: Request){
  const {userId, title} : Partial<Todo> = await request.json()
  if(!userId || !title) return NextResponse.json({
    message: 'Missing required data'
  })
  const res = await fetch(DATA_SOURCE_URL, {
    method: 'POST',
    headers: {
      "Content-Type" : "application/json",
      'API-Key': API_KEY
    },
    body: JSON.stringify({
      userId, title, completed: false
    }),
  });
  const newTodo : Partial<Todo> = await res.json();
  return NextResponse.json(newTodo);
}

export async function PUT(request: Request){
  const {id, userId, title, completed} : Todo = await request.json()
  if(!userId || !title || !id || typeof(completed) !== 'boolean') return NextResponse.json({
    message: 'Missing required data'
  })
  const res = await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: 'PUT',
    headers: {
      "Content-Type" : "application/json",
      'API-Key': API_KEY
    },
    body: JSON.stringify({
      userId, title, completed
    }),
  });
  const newTodo : Todo = await res.json();
  return NextResponse.json(newTodo);
}

export async function DELETE(request: Request){
  const { id }: Partial<Todo> = await request.json();

  if(!id) return NextResponse.json({
    message: "Todo id required"
  })

  await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'API-Key': API_KEY
    }
  })

  return NextResponse.json({
    message: `Todo ${id} deleted`
  });
}
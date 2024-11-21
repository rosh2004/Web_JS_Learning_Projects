import { NextResponse } from "next/server";

export const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";


type Params = {
  params: Promise<{
    id: string
  }>
}

export async function GET(request: Request, {params}: Params){
    const {id} = await params;
    const res = await fetch(`${DATA_SOURCE_URL}/${id}`);
    const todo : Todo = await res.json();
    if(!todo.id) return NextResponse.json({
      message: `Todo with id ${id} not found`
    })
    return NextResponse.json(todo);
}
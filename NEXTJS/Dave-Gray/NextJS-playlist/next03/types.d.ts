type User = {
  id: number;
  name: string,
  username: string,
  email: string,
  
}

type Post = {
  id: string;
  userId: string;
  title: string;
  body: string;
}
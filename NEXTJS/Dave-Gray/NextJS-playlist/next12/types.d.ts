type Meta = {
  id: string,
  title: string,
  date: string,
  tags: string[]
}

type Filetree = {
  tree: [
    {
      path: string,
    }
  ]
}

type BlogPost = {
  meta: Meta,
  content: ReactElement<unknown, string | JSXElementConstructor<unknown>>,
}
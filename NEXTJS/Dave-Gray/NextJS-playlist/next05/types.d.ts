type Result = {
  pageid: string,
  title: string,
  extract: string,
  thumbnail?: {
    source: string,
    width: number,
    height: number,
  }
}

type SearchResults = {
  query?: {
    pages?: {
      [k: string]: Result;
    },
  }
}
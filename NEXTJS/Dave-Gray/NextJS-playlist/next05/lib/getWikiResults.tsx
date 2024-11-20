export default async function getWikiResults(searchTerm: string) : Promise<SearchResults> {
  const searchParams = new URLSearchParams({
    action: 'query',
    generator: 'search',
    gsrsearch: searchTerm,
    gsrlimit: '20',
    prop: 'pageimages|extracts',
    exchars: '100',
    exintro: 'true',
    explaintext: 'true',
    exlimit: 'max',
    format: 'json',
    origin: '*',
})
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const response = await fetch('https://en.wikipedia.org/w/api.php?' + searchParams);
  return response.json();
}



import getWikiResults from "@/lib/getWikiResults";
import { Metadata } from "next";
import Item from "./components/Item";

type Props = {
  params: Promise<{
    searchTerm: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { searchTerm } = await params;
  const wikiResults = await getWikiResults(searchTerm);

  const displayTerm = searchTerm.replaceAll("%20", " ");
  if (!wikiResults?.query?.pages)
    return {
      title: `${displayTerm} Not Found`,
    };

  return {
    title: displayTerm,
    description: `Search results for ${displayTerm}`,
  };
}

export default async function SearchResults({ params }: Props) {
  const { searchTerm } = await params;
  const wikiResults = await getWikiResults(searchTerm);
  await new Promise((resolve) => setTimeout(resolve, 2000))

  console.log("NOT LOADING");
  const results = wikiResults?.query?.pages;
  const renderedPages = results ? (
    Object.values(results).map((result) => (
      <Item key={result.pageid} result={result} />
    ))
  ) : (
    <h2 className="p-2 text-xl">{`${searchTerm.replaceAll('%20', ' ')} Not Found`}</h2>
  );

  const content = (
    <main className="bg-slate-200 mx-auto max-w-lg py-1">{renderedPages}</main>
  );

  return content;
}

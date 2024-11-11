import { useLoaderData } from "react-router-dom";
import type { SearchLoaderResult } from "./searchLoader";
import PackageListItem from "../../components/PackageListItem";

function SearchPage() {
  const { searchResults } = useLoaderData() as SearchLoaderResult;
  const renderedResults = searchResults.map((data) => (
    <PackageListItem key={data.name} pack={data} />
  ));
  return <div>
    <h1 className="text-2xl font-bold my-6">Search Page</h1>
    <div className="space-y-4 mt-4">
      {renderedResults}
    </div>
  </div>
}

export default SearchPage;

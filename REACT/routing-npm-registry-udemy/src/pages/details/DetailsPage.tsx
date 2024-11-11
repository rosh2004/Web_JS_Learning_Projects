import { useLoaderData } from "react-router-dom"
import type { DetailsLoaderResult } from "./detailsLoader";

function DetailsPage() {
  const { details } = useLoaderData() as DetailsLoaderResult;
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">{details.name}</h1>

      <div>
        <h3 className="text-lg font-bold">Description</h3>
        <div className="p-3 bg-gray-200 rounded">{details.description}</div>
      </div>

      <div>
        <h3 className="text-lg font-bold">Licnse</h3>
        <div className="p-3 bg-gray-200 rounded">{details.license}</div>
      </div>

      <div>
        <h3 className="text-lg font-bold">Author</h3>
        <div className="p-3 bg-gray-200 rounded">{details.author?.name ?? 'No Author'}</div>
      </div>
    </div>
  )
}

export default DetailsPage
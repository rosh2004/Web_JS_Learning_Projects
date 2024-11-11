import { Params } from "react-router-dom";
import { getPackage } from "../../api/queries/getPackageDetails";
import { PackageDetails } from "../../api/types/packageDetails";

interface LoaderArgs {
  params: Params;
}

export interface DetailsLoaderResult {
  details: PackageDetails;
}

export async function detailsLoader({params}: LoaderArgs): Promise<DetailsLoaderResult>{
  const name = params.name;
  if(!name) throw new Error('Name must be provided');
  const details = await getPackage(name);
  return {
    details
  };
}
import { PackageDetails } from "../types/packageDetails";

async function getPackage(name: string): Promise<PackageDetails>{
  const res = await fetch(
    `https://registry.npmjs.org/${name}`
  );
  const detail = await res.json() as PackageDetails;
  return detail;
}

export { getPackage }
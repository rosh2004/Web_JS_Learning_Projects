import { PackageDetails } from "../types/packageDetails";

const FEATURED_PACKAGES = [
  'react',
  'esbuild',
  'typescript',
  'vite',
]

export async function getFeaturedPackages() : Promise<PackageDetails[]>{
  const promises = FEATURED_PACKAGES.map(async (name)  => {
    const res = await fetch(`https://registry.npmjs.org/${name}`);
    const data = await res.json() as PackageDetails;
    return data;
  })
  return Promise.all(promises);
}
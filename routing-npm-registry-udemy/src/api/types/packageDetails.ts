export interface PackageDetails {
  name: string;
  description:string;
  readme: string;
  author: {
    email: string;
    name: string;
  }
  maintainers: {
    name: string;
    email: string;
  }[]
  license: string;
}
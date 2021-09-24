declare module "canadv.ash" {
  export function canAdv(location: Location, x: boolean): boolean;
}

declare module "*.yml" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data: any;
  export default data;
}

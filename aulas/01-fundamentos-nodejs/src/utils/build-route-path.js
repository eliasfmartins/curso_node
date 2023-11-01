// /users/:id
export function buildRoutePath(path) {
  const routePrametersRegex = /:([a-zA-Z]+)/g;
  const pathWithParams = path.replaceAll(routePrametersRegex, "(?<id>[a-z0-9-_]+)");
  const pathRegex = new RegExp(`^${pathWithParams}`);
  return pathRegex;
}

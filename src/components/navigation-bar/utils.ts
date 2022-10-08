import { ROUTE_PATHS } from "mainConstants";

export function getNavigationKeyByPage(page: string) {
  if (page.includes(ROUTE_PATHS.WEEK))
    return 1;
  if (page.includes(ROUTE_PATHS.AUDIENCE))
    return 2;
  return 0;
}
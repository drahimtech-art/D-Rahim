import type { NavigateFunction } from "react-router-dom";

export function goBackInRouteHistory(routeNavigator: NavigateFunction) {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    routeNavigator("/", { replace: true });
  }
}

export function goBackInRouteHistory({
  routeNavigator,
}: {
  routeNavigator: (url?: string, options?: object) => void;
}) {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    routeNavigator("/", { replace: true });
  }
}

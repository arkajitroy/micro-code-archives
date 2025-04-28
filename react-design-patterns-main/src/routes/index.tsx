import { RouteObject, useRoutes } from "react-router-dom";
import ContainerPresetationPattern from "../design-patterns/container-presentation-pattern";
import CustomHookPattern from "../design-patterns/custom-hook-pattern";
import CompoundComponentPattern from "../design-patterns/compound-component-pattern";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <div>Home</div>,
  },
  {
    path: "/container-presentation-pattern",
    element: <ContainerPresetationPattern />,
  },
  {
    path: "/custom-hook-pattern",
    element: <CustomHookPattern />,
  },
  {
    path: "/compound-component-pattern",
    element: <CompoundComponentPattern />,
  },
];

const AppRoutes = () => {
  const routeElement = useRoutes(routes);

  return routeElement;
};

export default AppRoutes;

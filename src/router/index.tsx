import type { RouteObject } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import { ROUTES } from "../constants/endpoint";
import LandingPage from "../pages/landing";
import NotFound from "../pages/notFound";
import ResultPage from "../pages/result";
import UploadPage from "../pages/upload";

const allRoutes: RouteObject[] = [
  { path: ROUTES.APP_ROOT, element: <LandingPage /> },
  { path: ROUTES.UPLOAD, element: <UploadPage /> },
  { path: ROUTES.RESULT, element: <ResultPage /> },
  { path: "/*", element: <NotFound /> },
];

export default function Router() {
  return useRoutes(allRoutes);
}

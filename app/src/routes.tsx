import Index from "./Pages/Index/Index";
import AuthPage from "./Pages/Auth/AuthPage.tsx";

const routes = [
  { path: "/", element: <Index /> },
  { path: "/auth", element: <AuthPage /> },
  // { path: "", element: "" },
  // { path: "", element: "" },
];

export default routes;

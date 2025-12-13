import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import LandingPage from "./pages/landingPage";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <LandingPage /> },
    ],
    errorElement: <ErrorPage />,
  },
];

export default routes;

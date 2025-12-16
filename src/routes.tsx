import App from "./App";
import CharactersPage from "./pages/CharactersPage";
import ErrorPage from "./pages/ErrorPage";
import HousePage from "./pages/HousePage";
import LandingPage from "./pages/LandingPage";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <LandingPage /> },
      { path: "characters", element: <CharactersPage /> },
      {path: "house/:houseid", element: <HousePage /> }
    ],
    errorElement: <ErrorPage />,
  },
];

export default routes;

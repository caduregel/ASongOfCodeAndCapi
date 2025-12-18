import App from "./App";
import CharactersPage from "./pages/CharactersPage";
import ErrorPage from "./pages/ErrorPage";
import HousePage from "./pages/HousePage";
import LandingPage from "./pages/LandingPage";
import CharacterPage from "./pages/CharacterPage";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <LandingPage /> },
      { path: "characters", element: <CharactersPage /> },
      { path: "house/:houseid", element: <HousePage /> },
      { path: "character/:characterid", element: <CharacterPage /> },
    ],
    errorElement: <ErrorPage />,
  },
];

export default routes;

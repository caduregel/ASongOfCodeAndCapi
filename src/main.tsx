import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import routes from "./routes.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="transition-colors duration-700 bg-white dark:bg-neutral-950">
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  </StrictMode>
);

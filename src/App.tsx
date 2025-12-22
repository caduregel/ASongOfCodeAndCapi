import { Outlet } from "react-router";
import PublicNav from "./components/PublicNav";

function App() {
  return (
    <div>
        <PublicNav />
        <main className="flex flex-col w-full items-center justify-center p-3">
          <Outlet />
        </main>
    </div>
  );
}

export default App;

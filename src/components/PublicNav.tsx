import { Link } from "react-router";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { ModeToggle } from "./ui/modeToggle";

// Navigation bar for public pages with links to Houses and Characters, and a mode toggle
// Deze heb ik genomen van een oud project van mij, zie studieflows.net
function PublicNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky duration-700 transition-all bg-background top-0 z-50 px-4 py-2 flex gap-2 items-center ${
        scrolled && "shadow-md"
      }`}
    >
      <Button variant="ghost" asChild className="text-md">
        <Link to="/">Houses</Link>
      </Button>
      <Button variant="ghost" asChild className="text-md">
        <Link to="/characters">Characters</Link>
      </Button>
      <div className="ml-auto">
        <ModeToggle />
      </div>
    </nav>
  );
}

export default PublicNav;

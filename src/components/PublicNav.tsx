import { Link } from "react-router";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { ModeToggle } from "./ui/modeToggle";

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
      className={`sticky duration-700 transition-all bg-background top-0 z-50 px-4 py-2 flex gap-2 flex-col items-center md:flex-row md:justify-center ${
        scrolled && "shadow-md"
      }`}
    >
      <div className="flex gap-5 items-center">
        <Button variant="ghost" asChild className="text-md">
          <Link to="/">Houses</Link>
        </Button>
        <Button variant="ghost" asChild className="text-md">
          <Link to="/characters">Characters</Link>
        </Button>
        <ModeToggle />
      </div>
    </nav>
  );
}

export default PublicNav;

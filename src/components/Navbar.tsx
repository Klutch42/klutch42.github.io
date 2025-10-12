import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background">
      <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
        <div className="w-8" />
        
        <div className="flex gap-12 items-center">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `text-sm hover:text-foreground transition-colors ${
                isActive ? "text-foreground" : "text-muted-foreground"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `text-sm hover:text-foreground transition-colors ${
                isActive ? "text-foreground" : "text-muted-foreground"
              }`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/notes"
            className={({ isActive }) =>
              `text-sm hover:text-foreground transition-colors ${
                isActive ? "text-foreground" : "text-muted-foreground"
              }`
            }
          >
            Notes
          </NavLink>
        </div>

        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;

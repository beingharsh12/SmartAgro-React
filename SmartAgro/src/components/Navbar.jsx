import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const navItems = [
  { label: "Home", to: "/home" },
  { label: "Crop Guide", to: "/cropguide" },
  { label: "Purchase", to: "/purchase" },
  { label: "Agriculturists", to: "/agriculturists" },
  { label: "Weather", to: "/weather" },
  { label: "Login", to: "/login" },
  { label: "Sign Up", to: "/signup" },
];

const navLinkClass = ({ isActive }) =>
  `block rounded px-2 py-1 transition-colors hover:text-green-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-300 ${
    isActive ? "text-green-300 underline underline-offset-4" : ""
  }`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // useEffect(() => {
  //   const handleEscape = (event) => {
  //     if (event.key === "Escape") {
  //       setMenuOpen(false);
  //     }
  //   };

  //   window.addEventListener("keydown", handleEscape);
  //   return () => window.removeEventListener("keydown", handleEscape);
  // }, []);

  return (
    <nav aria-label="Main navigation" className="nav text-white p-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/home"
          className="text-2xl font-bold rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-300"
          aria-label="SmartAgro home"
          onClick={() => setMenuOpen(false)}
        >
          SmartAgro
        </Link>

        <ul className="hidden md:flex space-x-4 text-lg">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} className={navLinkClass}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {menuOpen && (
          <ul
            id="mobile-navigation"
            className="md:hidden flex flex-col items-stretch gap-2 mt-4 text-lg absolute top-14 right-4 bg-black/95 border border-gray-200 p-4 rounded transition-all duration-300 z-10 w-64"
          >
            {navItems.map((item, index) => (
              <li
                key={item.to}
                className={index === navItems.length - 1 ? "" : "border-b border-gray-500 pb-2"}
              >
                <NavLink
                  to={item.to}
                  className={navLinkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        )}

        <button
          type="button"
          className="flex md:hidden text-2xl rounded p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-300"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
        >
          <span aria-hidden="true">{menuOpen ? "x" : "="}</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

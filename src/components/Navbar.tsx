import { Link } from "react-router-dom";
import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import Home from "../pages/Home";

import { DiCode } from "react-icons/di";

export default function Navbar() {
  const [mobile, SetMobile] = useState<boolean>(false);

  function handleMobileMenu() {
    SetMobile((prev) => {
      return !prev;
    });
  }
  return (
    <nav className="navbar">
      <p className="logo">
        <DiCode />
      </p>
      <ul className={mobile ? "mobile--links--menu" : "navbar__links"}>
        <Link to="/" className="navbar__links__home">
          <li>Home</li>
        </Link>{" "}
        <Link to="/projects" className="navbar__links__projects">
          <li>Projects</li>
        </Link>
      </ul>

      <button className="mobile--menu--icon" onClick={handleMobileMenu}>
        {mobile ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
}

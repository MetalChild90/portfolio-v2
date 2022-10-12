import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { GiHammerSickle } from "react-icons/gi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaRegEnvelope } from "react-icons/fa";

function Navbar() {
  const [currentLocation, setCurrentLocation] = useState("");

  const location = useLocation();

  useEffect(() => {
    setCurrentLocation(location.pathname);
  }, [location]);

  const links = ["/", "/projects", "/knowledge", "/contact"];
  return (
    <nav className="Navbar">
      <ul>
        {links.map((link, i) => (
          <li key={i}>
            <Link
              className={`Navbar-link ${currentLocation === link && "active"}`}
              to={link}
            >
              {link === "/" ? (
                <FaHome />
              ) : link === "/projects" ? (
                <GiHammerSickle />
              ) : link === "/knowledge" ? (
                <HiOutlineLightBulb />
              ) : (
                <FaRegEnvelope />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;

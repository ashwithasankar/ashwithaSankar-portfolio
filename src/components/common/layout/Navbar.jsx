import "./Navbar.css";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import {
  FiMenu,
  FiX,
  FiDownload,
  FiMoon,
  FiSun,
} from "react-icons/fi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    setDarkMode(true);
  }
}, []);

const toggleTheme = () => {
  if (darkMode) {
    document.body.classList.remove("dark-theme");
    localStorage.setItem("theme", "light");
  } else {
    document.body.classList.add("dark-theme");
    localStorage.setItem("theme", "dark");
  }

  setDarkMode(!darkMode);
};

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Experience", to: "experience" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">

        <Link
  to="home"
  smooth
  duration={600}
  className="logo"
>
  <span>Ashwi.</span>
  <small>MERN Stack Developer</small>
</Link>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              offset={-70}
              duration={600}
              spy={true}
              activeClass="active-link"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <button
  className="theme-toggle"
  onClick={toggleTheme}
  type="button"
>
  {darkMode ? <FiSun /> : <FiMoon />}
</button>
          <a
            href="/resume.pdf"
            className="resume-btn"
            download
          >
            <FiDownload />
            Resume
          </a>
        </nav>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

      </div>
    </header>
  );
};

export default Navbar;
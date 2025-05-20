"use client";

import React, { useEffect, useState } from "react";
import "../styles/navigationBar.scss";
import { links } from "../constants/navRoutes";
import { useTheme } from "next-themes";

const HeaderTopBarComponent = () => {
  const { theme, setTheme } = useTheme();
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("Aze");
  const [activeLink, setActiveLink] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  const toggleDarkMode = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <header className="header-top-bar">
      <div className="header-top-bar__top">
        <nav className="header-top-bar__nav">
          {links.map((link, index) => (
            <a
              href="#"
              key={link.href}
              onClick={() => setActiveLink(index)}
              className={`header-top-bar__link${
                activeLink == index ? " header-top-bar__link--active" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-top-bar__hamburger">
          <img
            src={
              theme === "light"
                ? "/icons/hamburger.svg"
                : "/icons/hamburgerLight.svg"
            }
            alt="hamburger"
          />
        </div>

        <div className="header-top-bar__controls">
          <div className="header-top-bar__version">Əvvəlki versiyaya keçid</div>
          {language}
          <img
            src={
              theme === "light" ? "/icons/Vector.svg" : "/icons/vectorLight.svg"
            }
            alt="icon"
            className="language-icon"
          />

          <div
            className={`header-top-bar__dark-toggle${
              isDark ? " header-top-bar__dark-toggle--active" : ""
            }`}
            onClick={toggleDarkMode}
            title={isDark ? "Light Mode" : "Dark Mode"}
          ></div>
        </div>
      </div>
    </header>
  );
};

export default HeaderTopBarComponent;

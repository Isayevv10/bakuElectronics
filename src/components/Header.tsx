"use client";

import React, { useEffect, useState } from "react";
import "../styles/header.scss";
import { useTheme } from "next-themes";

const Header = () => {
  const [location, setLocation] = useState("Bakı şəhəri");
  const [isMobile, setIsMobile] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 576px)");

    const handleResize = () => setIsMobile(mediaQuery.matches);
    handleResize();

    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <header>
      <div className="bottom-section">
        <div className="bottom-section__logo">
          <img src="/icons/logo.svg" alt="Logo" />
        </div>

        <button className="bottom-section__catalog-button">
          <img src="/icons/Category.svg" alt="logo" />
          Kataloq
        </button>

        <div className="bottom-section__search-input">
          <input
            type="text"
            placeholder={isMobile ? "Axtar..." : "Məhsul axtar..."}
          />
          {}
          <img
            src={
              theme === "light" ? "/icons/search.svg" : "/icons/searchLight.svg"
            }
            alt="search"
          />
        </div>

        <select
          className="bottom-section__location-select"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          aria-label="Select location"
        >
          <option>Sumqayıt şəhəri</option>
          <option>Bakı şəhəri</option>
          <option>Gəncə şəhəri</option>
        </select>

        <div className="bottom-section__icons-group">
          <div className="bottom-section__icons-group-button" title="Compare">
            <img
              src={
                theme === "dark"
                  ? "/icons/scalesLight.svg"
                  : "/icons/scales.svg"
              }
              alt="scales"
            />
          </div>

          <div className="bottom-section__icons-group-button" title="Cart">
            <img
              src={theme === "dark" ? "/icons/buyLight.svg" : "/icons/buy.svg"}
              alt="buy"
            />
          </div>

          <div className="bottom-section__icons-group-button" title="Wishlist">
            <img
              src={
                theme === "dark" ? "/icons/heartLight.svg" : "/icons/heart.svg"
              }
              alt="heart"
            />
          </div>

          <div
            className="bottom-section__icons-group-button"
            title="User Account"
          >
            <img
              src={
                theme === "dark"
                  ? "/icons/profileLight.svg"
                  : "/icons/profile.svg"
              }
              alt="profile"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

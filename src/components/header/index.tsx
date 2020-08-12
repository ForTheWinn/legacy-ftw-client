import React, { useEffect, useState } from "react";
import className from "classnames";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuActive, setMenuActive] = useState(false);
  const [isScrollTop, setScrollTop] = useState(true);
  const onToggleMenu = (status: boolean) => setMenuActive(status);

  const onScroll = (isTop: boolean) => setScrollTop(isTop);
  useEffect(() => {
    // eslint-disable-next-line no-undef
    document.addEventListener("scroll", () => {
      // eslint-disable-next-line no-undef
      const isTop = window.scrollY < 100;
      if (isTop !== isScrollTop) {
        onScroll(isTop);
      }
    });
  }, [isScrollTop]);
  return (
    <nav className={className("navbar is-white")}>
      <div className="container is-small">
        <div className="navbar-brand">
          <div className="navbar-item">
            <img
              src={`${process.env.PUBLIC_URL}/assets/logo/ftw_dark.png`}
              alt="FTW logo"
            />
          </div>
          <div
            onClick={() => onToggleMenu(!isMenuActive)}
            role="button"
            tabIndex={0}
            className="navbar-burger burger"
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div
          className={className("navbar-menu", isMenuActive ? "is-active" : "")}
        >
          <div className="navbar-end">
            <a href="/#projects" className="navbar-item">
              Projects
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://docs.ftwcoin.io"
              className="navbar-item"
            >
              Developers
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={"https://medium.com/ftw-blog"}
              className="navbar-item"
            >
              Blog
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

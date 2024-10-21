/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

'use client';

import { usePathname } from 'next/navigation';
import { Link } from 'next-view-transitions';
import React, { useEffect, useState } from 'react';

export const Nav = () => {
  const currentRoute = usePathname();
  const [navActive, setNavActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const closeMobileNavOnClick = () => {
    if (isMobile) {
      setTimeout(() => {
        setNavActive((prevNavActive) => !prevNavActive);
      }, 500);
    }
  };

  // Listen for window resize to determine if it is mobile or not
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768); // Mobile if width <= 768px
  };

  useEffect(() => {
    handleResize(); // Initial check on component mount
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="px-4 text-black body-font md:sticky w-full bg-black logoShadow">
      <div className="mx-auto flex flex-wrap py-5 md:flex-row items-center justify-between">
        {/* @ts-ignore */}
        <Link href="/">
          <h1 className="text-3xl md:hover:text-4xl transition-all ease-in-out duration-150 font-black leading-tightest text-white">
            NXT<span style={{ color: 'red' }}>DKR</span>
          </h1>
        </Link>

        <nav className="nav">
          <div
            onClick={() => setNavActive((prevNavActive) => !prevNavActive)}
            className={`nav__menu-bar md:hidden menu__icon cursor-pointer duration-150 ease-linear ${
              navActive ? 'active' : ''
            }`}
          >
            <div />
            <div />
            <div />
          </div>
          <ul className={`nav__menu-list px-4 ${navActive ? 'active' : ''}`}>
            <Link
              href="/tasks"
              className={`nav__link text-white font-black ${
                currentRoute.includes('info') ? `active info` : ''
              }`}
              onClick={closeMobileNavOnClick}
            >
              INFO
            </Link>
            <Link
              href="https://ronan-oleary.com"
              className="nav__link text-white font-black"
              onClick={closeMobileNavOnClick}
            >
              Me
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

export const Nav = () => {
  const isMobile = useState(false);
  const currentRoute = usePathname();
  const [navActive, setNavActive] = useState(false);
  const closeMobileNavOnClick = () => {
    if (isMobile) {
      setTimeout(() => {
        setNavActive(!navActive);
      }, 500);
    }
  };
  return (
    <header className="px-4 text-black body-font md:sticky w-full bg-black logoShadow">
      <div className="mx-auto flex flex-wrap py-5 md:flex-row items-center justify-between">
        <Link href="/">
          <Image
            src="/assets/images/activepix-logo.png"
            alt="logo"
            width={150}
            height={50}
          />
        </Link>

        <nav className="nav">
          <div
            onClick={() => setNavActive(!navActive)}
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
              href="/info"
              className={`nav__link text-white font-black ${
                // @ts-ignore
                currentRoute.includes('info') ? `active info` : ''
              }`}
              onClick={closeMobileNavOnClick}
            >
              Profile
            </Link>
            <Link
              href="/info"
              className={`nav__link text-white font-black ${
                // @ts-ignore
                currentRoute.includes('info') ? `active info` : ''
              }`}
              onClick={closeMobileNavOnClick}
            >
              My Gallery
            </Link>
            <Link
              href="/info"
              className={`nav__link text-white font-black ${
                // @ts-ignore
                currentRoute.includes('info') ? `active info` : ''
              }`}
              onClick={closeMobileNavOnClick}
            >
              Account
            </Link>
            <div className="flex items-center">
              <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full w-12 h-12 ring-1 ring-white dark:ring-neutral-900">
                <Image
                  alt="John Doe"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="absolute inset-0 w-full h-full object-cover hidden md:block"
                  sizes="100px"
                  src="/assets/images/avatar.webp"
                  width={75}
                  height={75}
                />
              </div>
              {/* <div className="flex-grow ms-3">
                <h4 className="nav__link text-white font-black">Hi, Ronan</h4>
              </div> */}
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

'use client';

import { usePathname } from 'next/navigation';
import { Link } from 'next-view-transitions';
import React, { useState } from 'react';

export const Nav = ({ menu }: any) => {
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
        {/* @ts-ignore */}
        <Link href="/">
          <h1 className="text-3xl md:hover:text-4xl transition-all ease-in-out duration-150 font-black leading-tightest text-white">
            NXT<span style={{ color: 'red' }}>DKR</span>
          </h1>
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
              INFO
            </Link>
            {menu.map((link: any, _id: number) => (
              // @ts-ignore
              // eslint-disable-next-line react/no-array-index-key
              <li id={_id} key={_id}>
                <Link
                  // @ts-ignore
                  href={`/${link.slug}`}
                  className={`nav__link text-white font-black ${
                    // @ts-ignore
                    currentRoute.includes(link.slug)
                      ? `active ${link.title}`
                      : ''
                  }`}
                  onClick={closeMobileNavOnClick}
                >
                  {link.title}
                </Link>
              </li>
            ))}
            {/* {isMobile ? 
                        <>
                            <hr className={`border-b border-white border-opacity-25`} />
                            <span className="inline-flex">
                                <>
                                <a className="text-white">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
                                </a>
                                <a className="ml-4 text-white">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
                                </a>
                                <a className="ml-4 text-white">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 20 20"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                                </a>
                                </>
                            </span>
                        </>
                    : ''} */}
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

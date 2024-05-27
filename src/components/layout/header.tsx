"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-dark-blue sticky top-0 z-[999]">
      <div className="container mx-auto flex items-center justify-between p-7">
        <Link href="/">
          <Image
            src="/home/png/logo-removebg-preview.png"
            alt="logo of site"
            width={261}
            height={48}
            className="mx-auto md:mx-0"
          />
        </Link>
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-20">
            <li>
              <Link className="font-normal text-base text-white" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="font-normal text-base text-white" href="/about">
                About us
              </Link>
            </li>
            <li>
              <Link className="font-normal text-base text-white" href="/services">
                Services
              </Link>
            </li>
            <li>
              <Link className="font-normal text-base text-white" href="/blogs">
                Blogs
              </Link>
            </li>
          </ul>
        </nav>
        <Link href="/contactUs" className="hidden md:block font-semibold py-2 px-3 text-sm bg-gradient-to-r from-custom-yellow-start to-custom-yellow-end rounded-md">
          Contact us
        </Link>
        <button
          className="md:hidden flex items-center text-white"
          onClick={toggleMobileMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-dark-blue">
          <ul className="flex flex-col items-center gap-5 py-5">
            <li>
              <Link className="font-normal text-base text-white" href="/" onClick={toggleMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link className="font-normal text-base text-white" href="/about" onClick={toggleMobileMenu}>
                About us
              </Link>
            </li>
            <li>
              <Link className="font-normal text-base text-white" href="/services" onClick={toggleMobileMenu}>
                Services
              </Link>
            </li>
            <li>
              <Link className="font-normal text-base text-white" href="/blogs" onClick={toggleMobileMenu}>
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/contactUs" className="font-semibold py-2 px-3 text-sm bg-gradient-to-r from-custom-yellow-start to-custom-yellow-end rounded-md" onClick={toggleMobileMenu}>
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

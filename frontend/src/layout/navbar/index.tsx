import { useState } from "react";
import logo from "/logo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar py-5 px-4 md:px-20" aria-label="Main navigation">
      <div className="navbar-start gap-10">
        <div className="flex gap-1">
          <img
            src={logo}
            alt="Teach logo"
            width="21"
            height="24"
            loading="lazy"
          />
          <a href="/" className="text-3xl font-title hover:cursor-pointer">
            teach
          </a>
        </div>

        <ul className="hidden lg:flex menu menu-horizontal px-1 text-lg font-semibold gap-10">
          <li>
            <a href="/products" className="hover-underline">
              Products
            </a>
          </li>
          <li>
            <a href="/solutions" className="hover-underline">
              Solutions
            </a>
          </li>
          <li>
            <a href="/pricing" className="hover-underline">
              Pricing
            </a>
          </li>
          <li>
            <details className="hover-underline">
              <summary>Resources</summary>
              <ul className="p-2 bg-white">
                <li>
                  <a href="/link">Submenu 1</a>
                </li>
                <li>
                  <a href="/link">Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>

      <div className="navbar-end gap-3 hidden lg:flex">
        <a href="/login" className="btn btn-ghost font-semibold">
          Log In
        </a>
        <a href="/signup" className="btn btn-outline font-semibold py-3 px-6">
          Sign Up Now
        </a>
      </div>

      <div className="navbar-end lg:hidden">
        <button
          aria-label="Open menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="btn btn-square btn-ghost"
        >
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 8C3 7.58579 3.33579 7.25 3.75 7.25H20.25C20.6642 7.25 21 7.58579 21 8C21 8.41421 20.6642 8.75 20.25 8.75H3.75C3.33579 8.75 3 8.41421 3 8Z"
              fill="#0F172A"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 12.5C3 12.0858 3.33579 11.75 3.75 11.75H20.25C20.6642 11.75 21 12.0858 21 12.5C21 12.9142 20.6642 13.25 20.25 13.25H3.75C3.33579 13.25 3 12.9142 3 12.5Z"
              fill="#0F172A"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 17C3 16.5858 3.33579 16.25 3.75 16.25H20.25C20.6642 16.25 21 16.5858 21 17C21 17.4142 20.6642 17.75 20.25 17.75H3.75C3.33579 17.75 3 17.4142 3 17Z"
              fill="#0F172A"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-20 left-0 right-0 bg-white shadow-md p-5 z-50 lg:hidden">
          <ul className="menu w-full text-lg">
            <li>
              <a href="/products" className="hover-underline">
                Products
              </a>
            </li>
            <li>
              <a href="/solutions" className="hover-underline">
                Solutions
              </a>
            </li>
            <li>
              <a href="/pricing" className="hover-underline">
                Pricing
              </a>
            </li>
            <li>
              <details className="hover-underline">
                <summary>Resources</summary>
                <ul className="p-2">
                  <li>
                    <a href="/link">Submenu 1</a>
                  </li>
                  <li>
                    <a href="/link">Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <div className="mt-4 flex flex-col gap-3">
              <a href="/login" className="btn btn-ghost font-semibold text-lg">
                Log In
              </a>
              <a
                href="/signup"
                className="btn btn-outline py-3 px-6 font-semibold border-2 border-black text-lg"
              >
                Sign Up Now
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}

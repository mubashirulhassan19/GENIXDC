"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { navItems } from "@/constants";

export const Navbar = () => {
  const pathname = usePathname();
  const isHomeRoute = pathname === "/" || pathname === "/smarthome";

  // Mobile menu open/close
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Track which sub-menu is open (both mobile & desktop)
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);

  // Ref for detecting clicks outside
  const menuRef = useRef(null);

  // Detect if user has scrolled (only matters for home routes)
  const [hasScrolled, setHasScrolled] = useState(false);

  // Close menu entirely when link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setOpenSubMenuIndex(null);
  };

  // Toggle a specific sub-menu (both mobile & desktop)
  const toggleSubMenu = (idx) => {
    setOpenSubMenuIndex((prev) => (prev === idx ? null : idx));
  };

  // Close menu if user clicks outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
        setOpenSubMenuIndex(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Scroll detection (only if on home route)
  useEffect(() => {
    if (!isHomeRoute) return;
    function handleScroll() {
      setHasScrolled(window.scrollY > 0);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomeRoute]);

  // Navbar background / shadow logic (no shadow)
  const navBgClasses = isHomeRoute
    ? hasScrolled
      ? "bg-white"
      : "bg-transparent"
    : "bg-white"; // always white if not home route, no shadow

  // UL (menu) background logic (no shadow)
  const ulBgClasses = isHomeRoute
    ? hasScrolled
      ? "bg-white"
      : "bg-transparent"
    : "bg-white";

  // Brand text color logic
  const brandTextClasses = clsx(
    "text-[25px] leading-8 font-bold",
    !isHomeRoute && "text-black", // not home => black
    isHomeRoute && !hasScrolled && "text-black md:text-white", // home + not scrolled => black mobile, white desktop
    isHomeRoute && hasScrolled && "text-black" // home + scrolled => black
  );

  // Menu item text color logic
  function getItemTextClasses() {
    if (!isHomeRoute) {
      return "text-black hover:border-black";
    }
    if (hasScrolled) {
      return "text-black hover:border-black";
    }
    // home + not scrolled => black mobile, white desktop
    return "text-black md:text-white hover:border-white";
  }

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 w-full flex justify-between items-center px-4 py-4 z-50 transition-colors duration-300",
        navBgClasses
      )}
    >
      {/* Logo / Brand */}
      <Link href="/" onClick={handleLinkClick}>
        <div className="flex gap-x-2 items-center">
          <Image
            src="/genixdclogo.png"
            alt="Genix MEP Design Consultant Logo"
            width={80}
            height={80}
            className="shrink-0"
          />
          <p
            className="font-bold text-xl sm:text-3xl text-[#292F36] "
            // className={brandTextClasses}
          >
            Genix MEP Design Consultant
          </p>
        </div>
      </Link>

      {/* Hamburger button (mobile) */}
      <button
        className="md:hidden text-black"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? (
          // Close (X) icon
          <div className="space-y-2">
            <span className="block w-6 h-0.5 bg-black rotate-45 translate-y-1.5"></span>
            <span className="block w-6 h-0.5 bg-black opacity-0"></span>
            <span className="block w-6 h-0.5 bg-black -rotate-45 -translate-y-1.5"></span>
          </div>
        ) : (
          // Hamburger
          <div className="space-y-2">
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </div>
        )}
      </button>

      {/* Main Navigation */}
      <ul
        ref={menuRef}
        className={clsx(
          "md:flex md:flex-row md:items-center md:gap-x-10",
          "flex-col items-start gap-y-2",
          // Show/hide on mobile
          isMenuOpen ? "flex" : "hidden",
          // Enable overflow visibility so submenus aren’t clipped
          "relative overflow-visible w-full md:w-auto p-4 md:p-0 z-50 transition-colors duration-300",
          ulBgClasses
        )}
      >
        {navItems.map((el, index) => {
          const hasSubItems = !!el.subItems?.length;
          const isSubMenuOpen = openSubMenuIndex === index;

          return (
            <li
              key={index}
              className={clsx(
                "relative w-full md:w-auto border-b-2 border-transparent text-xl",
                getItemTextClasses()
              )}
              style={{ color: "black" }}
            >
              {!hasSubItems ? (
                // Simple link
                <Link href={el.link} onClick={handleLinkClick}>
                  {el.text}
                </Link>
              ) : (
                <>
                  {/* Parent link + arrow */}
                  <div className="flex justify-between items-center w-full">
                    <Link href={el.link} onClick={handleLinkClick}>
                      {el.text}
                    </Link>
                    {/* Chevron toggles sub-menu on all breakpoints */}
                    <button
                      type="button"
                      className="flex items-center ml-2"
                      onClick={() => toggleSubMenu(index)}
                    >
                      <ChevronDown
                        className={clsx(
                          "w-4 h-4 transition-transform duration-200",
                          isSubMenuOpen && "rotate-180"
                        )}
                      />
                    </button>
                  </div>

                  {/* Absolutely positioned dropdown */}
                  {isSubMenuOpen && (
                    <div
                      className={clsx(
                        "absolute left-0 top-full mt-1 w-[200px]",
                        "bg-white border border-gray-200 z-[9999] p-2"
                      )}
                    >
                      {el.subItems.map((subEl, i) => (
                        <Link
                          key={i}
                          href={subEl.link}
                          className="block px-2 py-2 text-black border-b last-of-type:border-none border-b-transparent hover:border-b-black"
                          onClick={handleLinkClick}
                        >
                          {subEl.text}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

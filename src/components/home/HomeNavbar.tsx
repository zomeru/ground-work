import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import logo from "../../../public/assets/images/logo1.png";

import { Container } from "@/components";
import { useScroll } from "@/hooks";

interface LinkItem {
  name: string;
  href: string;
}

const links: LinkItem[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "Blog",
    href: "/blog",
  },
];

const HomeNavbar = () => {
  const [navHeight, setNavHeight] = useState(0);
  const navRef = useRef<HTMLElement>(null);
  const router = useRouter();
  const { isUp, yOffset } = useScroll();

  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.clientHeight);
    }
  }, [yOffset]);

  return (
    <nav
      style={{
        top: isUp ? 0 : -navHeight,
      }}
      ref={navRef}
      className="sticky z-50 py-4 transition-all duration-300 bg-white shadow"
    >
      <Container className="flex h-10 ">
        <div className="flex items-center space-x-4">
          <Image
            src={logo}
            width={80}
            height={80}
            alt="Logo"
            objectFit="contain"
            objectPosition="center"
          />
          <Link href="/">
            <a className="items-center hidden text-lg font-bold uppercase md:text-xl sm:block text-primary">
              Ground<span className="text-secondary">Work.</span>PH
            </a>
          </Link>

          <div className="items-center hidden md:flex">
            {links.map(({ name, href }) => {
              const active = router.pathname === href;
              return (
                <Link key={`link-${href}`} href={href}>
                  <a
                    className={`px-6 text-sm text-black py-1 rounded-full mr-2 bg-[#E7D6F9] ${
                      active && "bg-primary"
                    }`}
                  >
                    {name}
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default HomeNavbar;

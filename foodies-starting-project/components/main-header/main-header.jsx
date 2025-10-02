import Link from "next/link";
import Image from "next/image";

import MainHeaderBackground from "./main-header-bg";
import NavLink from "./nav-link";
import logoImg from "@/assets/logo.png";
import cssClasses from "./main-header.module.css";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />

      <header className={cssClasses.header}>
        <Link className={cssClasses.logo} href="/">
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>

        <nav className={cssClasses.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

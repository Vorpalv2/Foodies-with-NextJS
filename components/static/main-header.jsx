"use client";
import Image from "next/image";
import Link from "next/link";
import logoImg from "@/assets/logo.png";
import styles from "@/components/static/mainheader.module.css";
import { usePathname } from "next/navigation";

const navData = [
  {
    navLink: "/meals",
    navName: "Browse the Meals",
  },
  {
    navLink: "/community",
    navName: "Community",
  },
];

export default function MainHeader() {
  const pathName = usePathname();
  return (
    <header className={styles.header}>
      <Link href={"/"} className={styles.logo}>
        <Image src={logoImg} alt="a plate with food on it" priority />
        NextLevel Food
      </Link>
      <nav className={styles.nav}>
        <ul>
          {navData.map((element, index) => {
            const isActive = pathName === element.navLink;
            return (
              <li key={index}>
                <Link
                  className={`${isActive ? "text-blue-500" : "text-white"}`}
                  href={element.navLink}
                >
                  {element.navName}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

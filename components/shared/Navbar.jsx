import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={`fixatags flex justify-around bg-white underline-none`}>
      <Link href={"/meals"}>Meals</Link>
      <Link href={"/community"}>Community</Link>
      <Link href={"/meals/share"}>Shared Meals</Link>
    </nav>
  );
};

export default Navbar;

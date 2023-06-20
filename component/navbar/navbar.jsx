import React from "react";
import Image from "next/image";
import logo from "../../public/Images/logo.svg";
import Link from "next/link";
import LanguageSwitcher from "../langSwitch/langSwitch";

const Navbar = () => {
  return (
    <>
      <nav
        className="w-full flex border-b-[2px] border-[#1F5D58] bg-[#FFF3F4] p-5"
      >
        <Link href="/">
          <Image src={logo} unoptimized alt="logo" className="" />
        </Link>
        <LanguageSwitcher />
        <hr className="w-full border-b-[1px] border-[#1F5D58]" />
      </nav>
    </>
  );
};

export default Navbar;

import React from "react";
import MenuItems from "./MenuItems";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import DarkmodeSwitch from "./DarkmodeSwitch";
type Props = {};

function Header({}: Props) {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex">
        <MenuItems tittle="Home" address="/" Icon={AiFillHome} />
        <MenuItems
          tittle="About"
          address="/about"
          Icon={BsFillInfoCircleFill}
        />
      </div>
      <div className="flex items-center space-x-5">
        <DarkmodeSwitch />
        <Link href="/">
          <h2 className="text-2xl">
            <span className="font-bold bg-amber-500 px-2 py-1 rounded-lg mr-1">
              IMDB
            </span>
            <span className="text-xl hidden sm:inline">Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}

export default Header;

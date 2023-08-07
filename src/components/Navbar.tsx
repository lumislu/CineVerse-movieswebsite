"use client";
import React, { useState } from "react";
import Link from "next/link";
import { latestMovies, navLinks, userList } from "../constant";
import { SearchInput } from ".";
import { AiOutlineBell, AiOutlineCaretDown } from "react-icons/ai";
import DropdownMenu from "./DropdownMenu";

const Navbar = () => {

  return (
    <header className="  absolute z-10 w-full px-auto  bg-gradient-to-b from-black to-black/0 ">
      <nav className="w-full flex justify-between px-6 py-2 text-gray-200 ">
        <div className="flex items-center justify-center gap-10">
          {/* logo */}
          <a href="/" className="flex h-10 items-center justify-center gap-2 ">
            <img src="/CineVerse.png" alt="logo" className="w-6 h-auto" />
            <span className="text-sm">CINEVERSE</span>
          </a>
          <DropdownMenu
            title="瀏覽"
            items={navLinks}
            Icon={AiOutlineCaretDown}
            containerStyles={[
              "lg:hidden ",
              "items-center -right-[80px] ",
              "border-t-2 border-gray-200",
              "",
              "w-full h-full text-center p-6",
            ]}
          />
          {/* lg:manu */}
          <div className="hidden  gap-4 lg:flex">
            {navLinks.map((item, index) => (
              <Link key={index} href={item.href} className="text-xs px-1 ">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex text-3xl items-center justify-center gap-2">
          <SearchInput />

          <DropdownMenu
            items={latestMovies}
            Icon={AiOutlineBell}
            containerStyles={[
              "",
              "w-[300px] items-end right-3",
              "h-full max-h-[400px]  border-t-2 border-gray-300/70",
              "overflow-y-auto",
              "h-[100px] flex  justify-center gap-2 pr-4 items-center border-b-2 border-gray-300/40",
            ]}
          />
          <DropdownMenu
            selectedUser={userList}
            containerStyles={["", "items-end right-3"]}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

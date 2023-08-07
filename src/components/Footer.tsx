"use client";
import React from "react";
import { footerLinks } from "@/constant";
import Link from "next/link";
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className=" bg-stone-900/60 text-gray-300/60 grid grid-cols-2 justify-items-start gap-4 p-6 lg:grid-cols-4 ">
      <div className=" col-span-2 lg:col-span-4 flex w-[100px] justify-between text-2xl lg:w-[300px]">
        <Link href={"/"} className="hover:text-gray-100">
          <FiFacebook />
        </Link>
        <Link href={"/"} className="hover:text-gray-100">
          <FiInstagram />
        </Link>
        <Link href={"/"} className="hover:text-gray-100">
          <FiTwitter />
        </Link>
        <Link href={"/"} className="hover:text-gray-100">
          <FiYoutube />
        </Link>
      </div>
      {footerLinks.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className=" text-sm hover:text-gray-100 w-full"
        >
          {item.label}
        </Link>
      ))}
      <span className="col-span-2 lg:col-span-4 text-xs">
        Copyright © 2023 LumisLu
      </span>
    </footer>
  );
};

export default Footer;

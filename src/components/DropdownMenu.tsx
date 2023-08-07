import { DropdownMenuProps } from "@/types";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineCaretUp, AiOutlineInfoCircle } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { PiPencilDuotone } from "react-icons/pi";
import { NewButton } from ".";
import { accountMenu } from "@/constant";

const DropdownMenu = ({
  title,
  items,
  item,
  index,
  Icon,
  containerStyles,
  selectedUser,
}: DropdownMenuProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      className={`relative ${containerStyles && containerStyles[0]}`}
      onMouseEnter={toggleDropdown}
      onMouseLeave={toggleDropdown}
    >
      <Link className=" flex justify-center items-center p-2 " href="#">
        {title && <span className="w-[24px] text-xs ">{title}</span>}
        <span className="">{Icon && <Icon />}</span>
        {selectedUser && (
          <img
            src={selectedUser[0].avatar}
            alt={selectedUser[0].name}
            className="h-8 min-w-[32px] rounded-sm cursor-pointer"
          />
        )}
      </Link>

      {isDropdownOpen && (
        <div
          className={`absolute w-[200px] flex flex-col text-gray-200  ${
            containerStyles && containerStyles[1]
          }`}
        >
          <span className="text-gray-200 p-1 text-lg ">
            <AiOutlineCaretUp />
          </span>

          <div
            className={`w-full flex flex-col  bg-black/80 text-gray-200 ${
              containerStyles && containerStyles[2]
            }`}
          >
            {selectedUser && selectedUser.length > 0 ? (
              <div className=" text-xs divide-y divide-gray-300/30 text-gray-200">
                <div className="flex flex-col p-3 gap-3 ">
                  {selectedUser.map((user, idx) => (
                    <Link
                      key={idx}
                      href={user.href}
                      className={` w-fit flex items-center gap-2 ${
                        containerStyles && containerStyles[3]
                      }`}
                    >
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-8 h-8 rounded-sm"
                      />
                      <span className="text-gray-200 text-sm  hover:underline hover:underline-offset-1 ">
                        {user.name}
                      </span>
                    </Link>
                  ))}
                </div>
                <div className="w-full flex flex-col gap-4 p-4">
                  {accountMenu.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="flex gap-2 items-center  hover:underline hover:underline-offset-1"
                    >
                      {" "}
                      <div className="text-2xl">{<item.Icon />}</div>
                      {item.label}
                    </Link>
                  ))}
                </div>
                <Link
                  href={"/"}
                  className="w-full h-12 flex items-center justify-center hover:underline hover:underline-offset-1  "
                >
                  登出 CineVerse
                </Link>
              </div>
            ) : null}

            {items && items.length > 0 ? (
              <div
                className={`flex flex-col items-center justify-center text-gray-200 ${
                  containerStyles && containerStyles[3]
                }`}
              >
                {items.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className={`text-xs  text-gray-200  hover:bg-gray-200/20  ${
                      containerStyles && containerStyles[4]
                    }`}
                  >
                    {item.imgUrl && (
                      <img
                        src={item.imgUrl}
                        className="w-full h-full object-cover"
                        alt="movie"
                      />
                    )}
                    <div className="flex flex-col">
                      <div className=" font-semibold text-sm">
                        {item.status}
                      </div>
                      <div>{item.label}</div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;

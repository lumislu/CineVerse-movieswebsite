"use client";
import React from "react";
import { NewButtonProps } from "../types";

const NewButton = ({
  title,
  Icon,
  containerStyles,
  handleClick,
}: NewButtonProps) => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`max-m-[140px] flex items-center ${containerStyles}`}
      onClick={handleClick}
    >
      <span className="pr-1">{Icon && <Icon />}</span>
      <span className="flex-1">{title}</span>
    </button>
  );
};

export default NewButton;

import { MouseEventHandler, ReactNode } from "react";
import { IconType } from "react-icons";

export interface NewButtonProps {
  title?: string;
  Icon?: IconType;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

interface MenuItem {
  label: string;
  href: string;
  imgUrl?: string;
  status?: string;
}
interface selectedUser {
  href: string;
  name: string;
  avatar: string;
}
export interface DropdownMenuProps {
  title?: string;
  items?: MenuItem[];
  item?: string;
  index?: string;
  Icon?: IconType;
  containerStyles?: string[];
  selectedUser?: selectedUser[];
}
export interface movieProps {
  backdrop_path: any;
  original_title: ReactNode;
  release_date: ReactNode;
  vote_average: ReactNode;
  overview: ReactNode;
  id: string;
  title: string;
  poster_path: string;
}
export interface CarouselProps {
  top10Movies: movieProps[];
}

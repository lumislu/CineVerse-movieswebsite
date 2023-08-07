import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { PiPencilDuotone } from "react-icons/pi";

export const navLinks = [
  { href: "/", label: "首頁" },
  { href: "/movies", label: "熱門排行" },
  { href: "/movies", label: "電影" },
  { href: "/", label: "我的片單" },
];
export const footerLinks = [
  { href: "/", label: "說明中心" },
  { href: "/", label: "媒體中心" },
  { href: "/", label: "工作機會" },
  { href: "/", label: "使用條款" },
  { href: "/", label: "法律資訊" },
  { href: "/", label: "隱私權" },
  { href: "/", label: "Cookie設定" },
  { href: "/", label: "聯絡我們" },
];

export const userList = [
  { href: "/", name: "user1", avatar: "/user1.png" },
  { href: "/", name: "user2", avatar: "/user2.png" },
  { href: "/", name: "user3", avatar: "/user3.png" },
  { href: "/", name: "user4", avatar: "/user4.png" },
];

export const accountMenu = [
  { href: "/", label: "管理使用者", Icon: PiPencilDuotone },
  { href: "/", label: "帳戶", Icon: BsPerson },
  { href: "/", label: "說明中心", Icon: AiOutlineInfoCircle },
];

export const latestMovies = [
  {
    href: "/",
    label: "永恆族ETERNALS",
    imgUrl: "/movies.jpg",
    status: "最新上映",
  },
  {
    href: "/",
    label: "永恆族ETERNALS",
    imgUrl: "/movies.jpg",
    status: "繼續收看",
  },
  {
    href: "/",
    label: "永恆族ETERNALS",
    imgUrl: "/movies.jpg",
    status: "最新上映",
  },
  {
    href: "/",
    label: "永恆族ETERNALS",
    imgUrl: "/movies.jpg",
    status: "最新上映",
  },
  {
    href: "/",
    label: "永恆族ETERNALS",
    imgUrl: "/movies.jpg",
    status: "最新上映",
  },
  {
    href: "/",
    label: "永恆族ETERNALS",
    imgUrl: "/movies.jpg",
    status: "最新上映",
  },
];

export const top10 = [
  {
    id: "1",
    rank: "1",
    poster_path: "/movies.jpg",
    title: "永恆族",
    des: "《永恆族》是超越繁星的神族，七千年前來到地球，誓言保護人類，各色各異的他們，擁有超凡智慧與能力，長生不老，每人具備迥然不同的絕頂神力。 ",
    type: ["刺激", "奇幻節目", "群戲"],
    numbers: "16",
    overview: "223",
    vote_average: "23",
  },
  {
    id: "2",
    rank: "2",
    poster_path: "/movies.jpg",
    title: "永恆族",
    des: "《永恆族》是超越繁星的神族，七千年前來到地球，誓言保護人類，各色各異的他們，擁有超凡智慧與能力，長生不老，每人具備迥然不同的絕頂神力。 ",
    type: ["刺激", "奇幻節目", "群戲"],
    numbers: "16",
    overview: "223",
    vote_average: "33",
  },
];

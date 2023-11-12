import { PiStarFourFill } from "react-icons/pi";
import { GoDownload, GoTelescope } from "react-icons/go";
import { BiMessageRoundedDots } from "react-icons/bi";
import { HiOutlineArrowTrendingDown } from "react-icons/hi2";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

import style from "./page.module.css";
import Image from "next/image";
import Gif from "@/public/Images/portfolio.gif";
import Link from "next/link";
export default function Home() {
  return (
    <section className="w-full px-10 md:px-[100px] py-10">
        {/* <div className="flex gap-10 items-center self-start text-xl md:text-[30px]">
          <div className="w-full h-[2px] bg-black"></div>
          <Link href="#" className="border-[#60ff44] border rounded-full p-2">
            <FiTwitter />
          </Link>
          <Link href="#">
          <FiGithub />
          </Link>
          <Link href="#">
            <FiLinkedin />
          </Link>
          <div className="w-full h-[2px] bg-black"></div>
        </div> */}
    </section>
  );
}

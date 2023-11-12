import { AiOutlineMail } from "react-icons/ai";
import { FiLinkedin, FiTwitter } from "react-icons/fi";
import style from "./styles.module.css";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="flex items-center justify-between mx-10 md:mx-[100px] border-t-[1px] pt-5">
      <div className="">&copy; 2023: All Rights Reserved </div>
      <div className="">Created by Bikalpa Paudel</div>
      <div className="flex gap-4 text-white">
        <Link href="#" className=" bg-black rounded-full p-2">
          <FiLinkedin />
        </Link>
        <Link href="#" className="bg-black rounded-full p-2">
          <FiTwitter />
        </Link>
      </div>
    </footer>
  );
}

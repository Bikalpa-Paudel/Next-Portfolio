import { BsSun } from "react-icons/bs";
import Link from "next/link";
export default function Navbar() {
  const navLink = [
    { link: "/", title: "Home" },
    { link: "/about", title: "About" },
    { link: "/blog", title: "Blog" },
    { link: "/projects", title: "Projects" },
    { link: "/contact", title: "Contact" },
  ];
  return (
    <nav className="h-[10vh] flex justify-between items-center px-10 md:px-[100px]">
      <h1 className="text-2xl font-bold">BIKALPA</h1>
      <ul className="flex items-center gap-[50px]">
        {navLink.map(({link, title}, index)=>{
            return(
            <li key={index} className="p-2 hover:tracking-[5px] transition-all">
                <Link href={link}>{title}</Link>
            </li>
            )
        })}
      </ul>
      <BsSun className="text-2xl cursor-pointer"/>
    </nav>
  );
}

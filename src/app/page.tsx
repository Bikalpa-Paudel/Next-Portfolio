import { PiStarFourFill } from "react-icons/pi";
import { GoDownload, GoTelescope } from "react-icons/go";
import { BiMessageRoundedDots } from "react-icons/bi";
import { HiOutlineArrowTrendingDown } from "react-icons/hi2";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import About from "./about/page";

export default function Home() {
  return (
    <>
      <section className="flex min-h-[90vh] md:px-[100px] px-5 items-center">
        <div className="flex flex-col gap-5 w-1/2">
          <div className="flex text-[30px] gap-6 text-[#ffd700]">
            <FiTwitter />
            <FiGithub />
            <FiLinkedin />
          </div>

          {/* <div className="relative w-[180px]">
            <h1 className="text-2xl relative z-10">Bikalpa Paudel</h1>
            <div className="absolute top-3 left-2 w-full h-full bg-[#ffcc00] z-[-98]"></div>
          </div> */}
          <div className="text-[60px]">
            <p>HELLO, I AM A</p>
            <p>FRONTEND DEVELOPER</p>
            <p>FROM NEPAL</p>
          </div>
          <div className="flex items-center gap-5">
            <div className="px-5 py-2 bg-[#ffcc00] flex items-center gap-2 text-[#ffffff] font-bold transition-all hover:bg-[#ff9900]  cursor-pointer">
              Download CV <GoDownload className="font-bold" />
            </div>
            <div className="flex px-5 py-2 underline items-center gap-2 hover:text-[#ffcc00] cursor-pointer">
              Reach me here <BiMessageRoundedDots />
            </div>
          </div>
          <p>
            I&apos;m currently focused on honing my frontend development skills
            and have a strong desire to expand my expertise into backend and
            other areas of software development in the future.
          </p>
          <div>
            <div></div>
            <div>Want to learn more about me?</div>
          </div>
          <div>
            <HiOutlineArrowTrendingDown className="text-[#4fe53e]" />
            <div className="flex px-5 py-2 underline items-center gap-2 hover:text-[#ffcc00] cursor-pointer">
              EXPLORE <GoTelescope />
            </div>
          </div>
        </div>
      </section>
      <About />
    </>
  );
}

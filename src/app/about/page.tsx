import { PiStarFourFill } from "react-icons/pi";
import Css from "@/public/Images/css.png";
import Html from "@/public/Images/html.png";
import Java from "@/public/Images/java.png";
import JavaScript from "@/public/Images/javascript.png";
import next from "@/public/Images/next.png";
import python from "@/public/Images/python.png";
import react from "@/public/Images/react.png";
import redux from "@/public/Images/redux.png";
import tailwind from "@/public/Images/tailwind.png";
import typescript from "@/public/Images/typescript.png";
import Image from "next/image";
import { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "About",
};

function About() {
  const techStack = [
    {
      logo: Html,
      name: "HTML",
    },
    {
      logo: Css,
      name: "CSS",
    },
    {
      logo: tailwind,
      name: "tailwind css",
    },
    {
      logo: JavaScript,
      name: "JavaScript",
    },
    {
      logo: typescript,
      name: "typescript",
    },
    {
      logo: react,
      name: "react js",
    },
    {
      logo: redux,
      name: "redux",
    },
    {
      logo: next,
      name: "Next Js",
    },
    {
      logo: Java,
      name: "java",
    },
    {
      logo: python,
      name: "python",
    },
  ];
  return (
    <section className="min-h-[90vh] flex flex-col md:flex-row">
      <div className="flex-[1] flex p-[50px] md:p-[100px] flex-col gap-[50px]">
        <div className="flex items-center gap-[150px]">
          <PiStarFourFill className="text-[3rem] text-[#cccccc]" />
          <div className="relative">
            <h1 className="text-2xl relative z-10">Know about me</h1>
            <div className="absolute top-3 left-2 w-full h-full bg-gray-300 z-[-98]"></div>
          </div>
        </div>
        <p className="text-justify leading-8">
          I am a passionate frontend developer based in Nepal, eager to broaden
          my horizons in the dynamic field of web development. With a strong
          foundation in frontend technologies and a hunger for new challenges, I
          am constantly seeking opportunities to gather diverse experiences and
          expand my skill set. I believe that the journey of exploration and
          learning is key to staying at the forefront of this ever-evolving
          industry, and I am excited to embark on this path of growth and
          discovery.
        </p>
        <div className="flex flex-col gap-[30px]">
          <h2 className="text-2xl">My TechStack So Far</h2>
          <div className="grid grid-cols-5 gap-[30px]">
            {techStack.map((stack, index) => {
              return (
                <>
                  <Image
                    key={index}
                    src={stack.logo}
                    height={60}
                    width={60}
                    alt={stack.name}
                    className="cursor-pointer"
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex-[1] bg-[#222222] border border-black">
        <Tabs defaultValue="experience" className="w-full p-4">
          <TabsList className="w-full p-0">
            <TabsTrigger
              value="experience"
              className="w-1/2 border border-[#fff]"
            >
              Experience
            </TabsTrigger>
            <TabsTrigger
              value="education"
              className="w-1/2 border border-[#fff]"
            >
              Education
            </TabsTrigger>
          </TabsList>
          <TabsContent value="experience" className="text-white">
            {/* make tree like structure to point listing experince */}
            <ul className="flex flex-col gap-5">
              <li className="">
                <h3 className="flex items-center gap-2">
                  <PiStarFourFill /> Void Nepal Pvt. Ltd.{" "}
                  <span>(september 2023 -- february 2024)</span>
                </h3>
                <p></p>
              </li>
              <li className="">
                <h3 className="flex items-center gap-2">
                  <PiStarFourFill />College's Development Platform{" "}
                  <span>(september 2023 -- february 2024)</span>
                </h3>
                <p></p>
              </li>
              <li className="">
                <h3 className="flex items-center gap-2">
                  <PiStarFourFill /> Freelancing{" "}
                  <span>(september 2023 -- february 2024)</span>
                </h3>
                <p></p>
              </li>
            </ul>
          </TabsContent>
          <TabsContent value="education" className="text-[#fff]">
          <ul className="flex flex-col gap-5">
              <li className="">
                <h3 className="flex items-center gap-2">
                  <PiStarFourFill /> Herald Collage Kathmandu{" "}
                  <span>(Undergraduate)</span>
                </h3>
                <p></p>
              </li>
              <li className="">
                <h3 className="flex items-center gap-2">
                  <PiStarFourFill />Kalika Manavgyan School{" "}
                  <span>(High School)</span>
                </h3>
                <p></p>
              </li>
              <li className="">
                <h3 className="flex items-center gap-2">
                  <PiStarFourFill />Self Taught{" "}
                  <span>(Forever)</span>
                </h3>
                <p></p>
              </li>
            </ul>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

export default About;

import style from './page.module.css'
import {PiStarFourFill} from 'react-icons/pi'
import Css from '../../../public/Images/css.png'
import Html from '../../../public/Images/html.png'
import Java from '../../../public/Images/java.png'
import JavaScript from '../../../public/Images/javascript.png'
import next from '../../../public/Images/next.png'
import python from '../../../public/Images/python.png'
import react from '../../../public/Images/react.png'
import redux from '../../../public/Images/redux.png'
import tailwind from '../../../public/Images/tailwind.png'
import typescript from '../../../public/Images/typescript.png'
import Image from 'next/image'
import { Metadata } from 'next'

import {LuGraduationCap} from 'react-icons/lu'
import {TbDeviceImacCode} from 'react-icons/tb'

export const metadata: Metadata = {
  title : 'About'
}

function About() {
  const techStack = [

    {
      logo : Html,
      name : 'HTML'
    },
    {
      logo : Css,
      name : 'CSS'
    },
    {
      logo : tailwind,
      name : 'tailwind css'
    },
    {
      logo : JavaScript,
      name : 'JavaScript'
    },
    {
      logo : typescript,
      name : 'typescript'
    },
    {
      logo : react,
      name : 'react js'
    },
    {
      logo : redux,
      name : 'redux'
    },
    {
      logo : next,
      name : 'Next Js'
    },
    {
      logo : Java,
      name : 'java'
    },
    {
      logo : python,
      name : 'python'
    },
  ]
  return (
    <section id={style.about}>
        <div className={style.left}>
          <div className={style.l_top}>
            <div className={style.heading}>
              <PiStarFourFill className={style.star_icon}/>
              <div className={style.about_text}>KNOW ABOUT ME</div>
            </div>
            <p className={style.about_para}>
            I am a passionate frontend developer based in Nepal, eager to broaden my horizons in the dynamic field of web development. With a strong foundation in frontend technologies and a hunger for new challenges, I am constantly seeking opportunities to gather diverse experiences and expand my skill set. I believe that the journey of exploration and learning is key to staying at the forefront of this ever-evolving industry, and I am excited to embark on this path of growth and discovery.
            </p>
            <div className={style.skill}>
              <div className={style.skill_text}>My TechStack So Far</div>
              <div className={style.stack_grid}>
                {techStack.map(stack => {
                  return(
                    <>
                      <Image src={stack.logo} height={60} width={60} alt={stack.name} className={style.image}/>
                    </>
                  )
                })}
              </div>
            </div>
          </div>
        
        </div>
        <div className={style.right}>
          <div className={style.edu_exp}>
            <div className={style.education}>
              <div className={style.education_text}><LuGraduationCap className={style.right_icon}/> My Education:</div>
              <div className={style.list}>
                
              </div>
            </div>
            <div className={style.experience}>
              <div className={style.experience_text}><TbDeviceImacCode className={style.right_icon}/> My Experience:</div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default About
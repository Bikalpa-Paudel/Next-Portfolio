import {PiStarFourFill} from 'react-icons/pi'
import {GoDownload, GoTelescope} from 'react-icons/go'
import {BiMessageRoundedDots} from 'react-icons/bi'
import {HiOutlineArrowTrendingDown} from 'react-icons/hi2'
import {FiGithub,FiLinkedin, FiTwitter} from 'react-icons/fi'





import style from './page.module.css'
export default function Home() {
  return (
    <section className={style.home}>
      <div className={style.left}>
        <div className={style.top}>
          <PiStarFourFill className={style.star_icon}/>
          <div className={style.social}>
              <FiTwitter className={style.social_icon}/>
              <FiGithub className={style.social_icon}/>
              <FiLinkedin className={style.social_icon}/>
          </div>
        </div>
        <div className={style.welcome}>
          Frontend Developer
        </div>
        <div className={style.intro}>
          <p className={style.intro_para}>HELLO, I AM A</p>
          <p className={style.intro_para}>FRONTEND DEVELOPER</p>
          <p className={style.intro_para}>FROM NEPAL</p>
        </div>
        <div className={style.button}>
          <div className={style.cv}>
            Download CV <GoDownload className={style.download_icon}/>
          </div>
          <div className={style.contact}>
            Reach me here <BiMessageRoundedDots />
          </div>
        </div>
        <p className={style.info}>      
          I'm currently focused on honing my frontend development skills and have a strong desire to expand my expertise into backend and other areas of software development in the future.
        </p>
        <div className={style.explore}>
          <div className={style.green}></div>
          <div className={style.explore_text}>Want to learn more about me?</div>
        </div>
        <div className={style.explore_part}>
          <HiOutlineArrowTrendingDown className={style.arrow}/>
          <div className={style.explore_btn}>EXPLORE <GoTelescope /></div>
        </div>
      </div>
      <div className={style.right}>
      </div>
    </section>
  )
}

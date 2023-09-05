import {BsSun} from 'react-icons/bs'
import style from './styles.module.css'
export default function Navbar() {
  return (
        <nav className={style.nav}>
            <div className={style.left}>
                <div className={style.logo}>BIKALPA</div>
                <div className={style.nav_link}>
                    <div>Home</div>
                    <div>Projects</div>
                    <div>Blog</div>
                </div>
            </div>
            <div className={style.right}>
                <div className={style.nav_link}>
                    <div>About</div>
                    <div>Contact</div>
                </div>
                <BsSun className={style.theme}/>
            </div>
        </nav>
  )
}

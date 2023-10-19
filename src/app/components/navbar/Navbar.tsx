import {BsSun} from 'react-icons/bs'
import style from './styles.module.css'
import Link from 'next/link'
export default function Navbar() {
  return (
        <nav className={style.nav}>
            <div className={style.left}>
                <div className={style.logo}>BIKALPA</div>
                <div className={style.nav_link}>
                    <Link href='/' className={style.link}>Home</Link>
                    <div className={style.link}>Projects</div>
                    <div className={style.link}>Blog</div>
                </div>
            </div>
            <div className={style.right}>
                <div className={style.nav_link}>
                    <Link href="/about" className={style.link}>About</Link>
                    <Link href='/contact' className={style.link}>Contact</Link>
                </div>
                <BsSun className={style.theme}/>
            </div>
        </nav>
  )
}

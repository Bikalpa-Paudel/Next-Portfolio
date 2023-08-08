
import style from './styles.module.css'
export default function Navbar() {
  return (
    <header id={style.header}>
        <nav className={style.nav}>
            <div>Bikalpa</div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header>
  )
}

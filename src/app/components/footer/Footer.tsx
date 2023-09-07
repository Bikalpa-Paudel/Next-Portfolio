import {AiOutlineMail} from 'react-icons/ai'
import {FiLinkedin, FiTwitter} from 'react-icons/fi'
import style from './styles.module.css'
export default function Footer() {
  return (
    <footer className={style.footer}>
        <div className={style.email}><AiOutlineMail /> bikalpapaudel53@gmail.com</div>
        <div className={style.copywrite}>&copy; 2023 | Bikalpa Paudel </div>
        <div className={style.connect}>
          <div className={style.icon}>
            <FiLinkedin />
            <FiTwitter />
          </div>
          <p className={style.connect_text}>connect with me</p>
        </div>
    </footer>
  )
}

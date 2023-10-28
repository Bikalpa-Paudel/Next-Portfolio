import { FiSearch } from "react-icons/fi"
import style from './style.module.css'


function Search() {
  return (
  <div className={style.search}>
    <input type="text" placeholder="Search Blog" className={style.search_input}/>
    <FiSearch className={style.search_icon}/>
  </div>
  )
}

export default Search
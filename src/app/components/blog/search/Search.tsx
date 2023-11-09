import { FiSearch } from "react-icons/fi"
import style from './style.module.css'


function Search() {
  return (
  <div className="flex items-center justify-between border border-black rounded-2xl p-[10px] w-full">
    <input type="text" placeholder="Search Blog" className="w-full border-none outline-none bg-transparent text-2xl"/>
    <FiSearch className="text-2xl cursor-pointer"/>
  </div>
  )
}

export default Search
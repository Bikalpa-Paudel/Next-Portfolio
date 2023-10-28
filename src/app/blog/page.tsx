import React from "react";
import style from "./page.module.css";
import { FiSearch } from "react-icons/fi"
import Search from "../components/blog/search/Search";
import Blogs from "../components/blog/blogs/Blogs";

function page() {
  return (
    <div className={style.blog}>
      <div className={style.left}>
        <div className={style.l_top}>
          <Search />
          <Blogs />
        </div>
      </div>
      <div className={style.right}>right</div>
    </div>
  );
}

export default page;

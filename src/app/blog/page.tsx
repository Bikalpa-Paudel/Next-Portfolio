import React from "react";
import style from "./page.module.css";
import Search from "../components/blog/search/Search";
import Blogs from "../components/blog/blogs/Blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title : 'Blog'
}

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

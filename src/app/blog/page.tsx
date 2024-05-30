import React from "react";
import Search from "../../components/blog/search/Search";
import Blogs from "../../components/blog/blogs/Blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title : 'Blog'
}

function page() {
  return (
    <div className="p-[50px] md:p-[100px] min-h-[90vh]">
      <div className="flex gap-8 flex-col items-center md:items-start">
          <Search />
          <Blogs />
        </div>
    </div>
  );
}

export default page;

import React from "react";
import style from "./blog.module.css"
async function page({ params }: { params: { id: string } }) {
  const URL = process.env.NEXT_PUBLIC_URL;
  const blogPost = await fetch(`${URL}/api/blogs/${params.id}`);
  const blog = await blogPost.json();
  console.log(blog)
  if (blog) {
    return (
      <section className={style.blog_section}>
        <div className={style.blog}>
          <h1>{blog.post.title}</h1>
          <p>{blog.post.date}</p>
          <p>{blog.post.description}</p>
        </div>
      </section>
    );
  } else {
    return <div>nothing</div>;
  }
}

export default page;

// export async function getBlogById(id: string) {
//   const URL = process.env.NEXT_PUBLIC_URL;
//   const res = await fetch(`${URL}/api/blogs/${id}`);
//   if (!res.ok) {
//     return "Error";
//   }
//   return await res.json();
// }

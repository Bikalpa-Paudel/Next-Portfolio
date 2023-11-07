import React from "react";

async function page({ params }: { params: { id: string } }) {
const URL = process.env.NEXT_PUBLIC_URL;
  const blogPost = await fetch(`${URL}/api/blogs/${params.id}`);
  const blog = await blogPost.json();
  if (blog) {
    return <div>hellp</div>;
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

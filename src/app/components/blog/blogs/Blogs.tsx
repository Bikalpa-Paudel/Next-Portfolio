import style from "./style.module.css";
import Link from "next/link";
async function Blogs() {
  const res = await getAllBlog();
  const allBlogs = res?.posts;

  return (
    <div className={style.blogs}>
      {allBlogs ? (
        allBlogs.map((item: any) => (
          <Link href={"/blog/"+item.id} key={item.id} className={style.blog_post}>
            <div className={style.blog_image}></div>
            <div className={style.blog_info}>
              <h1>{item.title}</h1>
              <p>Created : {item.date}</p>
            </div>
          </Link>
        ))
      ) : (
        <div>No Blogs</div>
      )}
    </div>
  );
}

export async function getAllBlog() {
  const URL = process.env.NEXT_PUBLIC_URL;
  const res = await fetch(`${URL}/api/blogs`, {
    next: { revalidate: 10 }, // Revalidate every 60 seconds
  });
  if (!res.ok) {
    return "error";
  }
  const json = await res.json();
  return json;
}
export default Blogs;

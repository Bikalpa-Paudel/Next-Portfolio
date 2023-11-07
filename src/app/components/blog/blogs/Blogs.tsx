import style from "./style.module.css";
async function Blogs() {
  const res = await getAllBlog();
  console.log(res);
  const allBlogs = res?.posts;

  return (
    <div className={style.blogs}>
  {allBlogs
    ? allBlogs.map((item: any) => (
        <div key={item.id} className={style.blog_post}>
          <div className={style.blog_image}></div>
          <div className={style.blog_info}>
            <h1>{item.title}</h1>
            <p>Created : {item.date}</p>
          </div>
        </div>
      ))
    : <div>No Blogs</div>
  }
    </div>
  );
}

export async function getAllBlog() {
  const URL = process.env.NEXT_PUBLIC_URL;
  const res = await fetch(`${URL}/api/blogs`, { cache: "no-store" });
  if(!res.ok){
    return "error"
  }
  const json = await res.json();
  return json;
}
export default Blogs;

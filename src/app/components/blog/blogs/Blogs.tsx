import style from "./style.module.css";
async function Blogs() {
  const res = await getAllBlog();
  console.log(res)
  const allBlogs = res.posts;

  const blogPosts = allBlogs?.map((item: any) => {
    return (
      <div key={item.id} className={style.blog_post}>
        <div className={style.blog_image}></div>

        <div className={style.blog_info}>
          <h1>{item.title}</h1>
          <p>Created : {item.date}</p>
        </div>
      </div>
    );
  });
  return <div className={style.blogs}>{blogPosts}</div>;
}


export async function getAllBlog() {
  const URL = process.env.NEXT_PUBLIC_URL;
    const res = await fetch(`https://bikalpa-paudel.vercel.app/api/blogs`, { cache: 'no-store' } );
    const json = await res.json(); 
    return json;
}
export default Blogs;

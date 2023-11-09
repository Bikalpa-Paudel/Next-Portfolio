import style from "./style.module.css";
import Link from "next/link";
async function Blogs() {
  const res = await getAllBlog();
  const allBlogs = res?.posts;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-10">
      {allBlogs ? (
        allBlogs.map((item: any) => (
          <Link
            href={"/blog/" + item.id}
            key={item.id}
            className="flex flex-col w-[300px] border border-black"
          >
            <div className="h-[300px] border">img</div>
            <div className="">
              <h1 className="font-bold text-2xl">{item.title}</h1>
              <p className=" text-xs font-light">Created : {item.date}</p>
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

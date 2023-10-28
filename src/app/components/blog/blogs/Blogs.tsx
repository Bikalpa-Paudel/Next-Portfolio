import { disconnect } from 'process'
import style from './style.module.css'
function Blogs() {
    const blogInfo = [
        {
        id: "1",
        title: "First Blog",
        date: "10/22/2023",
        },
        {
        id:"2",
        title: "Second Blog",
        date: "10/28/2023",
        },
        {
        id:"5",
        title: "Second Blog",
        date: "10/28/2023",
        },
        {
        id:"3",
        title: "Second Blog",
        date: "10/28/2023",
        },
        {
        id:"4",
        title: "Second Blog",
        date: "10/28/2023",
        },
        {
        id:"6",
        title: "Second Blog",
        date: "10/28/2023",
        },
        {
        id:"7",
        title: "Second Blog",
        date: "10/28/2023",
        },
    ]

    const blogPosts = blogInfo.map((item) =>{
        return(
            <div key={item.id} className={style.blog_post}>
                <div className={style.blog_image}></div>

                <div className={style.blog_info}>
                    <h1>{item.title}</h1>
                    <p>Created : {item.date}</p>
                </div>
            </div>
        )
    })
  return (
    <div className={style.blogs}>
    {blogPosts}
    </div>
  )
}

export default Blogs
"use client";
import { useState } from 'react';
import style from './page.module.css'

function Page() {
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  
  async function handleSumbit(){
    const URL = process.env.NEXT_PUBLIC_URL;
    await fetch(`${URL}/api/blogs`, {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description
      }),

      headers: {
        "Content-type": "application/json"
      }

    })
  }
  return (
    <div className={style.blog}>
      <div className={style.left}>
        <div className={style.l_top}>
          <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
          <textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          <button onClick={handleSumbit}>post</button>
        </div>
      </div>
      <div className={style.right}>right</div>
    </div>
  )
}

export default Page
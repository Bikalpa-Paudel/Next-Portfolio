"use client";
import { useState } from 'react';
import style from './page.module.css'

function Page() {
  
  const [title, setTitle] = useState('');
  const [blogId, setBlogId] = useState('');
  
  function handleSumbit(){
    
  }
  return (
    <div className={style.blog}>
      <div className={style.left}>
        <div className={style.l_top}>
          <input type="text" />
          <input type="id" />
          <button onSubmit={handleSumbit}>post</button>
        </div>
      </div>
      <div className={style.right}>right</div>
    </div>
  )
}

export default Page
"use client";
import { useState } from 'react';
import style from './page.module.css'

function Page() {
  
  const [title, setTitle] = useState('');
  
  async function handleSumbit(){
    
  }
  return (
    <div className={style.blog}>
      <div className={style.left}>
        <div className={style.l_top}>
          <input type="text" />
          <textarea name="description"></textarea>
          <button onSubmit={handleSumbit}>post</button>
        </div>
      </div>
      <div className={style.right}>right</div>
    </div>
  )
}

export default Page
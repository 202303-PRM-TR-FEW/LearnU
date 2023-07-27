import React from 'react';
import Link from 'next/link';
export default function Recommanded({ img, trainer, title, courseId }) {
  return (
    <Link href="./overview">
    <div  className='m-4' id={courseId}>
      <div className='card bg-base-100 shadow-xl image-full'>
      <figure><img src={img}  alt="Shoes"/></figure>
      <div class="card-body">
        <h2 class="card-title">{trainer}</h2>
        <p>{title}</p>
      </div>
      </div>
    </div>
    </Link>
  );
}
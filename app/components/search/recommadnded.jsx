import React from 'react';

export default function Recommanded({ img, trainer, title, courseId }) {


  return (
    <div className='m-4' id={courseId}>

          <div className='card bg-base-100 shadow-xl image-full'>
      <figure><img src={img}  alt="Shoes"/></figure>
      <div class="card-body">
        <h2 class="card-title">{trainer}</h2>
        <p>{title}</p>
      </div>
      </div>
    </div>
  );
}
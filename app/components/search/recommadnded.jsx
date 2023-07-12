import react from 'react';

export default function Recommanded ({img, trainer, title}) {
    return(
      <div className=' m-4'>
      <div class=" card bg-base-100 shadow-xl image-full">
      <figure><img src={img}  alt="Shoes"/></figure>
      <div class="card-body">
        <h2 class="card-title">{trainer}</h2>
        <p>{title}</p>
      </div>
    </div>
    </div>
        )
    
}
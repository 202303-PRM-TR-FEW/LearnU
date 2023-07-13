import react from 'react';

export default function Recommanded ({img, trainer, title}) {
    return(
      <div className=' m-4'>
      <div className=" card bg-base-100 shadow-xl image-full">
      <figure><img src={img}  alt="Shoes"/></figure>
      <div class="card-body">
        <h2 className="card-title">{trainer}</h2>
        <p>{title}</p>
      </div>
    </div>
    </div>
        )
    
}
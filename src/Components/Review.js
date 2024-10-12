import React from 'react'
import img1 from "../img/bg4.jpg";
import img2 from "../img/bg3.jpg";
import img3 from "../img/img7.jpg";
import img4 from "../img/img8.jpg";
import img5 from "../img/img9.jpg";

export default function Gallery() {
  return (
    <div className="review flex space-x-20 px-16 py-20">

      <div className="flex-col space-y-5">
        <h1 className='font-bold text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, adipisci?</h1>
        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et enim sit ad ipsum, unde expedita quae voluptate cumque nostrum beatae rem cupiditate dolorem impedit animi at eius, consequuntur error placeat?</p>
        <div className="flex items-center space-x-10">
          <div className="flex">
            <img src={img1} alt="pic" className="rounded-full mr-[-1rem] w-12 h-12" />
            <img src={img3} alt="pic" className="rounded-full mr-[-1rem] w-12 h-12" />
            <img src={img2} alt="pic" className="rounded-full mr-[-1rem] w-12 h-12" />
            <img src={img4} alt="pic" className="rounded-full mr-[-1rem] w-12 h-12" />
            <img src={img5} alt="pic" className="rounded-full mr-[-1rem] w-12 h-12" />
          </div>
          <div>
            <p className='text-xs'>100+ members</p>
          </div>
        </div>
        <div>
          <a href="/"><button className='text-sm text-zinc-500'>+ Follow now</button></a>
        </div>
      </div>

      <div className="flex-col rounded-md space-y-5 bg-zinc-700/40 p-5 w-full">
        <div className="flex items-center space-x-5">
          <img src={img1} alt="pic" className="rounded-full w-14 h-14" />
          <div className="flex-col">
            <h1>Aliza Quartel</h1>
            <p className="text-xs">Joined - 05 July 2023</p>
          </div>
        </div>
        <div className="flex text-yellow-500 text-xs space-x-2">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt similique eveniet cum commodi corporis adipisci nam vel enim reprehenderit sit. Molestias odit autem labore provident explicabo eum esse minus beatae.</p>
      </div>

    </div>
  )
}

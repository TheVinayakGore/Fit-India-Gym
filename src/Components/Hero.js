import React from 'react'
import Gallery from "./Review";
import Offers from "./Offers";
import Workouts from "./Workouts";
import Promo from './Promo';
import bg from "../img/poster.png";

const Hero = () => {
    return (
        <>
            <div className="flex-col">

                <div className="bg-gradient-to-r from-zinc-900 to-zinc-700 pt-32 px-16">
                    <div className="flex justify-center m-auto space-x-10 z-0 h-full">
                        <div className="flex flex-col space-y-10 font-bold text-white items-start w-[60rem]">
                            <div className="flex-col space-y-5">
                                <p className="text-7xl">HERE YOU CAN SHAPE <br /> YOUR IDEAL BODY</p>
                                <p className="font-extralight text-sm">In here we help you to build and shape your ideal body with perfect diet plan <br /> Lorem sum dolor consectetur adipisicing</p>
                            </div>
                            <div className="flex items-center space-x-5">
                                <button className="text-sm font-medium p-2 bg-gradient-to-r from-red-800 to-blue-800 hover:from-yellow-600 hover:to-pink-500 rounded-md w-40">Explore More</button>
                                <div className="flex items-center space-x-3">
                                    <button><i class="fa-brands fa-linkedin-in p-2 rounded-full border-4 border-double border-white"></i></button>
                                    <div className="flex-col">
                                        <p className='text-sm font-medium'>FOLLOW ON LINKEDIN</p>
                                        <p className='text-xs font-light'>4.3K+ Followers</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex flex-col items-start pr-5 border-r border-white">
                                    <p className='font-bold text-2xl'>145M+</p>
                                    <p className='text-sm font-light'>Joined Members</p>
                                </div>
                                <div className="flex flex-col items-start border-r border-white px-5">
                                    <p className='font-bold text-2xl'>263M+</p>
                                    <p className='text-sm font-light'>Living Healthy Life</p>
                                </div>
                                <div className="flex flex-col items-start pl-5">
                                    <p className='font-bold text-2xl'>1.7M+</p>
                                    <p className='text-sm font-light'>New Members Connected</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            {/* <video src={vid} muted autoplay="true" controls loop className="rounded-xl w-[90rem]" /> */}
                            <img src={bg} alt="bg" className="rounded-xl w-[80rem]" />
                        </div>
                    </div>
                </div>

                <Promo />
                <Workouts />
                <Offers />
                <Gallery />
            </div>
        </>
    )
}

export default Hero


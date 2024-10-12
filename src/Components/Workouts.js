import React from 'react'
import bg from "../img/bg5.png";
import About from './About';

const Workouts = () => {

    const cardClass = ("flex flex-col bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-orange-500 hover:to-purple-500 p-5 space-y-3 rounded-xl");

    const list = (
        <li>
            <h1 className='font-semibold text-md leading-7'><i class="fa-solid fa-stop text-orange-600 mr-1"></i> Lorem ipsum dolor sit amet.</h1>
            <p className='text-xs'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore nostrum illum accusantium et illo quibusdam vel sint iste in ipsum?</p>
        </li>
    );

    return (
        <>
            <div className="flex flex-col w-full h-full">

                <About />

                <div className="workout flex-col space-y-10 px-16 py-52">
                    <div className="flex items-start justify-between space-x-20 w-full">
                        <p className="text-md w-[30rem]"><span className="text-4xl font-bold">The best workouts</span> <br /> *we Offer for you</p>
                        <p className="text-xs font-light w-[30rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, eum ut tempore modi sit, harum ratione officia quas, quaerat amet qui a eveniet quae minima officiis labore non quasi distinctio.</p>
                    </div>
                    <div className="flex space-x-5 text-white w-full">
                        <a href="/">
                            <div className={cardClass}>
                                <i class="fa-solid fa-dumbbell text-4xl"></i>
                                <h1 className='text-xl font-bold'>Workouts</h1>
                                <p className='text-xs font-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quod!</p>
                            </div>
                        </a>
                        <a href="/">
                            <div className={cardClass}>
                                <i class="fa-solid fa-bicycle text-4xl"></i>
                                <h1 className='text-xl font-bold'>Cycling</h1>
                                <p className='text-xs font-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quod!</p>
                            </div>
                        </a>
                        <a href="/">
                            <div className={cardClass}>
                                <i class="fa-solid fa-stopwatch-20 text-4xl"></i>
                                <h1 className='text-xl font-bold'>Time</h1>
                                <p className='text-xs font-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quod!</p>
                            </div>
                        </a>
                        <a href="/">
                            <div className={cardClass}>
                                <i class="fa-solid fa-ranking-star text-4xl"></i>
                                <h1 className='text-xl font-bold'>Achive</h1>
                                <p className='text-xs font-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quod!</p>
                            </div>
                        </a>
                    </div>
                    <div className="flex space-x-5 text-white w-full">
                        <a href="/">
                            <div className={cardClass}>
                                <i class="fa-solid fa-heart-pulse text-4xl"></i>
                                <h1 className='text-xl font-bold'>Health</h1>
                                <p className='text-xs font-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quod!</p>
                            </div>
                        </a>
                        <a href="/">
                            <div className={cardClass}>
                                <i class="fa-solid fa-person-swimming text-4xl"></i>
                                <h1 className='text-xl font-bold'>Swimming</h1>
                                <p className='text-xs font-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quod!</p>
                            </div>
                        </a>
                        <a href="/">
                            <div className={cardClass}>
                                <i class="fa-solid fa-person-hiking text-4xl"></i>
                                <h1 className='text-xl font-bold'>Trekking</h1>
                                <p className='text-xs font-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quod!</p>
                            </div>
                        </a>
                        <a href="/">
                            <div className={cardClass}>
                                <i class="fa-solid fa-table-tennis-paddle-ball text-4xl"></i>
                                <h1 className='text-xl font-bold'>Sports</h1>
                                <p className='text-xs font-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quod!</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="diet-plans flex items-start justify-between m-auto space-x-20 px-16 pt-20 bg-gradient-to-r from-zinc-900 to-cyan-900 h-full">
                    <div className="flex flex-col items-start justify-between space-y-5 py-10 h-full">
                        <h1 className='text-3xl font-bold'>Get Ready to reach to your Fitness!</h1>
                        <ul className="text-sm space-y-5">
                            {list}
                            {list}
                            {list}
                        </ul>
                        <a href="/"><button className='text-sm p-2 bg-gradient-to-r from-red-800 to-blue-800 hover:from-yellow-600 hover:to-pink-500 rounded-md w-32'>See more</button></a>
                    </div>
                    <div className='flex items-end h-full'>
                        <img src={bg} alt="bg" className='w-[100rem]' />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Workouts

import React from 'react'

const Offers = () => {


    const card = (
        <a href="/" className=''>
            <div className="flex flex-col p-10 space-y-5 bg-zinc-800 hover:bg-gradient-to-t hover:from-yellow-600 hover:to-purple-600 hover:text-white rounded-md w-[24rem]">
                <h1 className="text-5xl font-bold opacity-20">1 Month</h1>
                <div className="flex-col space-y-2 text-sm">
                    <p className="text-2xl font-bold">$99</p>
                    <ul>
                        <li>✅ Barbell Squats</li>
                        <li>✅ Deadlifts</li>
                        <li>✅ Bench Press</li>
                        <li>✅ Pull-Ups/Chin-Ups</li>
                        <li>✅ Dumbbell Lunges</li>
                        <li>✅ Dumbbell Shoulder Press</li>
                        <li>✅ Cable Rows</li>
                        <li>✅ Dumbbell Lunges</li>
                        <li>✅ Dumbbell Shoulder Press</li>
                        <li>✅ Cable Rows</li>
                        <li>✅ Dumbbell Chest Flyes</li>
                        <li>✅ Leg Press</li>
                    </ul>
                </div>
                <a href="/"><button className='flex items-center justify-center text-sm text-black font-normal space-x-5 bg-neutral-100  hover:bg-yellow-800 hover:text-white p-2 rounded-full w-full'><p>Explore More</p> <i class="fa-solid fa-angles-right"></i></button></a>
            </div>
        </a>
    );

    return (
        <>
            <div className="pricing flex flex-col px-16 py-40">
                <div className="flex flex-col items-center justify-center text-white font-medium text-md space-y-5 w-full">
                    <a href="/" className=''><button className='rounded-3xl p-3 w-56 bg-gradient-to-r from-blue-700 to-pink-700 hover:from-yellow-500 hover:to-red-500'>Try Memberships</button></a>
                    <p className="text-sm font-extralight">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, velit!</p>
                    <i class="fa-solid fa-angles-down animate-bounce text-4xl"></i>
                </div>
                <div className="flex items-start justify-center m-auto w-[80rem]">
                    <div className="flex overflow-auto w-full">
                        <div className="flex space-x-5 p-2">
                            {card}
                            {card}
                            {card}
                            {card}
                            {card}
                        </div>
                    </div>
                    <div className="flex items-end justify-end m-auto px-5">
                        <i class="fa-solid fa-arrow-right-long text-xl"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Offers

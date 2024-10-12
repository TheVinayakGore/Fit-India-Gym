import React from 'react'

const Promo = () => {
    return (
        <>
            <div className="flex items-center justify-between m-auto px-16 py-2 bg-gradient-to-r from-green-700 to-blue-700 w-full">
                <div className="flex-col">
                    <h1 className='text-xl font-medium'>50+ Exceersices</h1>
                    <p className='text-xs'>Traditional & Newly added one</p>
                </div>
                <div className="flex items-center font-medium space-x-10">
                    <div className="flex items-center text-lg space-x-2">
                        <i class="fa-solid fa-podcast text-xl"></i>
                        <p>Explore Podcasts</p>
                    </div>
                    <div className="flex items-center text-lg space-x-2">
                        <i class="fa-solid fa-music text-xl"></i>
                        <p>Listen Music</p>
                    </div>
                    <div className="flex items-center text-lg space-x-2">
                        <i class="fa-solid fa-hand-holding-heart text-xl"></i>
                        <p>Do Meditation</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Promo

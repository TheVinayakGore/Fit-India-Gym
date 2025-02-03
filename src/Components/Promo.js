import React from "react";
import { FaPodcast, FaMusic, FaHandHoldingHeart } from "react-icons/fa";

const Promo = () => {
    return (
        <>
            <main className="flex items-center justify-between m-auto px-16 py-2 text-white bg-gradient-to-r from-green-700 to-blue-700 w-full">
                <div className="flex-col">
                    <h1 className='text-xl font-medium'>50+ Exercises</h1>
                    <p className='text-xs'>Traditional & Newly added one</p>
                </div>
                <div className="flex items-center font-medium space-x-10">
                    <div className="flex items-center text-lg space-x-2">
                        <FaPodcast className="text-xl" />
                        <p>Explore Podcasts</p>
                    </div>
                    <div className="flex items-center text-lg space-x-2">
                        <FaMusic className="text-xl" />
                        <p>Listen Music</p>
                    </div>
                    <div className="flex items-center text-lg space-x-2">
                        <FaHandHoldingHeart className="text-xl" />
                        <p>Do Meditation</p>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Promo;

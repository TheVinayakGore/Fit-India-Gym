import React from "react";
import bg from "../img/bg5.png";
import About from "./About";
import {
    FaDumbbell,
    FaBicycle,
    FaStopwatch,
    FaStar,
    FaHeartbeat,
    FaSwimmer,
    FaHiking,
    FaTableTennis
} from "react-icons/fa";

const Workouts = ({ darkMode }) => {
    const cardClass =
        "flex flex-col bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-orange-500 hover:to-purple-500 p-5 space-y-3 rounded-xl";

    const workoutsData = [
        { id: 1, icon: <FaDumbbell className="text-4xl" />, title: "Workouts" },
        { id: 2, icon: <FaBicycle className="text-4xl" />, title: "Cycling" },
        { id: 3, icon: <FaStopwatch className="text-4xl" />, title: "Time" },
        { id: 4, icon: <FaStar className="text-4xl" />, title: "Achieve" },
        { id: 5, icon: <FaHeartbeat className="text-4xl" />, title: "Health" },
        { id: 6, icon: <FaSwimmer className="text-4xl" />, title: "Swimming" },
        { id: 7, icon: <FaHiking className="text-4xl" />, title: "Trekking" },
        { id: 8, icon: <FaTableTennis className="text-4xl" />, title: "Sports" },
    ];

    return (
        <>
            <div className="flex flex-col w-full h-full">
                <About darkMode={darkMode} />

                {/* Workouts Section */}
                <div className="workout flex-col space-y-10 px-16 py-52">
                    <div className="flex items-start justify-between space-x-20 w-full">
                        <p className="text-md w-[30rem]">
                            <span className="text-4xl font-bold">The best workouts</span> <br /> *we Offer for you
                        </p>
                        <p className="text-xs font-light w-[30rem]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, eum ut tempore modi sit, harum ratione officia quas.
                        </p>
                    </div>

                    {/* Render Workout Cards */}
                    <div className="grid grid-cols-4 gap-5 text-white w-full">
                        {workoutsData.map((workout) => (
                            <a key={workout.id} href="/">
                                <div className={cardClass}>
                                    {workout.icon}
                                    <h1 className="text-xl font-bold">{workout.title}</h1>
                                    <p className="text-xs font-light">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quod!
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Diet Plans Section */}
                <div className="diet-plans flex items-start justify-between m-auto space-x-20 px-16 pt-20 text-white bg-gradient-to-r from-zinc-900 to-cyan-900 h-full">
                    <div className="flex flex-col items-start justify-between space-y-5 py-10 h-full">
                        <h1 className="text-3xl font-bold">Get Ready to reach your Fitness!</h1>
                        <ul className="text-sm space-y-5">
                            {[...Array(3)].map((_, index) => (
                                <li key={index}>
                                    <h1 className="font-semibold text-md leading-7">🔥 Fitness Tip {index + 1}</h1>
                                    <p className="text-xs">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore nostrum illum accusantium.
                                    </p>
                                </li>
                            ))}
                        </ul>
                        <a href="/">
                            <button className="text-sm p-2 bg-gradient-to-r from-red-800 to-blue-800 hover:from-yellow-600 hover:to-pink-500 rounded-md w-32">
                                See more
                            </button>
                        </a>
                    </div>
                    <div className="flex items-end h-full">
                        <img src={bg} alt="bg" className="w-[100rem]" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Workouts;
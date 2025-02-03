import React from "react";
import { FaAnglesDown, FaAnglesRight, FaArrowRightLong } from "react-icons/fa6";

const membershipPlans = [
    {
        duration: "1 Month",
        price: "$99",
        features: [
            "Barbell Squats",
            "Deadlifts",
            "Bench Press",
            "Pull-Ups/Chin-Ups",
            "Dumbbell Lunges",
            "Dumbbell Shoulder Press",
            "Cable Rows",
            "Dumbbell Chest Flyes",
            "Leg Press",
        ],
    },
    {
        duration: "3 Months",
        price: "$249",
        features: [
            "Barbell Squats",
            "Deadlifts",
            "Bench Press",
            "Pull-Ups/Chin-Ups",
            "Dumbbell Lunges",
            "Dumbbell Shoulder Press",
            "Cable Rows",
            "Dumbbell Chest Flyes",
            "Leg Press",
            "Treadmill Training",
        ],
    },
    {
        duration: "6 Months",
        price: "$449",
        features: [
            "Barbell Squats",
            "Deadlifts",
            "Bench Press",
            "Pull-Ups/Chin-Ups",
            "Dumbbell Lunges",
            "Dumbbell Shoulder Press",
            "Cable Rows",
            "Dumbbell Chest Flyes",
            "Leg Press",
            "Treadmill Training",
            "Yoga Sessions",
        ],
    },
    {
        duration: "12 Months",
        price: "$799",
        features: [
            "Barbell Squats",
            "Deadlifts",
            "Bench Press",
            "Pull-Ups/Chin-Ups",
            "Dumbbell Lunges",
            "Dumbbell Shoulder Press",
            "Cable Rows",
            "Dumbbell Chest Flyes",
            "Leg Press",
            "Treadmill Training",
            "Yoga Sessions",
            "Personal Trainer Support",
        ],
    },
    {
        duration: "18 Months",
        price: "$999",
        features: [
            "Barbell Squats",
            "Deadlifts",
            "Bench Press",
            "Pull-Ups/Chin-Ups",
            "Dumbbell Lunges",
            "Dumbbell Shoulder Press",
            "Cable Rows",
            "Dumbbell Chest Flyes",
            "Leg Press",
            "Treadmill Training",
            "Yoga Sessions",
            "Personal Trainer Support",
            "Nutrition Guide",
        ],
    },
    {
        duration: "24 Months",
        price: "$1199",
        features: [
            "Barbell Squats",
            "Deadlifts",
            "Bench Press",
            "Pull-Ups/Chin-Ups",
            "Dumbbell Lunges",
            "Dumbbell Shoulder Press",
            "Cable Rows",
            "Dumbbell Chest Flyes",
            "Leg Press",
            "Treadmill Training",
            "Yoga Sessions",
            "Personal Trainer Support",
            "Nutrition Guide",
            "Customized Workout Plans",
        ],
    },
];

const Offers = ({ darkMode }) => {
    return (
        <div className="pricing flex flex-col px-16 py-40">
            {/* Membership CTA */}
            <div className="flex flex-col items-center justify-center text-white font-medium text-md space-y-5 w-full">
                <a href="/">
                    <button className="rounded-3xl p-3 w-56 bg-gradient-to-r from-blue-700 to-pink-700 hover:from-yellow-500 hover:to-red-500">
                        Try Memberships
                    </button>
                </a>
                <p className="text-sm font-extralight">
                    Get fit with our customized plans tailored to your goals!
                </p>
                <FaAnglesDown className="animate-bounce" />
            </div>

            {/* Pricing Cards Section */}
            <div className="flex items-start justify-center m-auto w-[80rem]">
                <div className="flex overflow-auto w-full">
                    <div className="flex space-x-5 p-5 h-full">
                        {membershipPlans.map((plan, index) => (
                            <a key={index} href="/" target="_blank" className={`flex flex-col items-start justify-between p-10 ${darkMode ? "bg-zinc-800" : "bg-zinc-200"} hover:bg-gradient-to-t hover:from-yellow-400 hover:to-purple-600 hover:text-white rounded-md transition delay-150 duration-300 ease-in-out hover:scale-105 hover:z-30 delay-400 w-[23rem] h-[35rem]`}>
                                <h1 className="text-5xl font-bold opacity-20">
                                    {plan.duration}
                                </h1>
                                <div className="flex-col space-y-2 text-sm">
                                    <p className="text-2xl font-bold">{plan.price}</p>
                                    <ul>
                                        {plan.features.map((feature, i) => (
                                            <li key={i}>✅ {feature}</li>
                                        ))}
                                    </ul>
                                </div>
                                <a href="/" target="_blank" className="w-full">
                                    <button className="flex items-center justify-center text-sm text-black font-normal space-x-5 bg-neutral-100 hover:bg-transparent/[0.3] hover:text-white p-3 rounded-full w-full">
                                        <p>Explore More</p>{" "}
                                        <FaAnglesRight />
                                    </button>
                                </a>
                            </a>
                        ))}
                    </div>
                </div>
                <div className="flex items-center gap-2 m-auto text-xs px-3">
                    scroll <FaArrowRightLong />
                </div>
            </div>
        </div>
    );
};

export default Offers;
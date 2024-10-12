import React from 'react'
import vid from "../img/vid.mp4";

const About = () => {
    return (
        <div className="about flex items-start justify-between m-auto space-x-20 px-16 py-32 bg-zinc-800/50 h-full">
            <div>
                <video src={vid} muted autoplay="true" loop className='rounded-md'></video>
            </div>
            <div className="flex flex-col items-start justify-between space-y-5 h-full">
                <h1 className='text-4xl font-bold'>Get Ready to reach to your Fitness Goals !</h1>
                <div className="text-sm space-y-5">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda molestiae, error et aliquid quasi officiis natus, nulla sequi excepturi accusamus saepe dolores consequatur, cumque temporibus at. Magni recusandae minima excepturi.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, officiis? Corrupti tenetur odit officia molestias, et assumenda perspiciatis totam ducimus.</p>
                </div>
                <a href="/"><button className='text-md p-2 bg-gradient-to-r from-red-800 to-blue-800 hover:from-yellow-600 hover:to-pink-500 rounded-sm font-semibold w-52'>Read More</button></a>
            </div>
        </div>
    )
}

export default About

import React from 'react'
import bannerImg from "../../assets/banner.png"

const Hero = () => {
    return (
        <section className='h-screen relative bg-cover bg-center text-white' style={{ backgroundImage: `url(${bannerImg})` }}>

            <div className=' px-2  md:pt-44 pt-24 text-center space-y-6 md:w-1/2 mx-auto'>
                <h1 className='text-4xl lg:text-6xl font-medium lg:leading-tight leading-snug'>Make your interior more
                    minimalistic & modern</h1>
                <p className='text-2xl font-normal lg:w-1/2 mx-auto'>Turn your room with panto into a lot more minimalist and modern with ease and speed</p>
            </div>

        </section>
    )
}

export default Hero
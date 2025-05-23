import React from 'react'
import bannerImg from "../../assets/banner.png"
import { FaSearch } from 'react-icons/fa'
import TooltipButton from '../../components/TooltipButton'

const Hero = () => {
    return (
        <section className='h-screen relative bg-cover bg-center text-white' style={{ backgroundImage: `url(${bannerImg})` }}>

            <div className=' px-2  md:pt-44 pt-24 text-center space-y-6 md:w-1/2 mx-auto'>
                <h1 className='text-4xl lg:text-6xl font-medium lg:leading-tight leading-snug'>Make your interior more
                    minimalistic & modern</h1>
                <p className='text-2xl font-normal lg:w-1/2 mx-auto'>Turn your room with panto into a lot more minimalist and modern with ease and speed</p>

                <div className='relative inline-block z-30   '>
                    <input type="text" placeholder='Search furniture' className='w-full md:w-80 px-6 placeholder:text-white py-2 bg-white/25 rounded-full border border-gray-300 focus:outline-none' />
                    <div className='absolute right-3 top-1/2 transform -translate-y-1/2 p-2 bg-primary rounded-full cursor-pointer' >
                        <FaSearch></FaSearch>
                    </div>
                </div>
            </div>

            <div className='absolute inset-x-0 bottom-0 h-3/4 -mb-2 bg-gradient-to-t from-white via-transparent to-transparent blur-sm '>

            </div>

            <div className='absolute bottom-40 left-24 group'>
                <button className='relative p-4 bg-white/25 rounded-full border border-1 bg-white'>
                    <div className='hidden absolute space-x-1 bottom-full left-1/2 transform -translate-x-1/2 mb-3 p-2 rounded-lg bg-white/25 shadow-md group-hover:flex'>
                        <div className='size-6 bg-red-700 border border-white rounded-full' />
                        <div className='size-6 bg-green-700 border border-white rounded-full' />
                        <div className='size-6 bg-blue-700 border border-white rounded-full' />

                        <div className='absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-0 h-0 border-1-8 border-1-transparent border-r-8 border-r-transparent border-t-8 border-t-white/35'>

                        </div>

                    </div>
                </button>
            </div >

            <div className='hidden xl:block absolute bottom-40 left-24'>
                <TooltipButton position="bottom" />
            </div>

        </section>
    )
}

export default Hero
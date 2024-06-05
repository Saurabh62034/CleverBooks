import { Button } from 'flowbite-react'
import React from 'react'

const Cta = () => {
  return (
    <div className='cta'>
    <div
  className="
  p-12
  rounded-md
    w-full
    bg-gradient-to-r
    from-pink-500
    via-red-500
    to-yellow-500
    background-animate
  "
>
        <div>
            <h1 className='flex items-center justify-center
            text-2xl font-bold md:text-5xl md:font-extrabold p-8 text-white'>
                You can grow faster than you think!
            </h1>
        </div>
        <div>
            <p className='flex items-center justify-center text-xl p-4 text-gray-200 lg:pr-72 lg:pl-72 text-center'>
            Plan with Crest to fulfil your demand today, and dreams tomorrow. We bring the methods and technologies of large global companies to help brands of all sizes scale.
            </p>
        </div>
        <div className='flex items-center justify-center md:p-16'>
        <Button
        gradientDuoTone='purpleToBlue' className='rounded-full'>
            Get started with Cleverbooks
        </Button>
        </div>
    
    </div>
    </div>
  )
}

export default Cta
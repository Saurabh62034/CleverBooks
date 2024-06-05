import React, { useEffect } from 'react'
import TextGradient from '../components/TextGradient'
import Problem_Solved from '../components/Problem_Solved'
import Key_Metric from '../components/Key_Metric'
import Reviews from '../components/Reviews'
import Features from '../components/Features'
import AOS from "aos";
import "aos/dist/aos.css";
import Cta from '../components/Cta'

const Home = () => {

  useEffect(() => {
    AOS.init({
    });
  }, []);

  return (
    <div className='min-h-screen '>
      <div className=' home'>
      <div className='p-24'>
        <div className='text-5xl'>
        <h1 className='text-gray-200'>
            Every Order
        </h1>
        <h1 className='text-gray-200'>
            fulfilled,
            <span className='text-5xl font-bold bg-gradient-to-r from-red-500 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient'>
            <TextGradient text='on time' />
            </span>
        </h1>
        </div>
        <div className='pt-5 flex flex-col md:flex-row gap-4 text-xl'>
          <p className='md:w-1/2 text-gray-200'>
          Eliminate overstocking and under-stocking with Crest. Built by supply-chain experts, it brings the same technology used by large global brands to power fast-growing startups. In short, we make supply meet demand, and then help classNameyou grow both.
          </p>
          <div className='h-96 w-96'>
          <img src='./img3.svg'></img>
          </div>
        </div>
        <div className='pt-5'>
        <button className="group relative inline-block items-center justify-center overflow-hidden rounded-full px-8 py-4 font-medium text-indigo-600 shadow-2xl">
          <span className="ease absolute left-0 top-0 -ml-3 -mt-10 h-40 w-40 rounded-full bg-red-500 blur-md transition-all duration-700"></span>
          <span className="ease absolute inset-0 h-full w-full transition duration-700 group-hover:rotate-180">
          <span className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-purple-500 blur-md"></span>
          <span className="absolute bottom-0 right-0 h-24 w-24 rounded-full bg-blue-600 blur-md"></span>
          <span className="absolute bottom-0 right-0 h-24 w-24 rounded-full bg-sky-500 blur-md"></span>
          <span className="absolute bottom-0 right-0 h-24 w-24 rounded-full bg-green-500 blur-md"></span>
          <span className="absolute bottom-0 right-0 -mr-10 h-24 w-24 rounded-full bg-orange-500 blur-md"></span>
          <span className="absolute bottom-0 right-0 -mr-20 h-24 w-24 rounded-full bg-red-500 blur-md"></span>
          </span>
          <span className="relative text-white md:font-bold md:text-xl">Get Started with CleverBooks</span>
        </button>
        </div>
      </div>
      </div>  


      <div className='p-8' data-aos="fade-up"
      data-aos-duration="2000">
        <Problem_Solved />
      </div>

      <div className='p-8'>
        <h1 className='flex items-center justify-center text-2xl font-bold p-3'>Why should you choose us</h1>
        <Key_Metric />
      </div>

      <div data-aos="fade-right">
        <Reviews />
      </div>
      <div className='p-2'>
        <Features />
      </div>

      <div className='p-8'>
        <Cta className='' />
      </div>
      
    </div>
  )
}

export default Home
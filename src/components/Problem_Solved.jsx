import React, { useEffect } from 'react'
import { Card } from "flowbite-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Problem_Solved = () => {

    useEffect(() => {
        AOS.init({
        });
      }, []);
  return (

    <div className='p-5'>
        <h1 className='text-2xl flex items-center justify-center font-bold p-8'
        data-aos="fade-right">
        Four key questions answered by CleverBooks
        </h1>
        <div className='flex flex-col sm:flex-row gap-2 '>
        <div className='flex flex-col lg:flex-row flex-1 gap-2 '>
        <Card href="#" className="max-w-sm bg-teal-100 cursor-default py-8">
        <img className='w-16 h-16' src='./logo1.svg'></img>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            What to order
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.
            </p>
        </Card>
        <Card href="#" className="max-w-sm bg-teal-100 cursor-default py-8">
        <img className='w-16 h-16' src='./logo2.svg'></img>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            When to order
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 cursor-default">
            Have up-to-date inventory, storage, sales velocity, and demand. Get timely order suggestions so you're never left guessing.
            </p>
        </Card>
        </div>

        <div className='flex flex-col lg:flex-row flex-1 gap-2'>
        <Card href="#" className="max-w-sm bg-teal-100 cursor-default py-8">
        <img className='w-16 h-16' src='./logo3.svg'></img>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            How much to stock
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            Get inventory requirements for every node, for every SKU. So you avoid out-of-stock situations, even during demand spikes.
            </p>
        </Card>
        <Card as='div' href="/" className="max-w-sm bg-teal-100 cursor-default py-8">
            <img className='w-16 h-16' src='./logo4.svg'></img>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Where to place
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            Our tool suggests how to move stock within your supply chain. So you'll always have products available across cities.
            </p>
        </Card>
        </div>
        </div>
    </div>
  );
}
export default Problem_Solved
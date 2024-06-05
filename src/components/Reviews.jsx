import React from 'react'

const Reviews = () => {
  return (
    <div className="min-h-[70vh] p-3 relative">
        <h1 className='flex items-center justify-center font-bold text-2xl'>
            what our customers says
        </h1>
         <div className="w-96 mx-auto" style={{scrollSnapType: 'x mandatory'}}>

            <div className="mt-16">
               <input className="sr-only peer" type="radio" name="carousel" id="carousel-1" defaultChecked />
               
               <div
                  className="w-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg transition-all duration-300 opacity-0 peer-checked:opacity-100 peer-checked:z-10 z-0 dark:bg-gray-700">
                    <div className='flex flex-col items-center justify-center'>
                  <img className="rounded-full w-16 h-16" src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg" alt="" />
                  <h1>S. Subramanyam</h1>
                  <h1>Senior Advisor</h1>
                  </div>
                  <div className="py-4 px-8">
                     <h1 className="hover:cursor-pointer mt-2 text-gray-900 font-bold text-2xl tracking-tight dark:text-gray-200">Lorem
                        ipsum dolor sit amet consectetur adipisicing.
                     </h1>
                     <p className="hover:cursor-pointer py-3 text-gray-600 dark:text-gray-200 leading-6">Lorem ipsum dolor, sit amet
                        consectetur adipisicing elit.
                     </p>
                  </div>

                 
                  <div className="absolute top-1/2 w-full flex justify-between z-20">
                     <label htmlFor="carousel-3" className="inline-block text-red-600 cursor-pointer -translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                           <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
                        </svg>
                     </label>
                     <label htmlFor="carousel-2" className="inline-block text-red-600 cursor-pointer translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                           <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
                        </svg>
                     </label>
                  </div>
               </div>
            </div>



            
            <div className="mt-16">
               <input className="sr-only peer" type="radio" name="carousel" id="carousel-2" />
               
               <div
                  className="w-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg transition-all duration-300 opacity-0 peer-checked:opacity-100 peer-checked:z-10 z-0 dark:bg-gray-700">
                    <div className='flex flex-col items-center justify-center'>
                  <img className="rounded-full w-16 h-16" src="https://img.freepik.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg" alt="" />
                  <h1>Angela kate</h1>
                  <p>Senior software developer</p>
                  </div>
                  <div className="py-4 px-8">
                     <h1 className="hover:cursor-pointer mt-2 font-bold text-2xl tracking-tight">
                        Scelerisque eleifend donec pretium vulputate sapien.
                     </h1>
                     <p className="hover:cursor-pointer py-3 leading-6">Egestas diam in arcu cursus euismod
                        quis. Fusce id velit ut tortor. Congue quisque egestas diam in arcu cursus euismod quis.
                     </p>
                  </div>
                 
                  <div className="absolute top-1/2 w-full flex justify-between z-20">
                     <label htmlFor="carousel-1" className="inline-block text-blue-600 cursor-pointer -translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                           <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
                        </svg>
                     </label>
                     <label htmlFor="carousel-3" className="inline-block text-blue-600 cursor-pointer translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                           <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
                        </svg>
                     </label>
                  </div>
               </div>
            </div>



            <div className="mt-16">
               <input className="sr-only peer" type="radio" name="carousel" id="carousel-3" />
               
               <div
                  className="w-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg transition-all duration-300 opacity-0 peer-checked:opacity-100 peer-checked:z-10 z-0 dark:bg-gray-700">
                    <div className='flex flex-col items-center justify-center'>
                  <img className="rounded-full w-16 h-16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUbQi9IYBF5Wg5cOUPA8gTK46WbhDuYGHOEw&s" alt="" />
                  <h1>Harverd Starc</h1>
                  <p>Senior data analyst</p>
                  </div>
                  <div className="py-4 px-8">
                     <h1 className="hover:cursor-pointer mt-2 font-bold text-2xl tracking-tight">
                        Scelerisque eleifend donec pretium vulputate sapien.
                     </h1>
                     <p className="hover:cursor-pointer py-3 leading-6">Egestas diam in arcu cursus euismod
                        quis. Fusce id velit ut tortor. Congue quisque egestas diam in arcu cursus euismod quis.
                     </p>
                  </div>
                  
                  <div className="absolute top-1/2 w-full flex justify-between z-20">
                     <label htmlFor="carousel-2" className="inline-block text-blue-600 cursor-pointer -translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                           <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
                        </svg>
                     </label>
                     <label htmlFor="carousel-1" className="inline-block text-blue-600 cursor-pointer translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                           <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
                        </svg>
                     </label>
                  </div>
               </div>
            </div>

            
        
         </div>
      </div>
  )
}

export default Reviews
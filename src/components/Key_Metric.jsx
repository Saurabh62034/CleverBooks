import React from "react";

import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "./slider-animations.css";

import "./styles.css";

const content = [
  {
    
    image: "./real-time.png",
    
    Fourth: "Real-Time Tracking",

    Sixth: "Keep track of your inventory in real-time to avoid stockouts and overstocking.",
  },
  {
    
    image: "./alert.png",
    
    Fourth: "Automated Alerts",
    
    Sixth: "Receive automatic alerts for low stock levels and expiring products.",
  },
  {
    
    image: "./growth.png",
    
    Fourth: "Cost Efficiency",
    
    Sixth: "Optimize your inventory processes to reduce costs and increase profitability, making your business more efficient.",
  }
];


const Key_Metric = () => (
 <div>
    <Slider
    autoplay={3000}
    infinite className="slider-wrapper">
      {content.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          
        >
        <div className="pt-3">
          <div className="inner">
            <div className=" flex items-center justify-center">
            <img className="w-16 h-16" src={item.image}></img>
            </div>
           
         
            
            <p className="pt-4 tracking-widest text-teal-500 dark:text-gray-200">{item.Fourth}</p>
            <span className="flex gap-1 items-center justify-center p-2">
              
              <h2 className="font-bold text-2xl mt-12 text-lime-800 dark:text-lime-400">{item.Sixth}</h2>
            </span>

          </div>
          
          </div>
        </div>
      ))}
    </Slider>
  </div>
);

export default Key_Metric;
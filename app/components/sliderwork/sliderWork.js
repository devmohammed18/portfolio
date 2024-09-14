
'use client'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import jobs from '../../utils/jobs'
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation'
function SliderWork({showDesc,setShowDesc,toggle,setToggle}) {
 
const router=useRouter();


    const arrowRef=useRef();
   
    var settings = {

      className: "center",
      centerMode: true,
      
        dots: true,
        arrows:false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
         slidesToScroll: 3,
         initialSlide: 0,
        responsive: [
          {
            breakpoint:1024,
            settings: {
              centerMode: true,
              slidesToShow: 3,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 920,
            settings: {
              className: "center",
              centerMode: false,
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 1
            }
          },
          {
            breakpoint: 700,
            settings: {
              centerMode: false,
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    
    <div className="slider-container  relative  ">

        <Slider ref={arrowRef} {...settings}>
            {jobs.map(({id,image,title,desc,url})=>(
            <div key={id}  onMouseMove={()=>{setShowDesc(id),setToggle(true)}} className=" carte_image_infor   relative h-48  border-0 my-2 border-solid border-green-500 cursor-pointer ">
                
                <div className= {toggle && showDesc===id?"h-48 opacity-25 border-2 border-solid  border-yellow-600 transition-all ease-in-out duration-500  "
                    :" h-48 border-2 border-solid border-yellow-600 "
                }
               >
                    <Image  className=" h-full border-red-950 border-2 bordre-solid " src={image} alt={title} />
                </div> 
                    
                <div onMouseLeave={()=>{setToggle(false)}}   className={toggle && showDesc===id?"absolute -bottom-0 right-0 left-0 h-48  flex flex-col justify-around items-start border-2 border-solid border-yellow-400 px-2 transition-all ease-out duration-500 "
                    :" sm:gap-0  absolute -bottom-52 right-0 left-0 h-48  flex flex-col justify-around items-start border-0 border-solid border-yellow-400 px-2  transition-all ease-out duration-700"
                }>
                    <h1 className="md:text-ms text-lg font-mono capitalize"> {title} </h1>     
                    <p  className="md:text-xs sm:text-sm text-sm" >{desc}</p>
                    
                     <button  onClick={()=>window.open(url, '_blank')} target="_blank" className="md:text-sm md:px-5 md:py-1 sm:text-sm bg-red-700 px-7 py-1 text-lg font-mono capitalize rounded-3xl"> demo </button>
                </div>


               
            </div> 
            
            ))

            }
        
        </Slider>


        <div >


           <button className="sm:-left-6    absolute text-3xl text-red-700 top-[45%] -left-8  " onClick={()=>{arrowRef.current.slickPrev(),console.log(arrowRef.current)}} ><IoIosArrowBack /></button>
           <button className="sm:-right-6    absolute text-3xl text-red-700 top-[45%] -right-8 " onClick={()=>{arrowRef.current.slickNext()}} ><IoIosArrowForward /> </button>

        </div>

    </div>
        
   

  )
}

export default SliderWork

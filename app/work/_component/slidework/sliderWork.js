
'use client'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import jobs from '../../../utils/jobs'
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
        slidesToShow: 1,
         slidesToScroll: 1,
         initialSlide: 0,
        responsive: [
          {
            breakpoint:1024,
            settings: {
              centerMode: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 920,
            settings: {
              className: "center",
              centerMode: false,
              slidesToShow: 1,
              slidesToScroll: 1,
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
            <div key={id}  onMouseMove={()=>{setShowDesc(id),setToggle(true)}} onTouchMove={()=>{setShowDesc(id),setToggle(true)}} className="carte_image_infor relative h-56 my-4 flex justify-center items-center  border-2 box-content  border-solid border-yellow-600  dark:border-white  cursor-pointer ">
                
                <div className= {toggle && showDesc===id?
                     " h-56 flex items-center justify-center opacity-25 border-0 border-solid   border-yellow-600 transition-all ease-in-out duration-500  "
                    :" h-56 flex items-center justify-center border-0 border-solid border-yellow-600 "
                }
               >
                    <Image  className=" h-full w-full object-fill border-red-950 border-2 bordre-solid " width={1000} height={1000} src={image} alt={title} />
                </div> 
                    
                <div onMouseLeave={()=>{setToggle(false)}} onClick={()=>{setToggle(false)}}  className={toggle && showDesc===id?
                     "px-2  absolute bottom-0 right-0 left-0 h-56 flex flex-col justify-around items-start border-0 border-solid border-yellow-400  transition-all ease-out duration-500 "
                    :"px-2  sm:gap-0  absolute -bottom-60 right-0 left-0   h-56 flex flex-col justify-around items-start border-0 border-solid border-yellow-400  transition-all ease-out duration-700"
                }>
                    <h1 className="px-4 md:text-ms text-lg font-mono capitalize"> {title} </h1>     
                    <p  className="px-4 md:text-ms sm:text-sm text-sm text-justify" >{desc}</p>
                    
                    <button  onClick={()=>window.open(url, '_blank')} target="_blank" className="mx-4 md:text-sm md:px-5 md:py-1 sm:text-sm bg-red-700 px-7 py-1 text-lg font-mono capitalize rounded-3xl"> demo </button>
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

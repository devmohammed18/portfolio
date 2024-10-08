'use client'


import {Suspense, useState } from "react"
import validate from '../config/validate.js'
import { LuRefreshCw } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
function Contact() {


const [formData,setFormData]=useState({
  name:"",
  email:"",
  object:"",
  message:"",
  
})


const [errors, setErrors] = useState({});
const [success, setSuccess] = useState(null);
const [loading,setLoading]=useState(false)

const handleCancel=()=>{
  setFormData({
    name:"",
    email:"",
    object:"",
    message:"",})
    
 }

const handleChange=(e)=>{
const data={...formData,[e.target.name]:e.target.value}
setFormData(data)

}

const handleLoading=()=>{
 
    setLoading(true)
    setTimeout(()=>{setLoading(false), setFormData({name:"",email:"",object:"",
  message:"",})},3000)



}
const handleSubmit= async(e)=>{
 e.preventDefault();
 
 const errors_validation=validate(formData);
 console.log('----------------------------------------------')
 console.log(errors_validation)
 console.log(Object.keys(errors_validation).length)
 
 if(Object.keys(errors_validation).length>0){
  setErrors(errors_validation)
 }
  console.log('Errors======>:',errors)


if(Object.keys(errors_validation).length=== 0){
 

 try {
  const response = await fetch('/api/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  handleLoading(); // function loading the Botton when it sended the request
  const data = await response.json();

  if (data.success) {
    setSuccess('Email sent successfully!');
    setFormData({
      name: '',
      email: '',
      object: '',
      message: '',
    });
  } else {
    setErrors(`Error sending email: ${data.error}`);
  }
} catch (error) {
  setErrors(`Error: ${error.message}`);
}

}//if 

 };
  return (
    <div className=' h-screen flex  flex-col items-center bg-bg_light dark:bg-bg_dark '>

        <div className="text-3xl text-white font-mono mt-8 "> Contact </div>
        
        <div className=" sm:w-full sm:flex-col sm:items-center flex justify-end items-start text-white w-4/5 border-0 border-solid border-red-600">

          <div className="sm:w-full  bg-bg_dark dark:bg-bg_light h-full flex flex-col justify-start items-start rounded-l-lg shadow-lg  w-2/5 p-5 gap-4 border-0 border-solid border-red-600">
             <div className="flex justify-center items-center gap-2">
                  <span className="text-2xl" > <IoCallOutline /> </span>
                  <div className="flex flex-col  " >
                     <h1 className="text-xl capitalize">call me </h1>
                     <span className="text-sm  text-slate-400"> 438 923 2594 </span>
                     
                   </div>
             </div>

             <div className="flex justify-center items-center gap-2">
                <span className="text-2xl"><MdOutlineEmail /></span>
                <div className="flex flex-col  " >
                   <h1 className="text-xl capitalize">email</h1>
                   <span className="text-sm text-slate-400">boureghidamohamed@gmail.com</span>
                  
               </div>
              </div>  
             <div className="flex justify-center items-center gap-2">
               <span><IoLocationOutline /></span>
               <div>
                   <h1 className="text-xl capitalize">location</h1>
                   <span className="text-sm  text-slate-400">montreal Canada</span>
               </div>
             </div>
          </div>

          <div className='sm:w-full bg-bg_dark dark:bg-bg_light border-solid rounded-r-lg w-3/5 p-5 shadow-lg '>
              
              <form onSubmit={handleSubmit} >
                <Suspense fallback={<LuRefreshCw className="animate-spin  z-10 ease-in h-5 w-50 mr-3" />} >
                  <div className="relative" >
                    <input type="text" name="name" onChange={handleChange} value={formData.name} className='w-full  relative  mb-5 p-3 outline-none border-2 border-solid border-black rounded-lg  text-bg_light dark:text-bg_dark'  placeholder='Enter your Name'/>
                    {errors.name && <p className='text-red-500 text-xs font-bold absulte flex  border-red-900 absolute p-1 top-12 '>* {errors.name}</p>}
                  </div>

                  <div className="relative">
                    <input type="email" name="email" onChange={handleChange} value={formData.email} className='w-full mb-5  p-3 outline-none border-none rounded-lg  text-bg_light dark:text-bg_dark ' placeholder='Enter your Email'/>
                    {errors.email && <p className='text-red-500 text-xs font-bold absulte flex  border-red-900 absolute p-1 top-12'>*{errors.email}</p>}
                  </div>
                  
                  
                  <div className="relative">
                    <input type="text" name="object" onChange={handleChange} value={formData.object} className='w-full mb-5  p-3 outline-none border-none rounded-lg  text-bg_light dark:text-bg_dark' placeholder='Enter your Object'/>
                    {errors.object && <p className='text-red-500 text-xs font-bold absulte flex  border-red-900 absolute p-1 top-12'>*{errors.object}</p>}
                  </div>
                  
                  <div className="relative">
                      <textarea  name="message"  onChange={handleChange} value={formData.message}  className='w-full h-36 mb-5  p-4 outline-none border-none rounded-lg  text-bg_light dark:text-bg_dark ' placeholder='Enter your Message...'/>
                      {errors.message && <p className='text-red-500 text-xs font-bold absulte flex  border-red-900 absolute p-1 top-36'>*{errors.message}</p>}
                  </div>
                  </Suspense> 
                  
                  <div className="flex space-x-4">
                  <button type="submit"  className='bg-green-600 flex justify-center  w-32 p-2 rounded-lg tracking-wide bordre-none  hover:bg-green-500' disabled={loading}> 
                    
                    {loading?<LuRefreshCw className="animate-spin ease-in h-5 w-5 mr-3" />:''} <span>Submit</span> </button>
                  
                    <button type='button'className='bg-red-600 w-32 p-2 rounded-lg border-none hover:bg-red-500 transition-all' onClick={handleCancel} > Cancel </button>
                  </div>
              </form>
              
          </div>

         
        </div>
          {success && <div className='text-green-500 mt-4'>{success}</div>}
          {/* {error && <div className='text-red-500 mt-4'>{error}</div>} */}
      
     

      
    </div>
  )
}

export default Contact;

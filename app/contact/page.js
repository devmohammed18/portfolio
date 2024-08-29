'use client'


import {Suspense, useState } from "react"
import validate from '../config/validate.js'
import { LuRefreshCw } from "react-icons/lu";
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
  if(Object.keys(errors).length<=0){
    setLoading(true)
    setTimeout(()=>{setLoading(false), setFormData({name:"",email:"",object:"",
  message:"",})},7000)
  }


}
const handleSubmit= async(e)=>{
 e.preventDefault();

 setErrors(validate(formData));
 console.log(errors)
 console.log('size Errors:',Object.keys(errors).length)
if(Object.keys(errors).length-1<=0){


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
    <div className='bg-blue-800 h-screen flex  flex-col items-center  '>

        <div className="text-3xl text-slate-300 font-bold mt-8 "> Contact </div>
         <div className='mt-6 bg-slate-300 border-solid rounded-md bg-blue-800 w-4/5 p-5 shadow-lg '>
           
            <form onSubmit={handleSubmit} >
             <Suspense fallback={<LuRefreshCw className="animate-spin  z-10 ease-in h-5 w-50 mr-3" />} >
               <div className="relative" >
                 <input type="text" name="name" onChange={handleChange} value={formData.name} className='w-full  relative  mb-5 p-3 outline-none border-2 border-solid border-black rounded-lg  text-red-900'  placeholder={errors.name ?errors.name :'Enter your Name'}/>
                 {errors.name && <p className='text-red-500 text-xs font-bold absulte flex  border-red-900 absolute p-1 top-12 '>* {errors.name}</p>}
                </div>

                <div className="relative">
                  <input type="email" name="email" onChange={handleChange} value={formData.email} className='w-full mb-5  p-3 outline-none border-none rounded-lg  ' placeholder='Enter your Email'/>
                  {errors.email && <p className='text-red-500 text-xs font-bold absulte flex  border-red-900 absolute p-1 top-12'>*{errors.email}</p>}
                </div>
                
                
                <div className="relative">
                  <input type="text" name="object" onChange={handleChange} value={formData.object} className='w-full mb-5  p-3 outline-none border-none rounded-lg ' placeholder='Enter your Object'/>
                  {errors.object && <p className='text-red-500 text-xs font-bold absulte flex  border-red-900 absolute p-1 top-12'>*{errors.object}</p>}
                </div>
                
                <div className="relative">
                   <textarea  name="message"  onChange={handleChange} value={formData.message}  className='w-full h-36 mb-5  p-4 outline-none border-none rounded-lg ' placeholder='Enter your Message...'/>
                   {errors.message && <p className='text-red-500 text-xs font-bold absulte flex  border-red-900 absolute p-1 top-36'>*{errors.message}</p>}
                </div>
                </Suspense> 
                
               <div className="flex space-x-4">
                <button type="submit"  className='bg-green-600 flex justify-center  w-32 p-2 rounded-lg tracking-wide bordre-none hover:bg-green-500' disabled={loading}> 
                  
                 {loading?<LuRefreshCw className="animate-spin ease-in h-5 w-5 mr-3" />:''} <span>Submit</span> </button>
               
                 <button type='button'className='bg-red-600 w-32 p-2 rounded-lg border-none hover:bg-red-500 transition-all' onClick={handleCancel} > Cancel </button>
               </div>
            </form>
            
          </div>

          {success && <div className='text-green-500 mt-4'>{success}</div>}
          {/* {error && <div className='text-red-500 mt-4'>{error}</div>} */}
      
     

      
    </div>
  )
}

export default Contact;

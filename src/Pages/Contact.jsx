import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Canvas  } from '@react-three/fiber';
import Fox from '../models/Fox';
import Loader  from '../Components/Loader';
import { Suspense } from "react";

const Contact = () => {

const formRef = useRef(null);
const [form, setForm] = useState( {  name:'', email:'', message:''} );

const [isLoading, setIsLoading] = useState(false);
const [currentAnimation, setCurrentAnimation] = useState('idle')

const handleChange = (e) => {
  setForm({...form, [e.target.name]: e.target.value})
};
const handleFocus = () => setCurrentAnimation('walk') ;

const handleBlur = () => setCurrentAnimation('idle')

const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
     setCurrentAnimation('hit');
    emailjs.send(
     import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
     import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
     {
      from_name: form.name,
      to_name: "Aizen Sosuke",
      from_email: form.email,
      to_email: 'abdussalamsuleiman2@gmail.com',
      message: form.message
     },
     import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then (() => {
      setIsLoading(false);
     
      //TODO: SHOW SUCCESS MESSAGE
      //TODO: HIDE AN ALERT

      setTimeout(() => {
        setCurrentAnimation('idle')
        setForm({ name:'', email:'', message:''});
        setIsLoading(false);
        {!isLoading && <p className="text-green-600 mt-4">Message sent! 😊</p>}

      }, 3000)

      
    }).catch((error) => {
      setIsLoading(false);
      setCurrentAnimation('idle');
      setIsLoading(false);
      console.log(error);
    })
}

  return (
  <section className='min-h-screen w-full mx-auto px-4 pt-28 flex flex-col lg:grid lg:grid-cols-2 gap-12'>
    <div className=' lg:col-span-1 w-full px-4'>
     <h1 className='sm:text-5xl text-3xl font-semibold sm:leading-snug font-poppins'>
       Get in Touch
     </h1>
     
     <form className='w-full flex flex-col gap-7 mt-10' action="" onSubmit={handleSubmit} >
      <label className='text-black-500 font-semibold' htmlFor="">
        Name
        <input type="text"
         name='name' 
         className='box-border bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2.5 font-normal shadow-card' 
         placeholder='Enter name' 
         required
         value={form.name}
         onChange={handleChange}
         onFocus={handleFocus}
         onBlur={handleBlur}
         />
      </label>
      <label className='text-black-500 font-semibold' htmlFor="">
        Email
        <input 
         type="email"
         name='email' 
         className='box-border bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2.5 font-normal shadow-card' 
         placeholder='@gmail.com' 
         required
         value={form.email}
         onChange={handleChange}
         onFocus={handleFocus}
         onBlur={handleBlur}
         />
      </label>
      <label className='text-black-500 font-semibold' htmlFor="">
        Name
        <textarea
         name='message' 
         className='box-border bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2.5 font-normal shadow-card' 
         placeholder='Let me know how i can help u' 
         required
         value={form.message}
         onChange={handleChange}
         onFocus={handleFocus}
         onBlur={handleBlur}
         />
      </label>
      <button
      type='submit'
      className='
     text-white 
    bg-gradient-to-r from-[#00c6ff] to-[#0072ff] 
    hover:from-[#00a8e8] hover:to-[#005bb5]
    focus:ring-4 focus:outline-none focus:ring-blue-300 
    font-medium rounded-lg text-sm 
    w-full sm:w-auto 
    px-5 py-2.5 
    text-center 
    transition duration-300 ease-in-out
    cursor-pointer"
    '
      disabled = {isLoading}
      onFocus={handleFocus}
      onBlur={handleBlur}
      >
        {isLoading ? 'Sending...' : 'Send Message'}
      </button>
     </form>
    </div>
    <div className='lg:col-span-1 lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
      <Canvas
      camera = {{
      position: [0, 0, 5],
      fov: 75,
      near: 0.1,
      far: 1000
      }}
      >
      <directionalLight intensity={2.5} position={[0, 0, 1]} />
      <ambientLight intensity={0.5}  />
        <Suspense fallback={<Loader />} > 
            <Fox
            currentAnimation={currentAnimation}
            position = {[0.5, 0.35, 0]}
            rotation = {[12.6, -0.6, 0]}
            scale = {[0.5, 0.5, 0.5]}
            >

            </Fox>
        </Suspense>
    </Canvas>
    </div>
  </section>
  )
}

export default Contact
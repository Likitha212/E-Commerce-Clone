import React, { useState } from 'react'
import { IoMdPerson } from "react-icons/io";
const Login = () => {
  const[currentState, setCurrentState] = useState('Sign-Up');

  const onSubmitHandler = async (event) =>{
    event.preventDefault();
  }

  
  return (
    
    
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-black  bg-blue-400 px-10 py-9 rounded-xl drop-shadow-2xl'>
      <div className='inline-flex items-center gap-2  mt-12'>
        <p className='prata-regular text-3xl mb-4 '>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-black'/>

      </div>
     
       {currentState === 'Login' ? '' :
       
       <input className='w-full px-3 py-2 border border-gray-800 rounded-2xl' type="text" placeholder='Name'  required /> }
       
       <input className='w-full px-3 py-2 border border-gray-800 rounded-2xl' type="email" placeholder='Email'  required/>
       <input className='w-full px-3 py-2 border border-gray-800 rounded-2xl' type="password" placeholder='Password'  required/>
       <div className='w-full flex justify-between text-sm mt-[-8px] cursor-pointer'>
        <p className='text-white' >Forgot password?</p>
        {
          currentState === 'Login'
          ? <p onClick={()=> setCurrentState('Sign-Up')} className='cursor-pointer text-white'>Create account?</p>
          : <p onClick={()=> setCurrentState('Login')} className='cursor-pinter text-white'> Login Here</p>

        }
       </div>
       <button className='bg-black rounded-3xl text-white font-light px-10 py-2 mt-4 w-full'>{currentState === 'Login' ? 'Sign In': 'Sign Up'}</button>
    </form>
  
  )
}

export default Login
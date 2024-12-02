import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
          <img src={assets.logo} alt="" className='mb-5 w-32'/>
          <p className='text-gray-500 w-full md:w-2/3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi ea corrupti delectus! Iure, odio beatae eligendi earum sint numquam voluptas inventore, quia aliquam ab rem, est aperiam dignissimos minus repudiandae iste atque!</p>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-500'>
            <li className=' hover:text-black'>Home</li>
            <li className=' hover:text-black'>About</li>
            <li className=' hover:text-black'>Delivery</li>
            <li className=' hover:text-black'> Privacy Policy</li>

          </ul>

      </div>
      <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-500'>
            <li>+1-000-000-0000</li>
            <li>contact@forever.com</li>
            
            

          </ul>

      </div>
        

        </div>
        <div>
          <hr/>
          <p className='py-5 text-sm text-center'>Copyright 2024@ forever.com -All Right Reserved.</p> 
        </div>
       

    </div>
  )
}

export default Footer
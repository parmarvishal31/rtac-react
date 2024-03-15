import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";
import { PiPhoneCallFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
function Footer() {
  return (
    <div className='flex w-full justify-center items-center rounded-t-lg'>
        <div className='bg-gray-700 w-full flex justify-center items-center gap-1 font-semibold border-r-2 border-black text-white'><span className='text-green-700'><IoLogoWhatsapp /></span><span>Whatsapp</span></div>
        <div className='bg-gray-600 w-full flex justify-center items-center gap-1 font-semibold border-r-2 border-black text-white'><span className='text-red-500'><PiPhoneCallFill /></span><span>Call Now</span></div>
        <div className='bg-gray-700 w-full flex justify-center items-center gap-1 font-semibold text-white'><span className='text-yellow-500'><MdEmail /></span><span>Mail</span></div>
    </div>
  )
}

export default Footer
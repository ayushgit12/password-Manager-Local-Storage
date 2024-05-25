import React from 'react'
import pic from '../assets/heart.png'

function Footer() {
  return (
    <div className='bg-purple-600'>
      <p className='justify-center h-10 text-white flex items-center'>Created with <img src={pic} className='w-7' alt="" /> by Ayush Raj Baranwal</p>
    </div>
  )
}

export default Footer

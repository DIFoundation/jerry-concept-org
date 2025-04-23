import Link from 'next/link'
import React from 'react'

function HeroSection() {
  return (
    <div className=''>
        <h2 className="text-4xl font-bold mb-5 ">
        Welcome to Jerry Concept Organisation
      </h2>
      <p className=" text-lg max-w-2xl mx-auto">
        Your one-stop shop for typing, printing, internet access, digital
        services, and more. Fast, affordable, and reliable.
      </p>
      <div className='space-x-36 mt-10'>
        <Link href='/' className='button border-2'>Learn More</Link>
        <Link href='/' className=' bg-white text-blue-900 button'>Pricing</Link>
      </div>
      
    </div>
  )
}

export default HeroSection
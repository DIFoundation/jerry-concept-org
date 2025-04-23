import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed bg-white text-blue-900 px-20 py-6 shadow w-full z-0 ">
      <div className="max-w-screen mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">CyberCenter</h1>
        <div className="space-x-6 text-xl font-semibold">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <Link href='/booking' className='button bg-blue-900 text-amber-100'>Book Now</Link>
      </div>
    </nav>
  )
}

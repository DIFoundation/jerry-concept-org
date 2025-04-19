import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed bg- text-blue-900 px-20 py-6 shadow w-full z-10 ">
      <div className="max-w-screen mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">CyberCenter</h1>
        <div className="space-x-6 text-xl font-semibold">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <button href='/booking' className='button'>Book Now</button>
      </div>
    </nav>
  )
}

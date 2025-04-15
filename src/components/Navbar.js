import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white px-4 py-3 shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">CyberCenter</h1>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/booking">Booking</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  )
}

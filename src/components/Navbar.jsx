"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Training", path: "/training" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-bold text-2xl text-jerry-700">Jerry Concept</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="text-base font-medium text-gray-700 hover:text-jerry-700 transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Button asChild className="bg-jerry-700 hover:bg-jerry-800">
            <Link href="/contact">Get Started</Link>
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
              <span className="font-bold text-2xl text-jerry-700">Jerry Concept</span>
            </Link>
            <button
              className="p-2 text-gray-700"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="text-lg font-medium text-gray-700 hover:text-jerry-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              asChild 
              className="bg-jerry-700 hover:bg-jerry-800 w-full mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <Link href="/contact">Get Started</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

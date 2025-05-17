"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Bienvenida', path: '/' },
    { name: 'Acerca de mí', path: '/about' },
    { name: 'Mis proyectos', path: '/projects' },
    { name: 'Testimonios', path: '/testimonials' },
    { name: 'Contactos', path: '/contact' }
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Layout para móvil */}
        <div className="md:hidden flex justify-between items-center py-4">
          <Link href="/">
            <span className="font-semibold text-gray-500 text-lg">Diego Cerón</span>
          </Link>
          
          <button 
            className="text-gray-500 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Layout para desktop - Todo centrado */}
        <div className="hidden md:flex flex-col items-center py-4">
         
          {/* Menú centrado */}
          <div className="flex space-x-8">
            {menuItems.map((item, index) => (
              <Link 
                key={index}
                href={item.path}
                className="text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Menú móvil desplegable */}
        {isOpen && (
          <div className="md:hidden pb-4 flex flex-col items-center space-y-3">
            {menuItems.map((item, index) => (
              <Link 
                key={index}
                href={item.path}
                className="w-full text-center py-2 text-gray-500 font-semibold hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
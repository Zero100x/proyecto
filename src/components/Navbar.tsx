"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Bienvenida', path: '/' },
    { name: 'Acerca de mí', path: '/about' },
    { name: 'Pasatiempos', path: '/hobbies' },
    { name: 'Mis proyectos', path: '/projects' },
    { name: 'Testimonios', path: '/testimonials' },
    { name: 'Contactos', path: '/contact' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4" aria-label="Main Navigation">
        
        {/* Layout para móvil */}
        <section className="md:hidden flex justify-between items-center py-4">
          <Link href="/">
            <span className="font-semibold text-gray-500 text-lg">Diego Cerón</span>
          </Link>

          <button 
            className="text-gray-500 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </section>

        {/* Layout para escritorio */}
        <section className="hidden md:flex flex-col items-center py-4">
          <ul className="flex space-x-8" role="list">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link 
                  href={item.path}
                  className="text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Menú móvil desplegable */}
        {isOpen && (
          <section className="md:hidden pb-4 flex flex-col items-center space-y-3">
            <ul className="w-full flex flex-col items-center space-y-3" role="list">
              {menuItems.map((item, index) => (
                <li key={index} className="w-full">
                  <Link 
                    href={item.path}
                    className="w-full text-center py-2 text-gray-500 font-semibold hover:text-blue-500 block"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </nav>
    </header>
  );
}

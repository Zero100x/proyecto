import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <Link href="/" className="flex items-center py-4 px-2">
              <span className="font-semibold text-gray-500 text-lg">Diego Cerón</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <Link href="/#about" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Acerca de mí</Link>
            <Link href="/#projects" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Proyectos</Link>
            <Link href="/#testimonials" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Testimonios</Link>
            <Link href="/#contact" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Contacto</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
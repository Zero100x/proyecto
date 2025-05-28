"use client";

import Image from 'next/image';
import Navbar from '@/components/Navbar';

const testimonials = [
  {
    id: 1,
    name: "Juan Vizuette",
    role: "Compañero de Universidad",
    content:
      "Diego siempre aporta ideas claras y soluciones prácticas en nuestros trabajos. Es confiable y hace que el equipo funcione mejor.",
    avatar: "/testimonio1.png",
  },
  {
    id: 2,
    name: "Anderson Ojeda",
    role: "Compañero de Universidad",
    content:
      "Diego es de esos compañeros que siempre entregan trabajos impecables y a tiempo. ¡Da gusto trabajar con alguien tan responsable!",
    avatar: "/testimonio2.png",
  },
  {
    id: 3,
    name: "Johan Delgado",
    role: "Compañero de Universidad",
    content:
      "Aunque aún estamos aprendiendo, Diego se destaca por su curiosidad y ganas de ir más allá en cada reto.",
    avatar: "/testimonio3.png",
  },
];

export default function TestimonialsPage() {
  return (
    <section className="bg-white min-h-screen">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-16">
        <header>
          <h1 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Testimonios
          </h1>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(({ id, name, role, content, avatar }) => (
            <article
              key={id}
              className="bg-blue-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <header className="flex items-center mb-6">
                <figure className="relative w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-white shadow">
                  <Image
                    src={avatar}
                    alt={name}
                    fill
                    className="object-cover"
                  />
                </figure>
                <section>
                  <h3 className="font-bold text-gray-800">{name}</h3>
                  <p className="text-sm text-gray-600">{role}</p>
                </section>
              </header>
              <blockquote className="relative pl-4">
                <p className="text-gray-600 italic before:text-4xl before:text-blue-200 before:absolute before:-top-2 before:-left-2">
                  {content}
                </p>
              </blockquote>
            </article>
          ))}
        </section>
      </main>
    </section>
    
  );

  
}

         
          

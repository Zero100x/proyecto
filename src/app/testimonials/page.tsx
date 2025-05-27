"use client";

import Image from 'next/image';
import Navbar from '@/components/Navbar';

const testimonials = [
  {
    id: 1,
    name: "Ana Martínez",
    role: "Directora de Proyectos",
    content:
      "Diego demostró excelentes habilidades técnicas y una gran capacidad de trabajo en equipo durante su colaboración en nuestro proyecto. Su dedicación y proactividad fueron fundamentales para alcanzar los objetivos en tiempo récord.",
    avatar: "",
  },
  {
    id: 2,
    name: "Carlos Vega",
    role: "Desarrollador Senior",
    content:
      "He tenido la oportunidad de mentorear a Diego y siempre me ha impresionado su capacidad de aprendizaje y su compromiso. Asimila conceptos nuevos con rapidez y los aplica de manera efectiva en sus proyectos.",
    avatar: "",
  },
  {
    id: 3,
    name: "Laura Jiménez",
    role: "Compañera de Universidad",
    content:
      "Diego es un excelente compañero de equipo, siempre dispuesto a ayudar y aportar ideas innovadoras. Su enfoque estructurado y atención al detalle hacen que sea un placer trabajar con él en proyectos académicos.",
    avatar: "",
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
                <p className="text-gray-600 italic before:content-['“'] before:text-4xl before:text-blue-200 before:absolute before:-top-2 before:-left-2">
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

"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";

const projects = [
  { id: 1, title: "Diseño de imagen de tajeta", image: "/image1.png" },
  { id: 2, title: "inicio de pagina magical mirai", image: "/image2.png" },
  { id: 3, title: "Plataforma de notas", image: "/image3.png" },
  { id: 4, title: "Mantenimiento y Especificaciones de Vehículos", image: "/image4.png" },
];

const testimonials = [
  { id: 1, name: "Juan Vizuette", image: "/testimonio1.png" },
  { id: 2, name: "Anderson Ojeda", image: "/testimonio2.png" },
  { id: 3, name: "Johan Delgado", image: "/testimonio3.png" },
];

export default function Home() {
  return (
    <section className="min-h-screen bg-white scroll-smooth">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Columna Izquierda */}
        <article className="space-y-8 lg:col-span-1">
          {/* Bienvenida */}
          <section id="inicio" className="bg-gray-100 rounded-lg p-6 space-y-4">
            <h1 className="text-2xl font-semibold text-gray-800">Bienvenid@</h1>
            <p className="text-gray-700 leading-relaxed">
              Hola, soy Diego Ceron, un apasionado de la tecnología y el desarrollo de software. Aquí encontrarás una recopilación de mis proyectos, habilidades y experiencias que reflejan mi crecimiento como profesional en el mundo digital.
            </p>
          </section>

          {/* Acerca de mí extendido */}
          <section className="bg-gray-100 rounded-lg p-6 space-y-4 flex flex-col items-center">
            <h2 className="text-xl font-semibold text-gray-800">Acerca de mí</h2>
            <p className="text-gray-700 text-center">
              Soy estudiante de quinto semestre en la Universidad Cooperativa de Colombia.
            </p>
            <address className="not-italic text-gray-700 text-center space-y-1">
              <p>Contactos</p>
              <a href="mailto:cerondiego19@gmail.com" className="underline block">cerondiego19@gmail.com</a>
              <a href="tel:+57318836638" className="underline block">318836638</a>
            </address>
            <figure className="w-40 h-40 rounded-full overflow-hidden mt-4">
              <Image
                src="/Diego Ceron.jpg"
                alt="Diego Ceron"
                width={160}
                height={160}
                className="object-cover"
              />
            </figure>
          </section>
        </article>

        {/* Columna Derecha */}
        <article className="lg:col-span-2 space-y-12">
          {/* Mis proyectos */}
          <section id="proyectos">
            <header className="mb-4">
              <h2 className="text-2xl font-semibold text-gray-800">Mis proyectos</h2>
            </header>
            <ul role="list" className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map(({ id, title, image }) => (
                <li key={id} className="bg-gray-100 rounded-lg p-4 space-y-3">
                  <h3 className="text-gray-700">{title}</h3>
                  <figure className="h-40 relative rounded-md overflow-hidden bg-gray-200">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      className="object-cover"
                    />
                  </figure>
                </li>
              ))}
            </ul>
          </section>

          {/* Testimonios */}
          <section id="testimonios">
            <header className="mb-4">
              <h2 className="text-2xl font-semibold text-gray-800">Testimonios</h2>
            </header>
            <ul role="list" className="flex space-x-6 overflow-x-auto pb-2">
              {testimonials.map(({ id, name, image }) => (
                <li key={id} className="flex-shrink-0 text-center space-y-2">
                  <figure className="w-24 h-24 rounded-full overflow-hidden mx-auto">
                    <Image
                      src={image}
                      alt={name}
                      width={96}
                      height={96}
                      className="object-cover"
                    />
                  </figure>
                  <figcaption className="text-gray-700">{name}</figcaption>
                </li>
              ))}
            </ul>
          </section>
        </article>
      </main>
    </section>
  );
}

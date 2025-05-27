import Navbar from '@/components/Navbar';
import React from 'react';

const techIcons = [
  {
    name: "JavaScript",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "C++",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  {
    name: "Python",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  }
];

const About = () => {
  return (
    <section className="min-h-screen bg-white">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-4 py-12">
        <header>
          <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">Acerca de mi</h1>
        </header>
        
        <section className="flex flex-col lg:flex-row gap-12">
          {/* Texto descriptivo */}
          <article className="lg:w-2/3">
            <section className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Soy estudiante de quinto semestre en la universidad cooperativa de colombia con una fuerte motivación por aprender, crear y resolver problemas a través del desarrollo de soluciones tecnológicas. Me apasiona el diseño de sistemas, la programación y la mejora continua de mis habilidades técnicas y creativas. Durante mi formación, he trabajado en proyectos académicos y personales que me han permitido aplicar conocimientos en lenguajes de programación, estructuras de datos, arquitectura de software y desarrollo web.
              </p>
              <p className="mb-6">
                Me considero una persona comprometida, proactiva y siempre dispuesta a asumir nuevos retos. Mi objetivo es seguir creciendo como profesional, contribuyendo con ideas innovadoras y trabajando en equipo para generar un impacto positivo en el entorno tecnológico.
              </p>
            </section>

            {/* Tecnologías */}
            <section className="mt-12">
              <h2 className="text-xl font-semibold mb-6 text-gray-800">Tecnologías que domino:</h2>
              <ul className="flex flex-wrap gap-6" role="list">
                {techIcons.map((tech) => (
                  <li key={tech.name} className="flex flex-col items-center">
                    <img 
                      src={tech.image} 
                      alt={tech.name} 
                      className="w-14 h-14 object-contain transition-transform hover:scale-110"
                    />
                    <span className="mt-2 text-sm text-gray-600">{tech.name}</span>
                  </li>
                ))}
              </ul>
            </section>
          </article>

          {/* Imagen personal */}
          <aside className="lg:w-1/3 flex flex-col items-center">
            <figure className="sticky top-24">
              <img
                src="Diego Ceron.jpg"
                alt="Diego Ceron"
                className="w-full h-auto rounded-lg shadow-xl border-4 border-white"
              />
              <figcaption className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-gray-800">Diego Ceron</h3>
                <p className="text-gray-600 mt-2">Desarrollador de Software</p>
              </figcaption>
            </figure>
          </aside>
        </section>

        <footer className="border-t border-gray-300 pt-8 mt-12">
          <p className="text-right text-gray-800 font-medium">Diego Ceron</p>
        </footer>
      </main>
    </section>
  );
};

export default About;

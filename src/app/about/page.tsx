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
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Título centrado */}
        <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">Acerca de mi</h1>
        
        {/* Contenedor principal con texto e imagen */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Texto a la izquierda */}
          <div className="lg:w-2/3">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Soy estudiante de quinto semestre en la universidad cooperativa de colombia con una fuerte motivación por aprender, crear y resolver problemas a través del desarrollo de soluciones tecnológicas. Me apasiona el diseño de sistemas, la programación y la mejora continua de mis habilidades técnicas y creativas. Durante mi formación, he trabajado en proyectos académicos y personales que me han permitido aplicar conocimientos en lenguajes de programación, estructuras de datos, arquitectura de software y desarrollo web.
              </p>
              
              <p className="mb-6">
                Me considero una persona comprometida, proactiva y siempre dispuesta a asumir nuevos retos. Mi objetivo es seguir creciendo como profesional, contribuyendo con ideas innovadoras y trabajando en equipo para generar un impacto positivo en el entorno tecnológico.
              </p>
            </div>

            {/* Sección de tecnologías */}
            <div className="mt-12">
              <h2 className="text-xl font-semibold mb-6 text-gray-800">Tecnologías que domino:</h2>
              <div className="flex flex-wrap gap-6">
                {techIcons.map((tech) => (
                  <div key={tech.name} className="flex flex-col items-center">
                    <img 
                      src={tech.image} 
                      alt={tech.name} 
                      className="w-14 h-14 object-contain transition-transform hover:scale-110"
                    />
                    <span className="mt-2 text-sm text-gray-600">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Imagen a la derecha */}
          <div className="lg:w-1/3 flex flex-col items-center">
            <div className="sticky top-24">
              <img
                src="Diego Ceron.jpg"
                alt="Diego Ceron"
                className="w-full h-auto rounded-lg shadow-xl border-4 border-white"
              />
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-gray-800">Diego Ceron</h3>
                <p className="text-gray-600 mt-2">Desarrollador de Software</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Línea divisoria y firma */}
        <div className="border-t border-gray-300 pt-8 mt-12">
          <p className="text-right text-gray-800 font-medium">Diego Ceron</p>
        </div>
      </main>
    </div>
  );
};

export default About;
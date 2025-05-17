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
    
    <section className="bg-white">
      <Navbar></Navbar>
         
      <div className="section-container">
        <h2 className="section-title">Acerca de mi</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <div className="prose max-w-none text-portfolio-text">
              <p className="text-lg mb-4">
                Soy estudiante de quinto semestre en la Universidad Cooperativa 
                de Colombia con una fuerte motivación por aprender, crear y 
                resolver problemas a través del desarrollo de soluciones tecnológicas. 
              </p>
              <p className="text-lg mb-4">
                Me apasiona el diseño de sistemas, la programación y la mejora continua 
                de mis habilidades técnicas y creativas. Durante mi formación, he 
                trabajado en proyectos académicos y personales que me han permitido 
                aplicar conocimientos en lenguajes de programación, estructuras de datos, 
                arquitectura de software y desarrollo web.
              </p>
              <p className="text-lg mb-4">
                Me considero una persona comprometida, proactiva y siempre dispuesta 
                a asumir nuevos retos. Mi objetivo es seguir creciendo como profesional, 
                contribuyendo con ideas innovadoras y trabajando en equipo para generar 
                un impacto positivo en el entorno tecnológico.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-6">
              {techIcons.map((tech) => (
                <div key={tech.name} className="flex flex-col items-center">
                  <img src={tech.image} alt={tech.name} className="w-16 h-16" />
                  <span className="mt-2 text-sm text-portfolio-text">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-sm">
              <img
                src="/lovable-uploads/4da5cd71-82a6-4b40-a1ac-c5fe4e816743.png"
                alt="Diego Ceron"
                className="w-full h-auto rounded-lg shadow-md"
              />
              <div className="mt-4 text-center">
                <h3 className="font-bold text-xl text-portfolio-dark">Diego Ceron</h3>
                <p className="text-portfolio-text">Desarrollador de Software</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
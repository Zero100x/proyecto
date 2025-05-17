import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Navbar from '@/components/Navbar';

<Navbar></Navbar>

const projects = [
  {
    id: 1,
    title: "Sistema de Gestión de Inventarios",
    description: "Aplicación web para gestionar inventarios de pequeñas empresas con dashboard interactivo y reportes en tiempo real.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGludmVudG9yeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    technologies: ["React", "Node.js", "MongoDB"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/Zero100x"
  },
  {
    id: 2,
    title: "Aplicación de Tareas Colaborativas",
    description: "Plataforma para gestión de tareas en equipo con funcionalidades de asignación, seguimiento y notificaciones.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGFza3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/Zero100x"
  },
  {
    id: 3,
    title: "Plataforma Educativa",
    description: "Sistema de gestión de aprendizaje con cursos interactivos, evaluaciones automatizadas y seguimiento de progreso.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    technologies: ["React", "Express", "PostgreSQL"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/Zero100x"
  },
  {
    id: 4,
    title: "Portal de Noticias Locales",
    description: "Sitio web para visualización de noticias locales con categorización, búsqueda avanzada y perfiles de usuario.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV3c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    technologies: ["Next.js", "Strapi CMS", "GraphQL"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/Zero100x"
  }
];

const Projects = () => {
    <nav className="bg-white shadow-lg sticky top-0 z-50"></nav>
  return (
    
    <section id="projects" className="py-20 bg-portfolio-mint/30">
      <div className="section-container">
        <h2 className="section-title">Mis proyectos</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-portfolio-dark mb-2">{project.title}</h3>
                <p className="text-portfolio-text mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-white rounded-full text-sm text-portfolio-accent border border-portfolio-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between mt-4">
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-portfolio-accent hover:text-portfolio-dark transition-colors"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Ver Demo
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-portfolio-accent hover:text-portfolio-dark transition-colors"
                  >
                    <Github size={16} className="mr-1" />
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
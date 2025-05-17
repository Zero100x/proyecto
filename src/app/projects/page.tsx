"use client";
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Navbar from '@/components/Navbar';

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
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 py-16">
        {/* Título principal */}
        <h1 className="text-4xl font-bold text-center mb-16 text-gray-800">Mis proyectos</h1>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <article 
              key={project.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
            >
              {/* Imagen del proyecto */}
              <div className="h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Contenido de la tarjeta */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-5">{project.description}</p>
                
                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-blue-50 rounded-full text-sm text-blue-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Botones */}
                <div className="flex justify-between">
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Ver Demo
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                  >
                    <Github size={16} className="mr-2" />
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Projects;
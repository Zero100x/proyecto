"use client";

import { ExternalLink, Github } from "lucide-react";
import Navbar from "@/components/Navbar";

const projects = [
  {
    id: 1,
    title: "Sistema de Gestión de Inventarios",
    description:
      "Aplicación web para gestionar inventarios de pequeñas empresas con dashboard interactivo y reportes en tiempo real.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    technologies: ["React", "Node.js", "MongoDB"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/Zero100x",
  },
  {
    id: 2,
    title: "Aplicación de Tareas Colaborativas",
    description:
      "Plataforma para gestión de tareas en equipo con funcionalidades de asignación, seguimiento y notificaciones.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/Zero100x",
  },
  {
    id: 3,
    title: "Plataforma Educativa",
    description:
      "Sistema de gestión de aprendizaje con cursos interactivos, evaluaciones automatizadas y seguimiento de progreso.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8",
    technologies: ["React", "Express", "PostgreSQL"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/Zero100x",
  },
  {
    id: 4,
    title: "Portal de Noticias Locales",
    description:
      "Sitio web para visualización de noticias locales con categorización, búsqueda avanzada y perfiles de usuario.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c",
    technologies: ["Next.js", "Strapi CMS", "GraphQL"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/Zero100x",
  },
];

type Project = typeof projects[number];

function ProjectCard({
  title,
  description,
  image,
  technologies,
  demoUrl,
  githubUrl,
}: Project) {
  return (
    <article className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
      <figure className="h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </figure>
      <section className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <li
              key={tech}
              className="px-3 py-1 bg-blue-100 rounded-full text-sm text-blue-800 font-medium"
            >
              {tech}
            </li>
          ))}
        </ul>
        <footer className="flex justify-between">
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ExternalLink size={16} />
            Ver Demo
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
          >
            <Github size={16} />
            GitHub
          </a>
        </footer>
      </section>
    </article>
  );
}

export default function Projects() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-20">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900">Mis proyectos</h1>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Algunos de los trabajos que he desarrollado, aplicando tecnologías modernas en proyectos reales.
          </p>
        </header>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </section>
      </main>
    </section>
  );
}

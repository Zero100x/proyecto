"use client";

import { ExternalLink, Github } from "lucide-react";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Diseño de imagen de tajeta",
    description: "Dieseño de tarjeta Diseño de interfaces.",
    image: "/image1.png",
    Languages: ["TypeScript", "CSS", "JavaScript"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/Zero100x/image_1",
  },
  {
    id: 2,
    title: "inicio de pagina magical mirai ",
    description: "inicio de la pagina de magical mirai .",
    image: "/image2.png",
    Languages: ["TypeScript", "CSS", "JavaScript"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/Zero100x/proyecto_miku",
  },
  {
    id: 3,
    title: "Plataforma de notas",
    description: "plataforma basica de notas.",
    image: "/image3.png",
    Languages: ["React", "Express", "PostgreSQL"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/Zero100x/ISWElectiva110202-10",
  },
  {
    id: 4,
    title: "Mantenimiento y Especificaciones de Vehículos",
    description: "Pagina de Mantenimiento y Especificaciones de Vehículos de los 10 autos más populares en Colombia.",
    image: "/image4.png",
    Languages: ["TypeScript", "CSS", "JavaScript"],
    demoUrl: "https://taller-next-js-tailwind.vercel.app",
    githubUrl: "https://github.com/Zero100x/Taller_NextJs_Tailwind",
  },
];

type Project = typeof projects[number];

function ProjectCard({ title, description, image, Languages, demoUrl, githubUrl }: Project) {
  return (
    <article className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
      <figure className="h-64 relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
        />
      </figure>
      <section className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="flex flex-wrap gap-2 mb-6">
          {Languages.map((tech) => (
            <li key={tech} className="px-3 py-1 bg-blue-100 rounded-full text-sm text-blue-800 font-medium">
              {tech}
            </li>
          ))}
        </ul>
        <footer className="flex justify-between">
          <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <ExternalLink size={16} />
            Ver Demo
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors">
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



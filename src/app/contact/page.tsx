"use client";

import Navbar from "@/components/Navbar";
import { Mail, Github, Phone } from "lucide-react";

const Contact = () => {
  return (
    <>
      <Navbar />
      <section id="contact" className="min-h-screen bg-white py-20 px-6 sm:px-10 lg:px-24">
        <main className="bg-portfolio-mint/10 p-10 rounded-xl shadow-lg max-w-4xl mx-auto space-y-10 text-portfolio-text">
          <header className="text-center">
            <h2 className="text-4xl font-bold text-portfolio-dark mb-4">Contáctame</h2>
            <p className="text-lg max-w-2xl mx-auto">
              ¿Tienes una idea, proyecto o simplemente quieres saludar? Estoy abierto a nuevas oportunidades, colaboraciones y desafíos interesantes.
            </p>
          </header>

          <article className="space-y-6">
            <p className="text-xl font-medium">¡Hablemos!</p>
            <p>Puedes contactarme directamente por cualquiera de estos medios:</p>

            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="text-portfolio-accent" />
                <a href="mailto:cerondiego19@gmail.com" className="hover:underline">cerondiego19@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Github className="text-portfolio-accent" />
                <a href="https://github.com/Zero100x" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  github.com/Zero100x
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-portfolio-accent" />
                <a href="tel:+573183346638" className="hover:underline">+57 318 834 6638</a>
              </li>
            </ul>

            <p className="mt-6">¡Estaré feliz de leerte!</p>
          </article>
        </main>
      </section>
    </>
  );
};

export default Contact;

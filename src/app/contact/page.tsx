"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Mail, Github, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Por favor completa todos los campos");
      return;
    }
    console.log("Form data submitted: ", formData);
    alert("Gracias por contactarme. Te responderé a la brevedad.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <Navbar />
      <section id="contact" className="min-h-screen bg-white py-20 px-6 sm:px-10 lg:px-24">
        <header className="text-center mb-16">
          <h2 className="text-4xl font-bold text-portfolio-dark mb-4">Contáctame</h2>
          <p className="text-lg text-portfolio-text max-w-xl mx-auto">
            ¿Tienes una idea, proyecto o simplemente quieres saludar? Estoy abierto a nuevas oportunidades y colaboraciones.
          </p>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <article className="space-y-6 text-portfolio-text">
            <p className="text-xl font-medium">¡Hablemos!</p>
            <p>Estoy dispuesto a escuchar cualquier idea o colaboración. Puedes contactarme directamente por estos medios:</p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="text-portfolio-accent" />
                <a href="mailto:cerondiego19@gmail.com" className="hover:underline">cerondiego19@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Github className="text-portfolio-accent" />
                <a href="https://github.com/Zero100x" target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/Zero100x</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-portfolio-accent" />
                <a href="tel:+573183346638" className="hover:underline">+57 318 334 6638</a>
              </li>
            </ul>
            <p className="mt-6">¡Estaré feliz de leerte!</p>
          </article>

          <form onSubmit={handleSubmit} className="bg-portfolio-mint/10 p-8 rounded-xl shadow-lg space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                className="w-full px-4 py-2 rounded-md border border-portfolio-mint focus:border-portfolio-accent focus:ring-1 focus:ring-portfolio-accent outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                className="w-full px-4 py-2 rounded-md border border-portfolio-mint focus:border-portfolio-accent focus:ring-1 focus:ring-portfolio-accent outline-none"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="¿En qué puedo ayudarte?"
                className="w-full px-4 py-2 rounded-md border border-portfolio-mint focus:border-portfolio-accent focus:ring-1 focus:ring-portfolio-accent outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-portfolio-accent text-#000000 py-3 rounded-md hover:bg-portfolio-dark transition"
            >
              Enviar mensaje
            </button>
          </form>
        </main>
      </section>
    </>
  );
};

export default Contact;

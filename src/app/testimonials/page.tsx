"use client";

import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import Navbar from '@/components/Navbar';

type Testimonial = {
  id: number;
  name: string;
  email: string;
  role: string;
  content: string;
  avatar?: string;
};

const initialTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ana Martínez",
    email: "ana.martinez@example.com",
    role: "Directora de Proyectos",
    content: "Diego demostró excelentes habilidades técnicas y una gran capacidad de trabajo en equipo durante su colaboración en nuestro proyecto. Su dedicación y proactividad fueron fundamentales para alcanzar los objetivos en tiempo récord.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    name: "Carlos Vega",
    email: "carlos.vega@example.com",
    role: "Desarrollador Senior",
    content: "He tenido la oportunidad de mentorear a Diego y siempre me ha impresionado su capacidad de aprendizaje y su compromiso. Asimila conceptos nuevos con rapidez y los aplica de manera efectiva en sus proyectos.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    name: "Laura Jiménez",
    email: "laura.jimenez@example.com",
    role: "Compañera de Universidad",
    content: "Diego es un excelente compañero de equipo, siempre dispuesto a ayudar y aportar ideas innovadoras. Su enfoque estructurado y atención al detalle hacen que sea un placer trabajar con él en proyectos académicos.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const TestimonialsPage: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [form, setForm] = useState({ name: '', email: '', role: '', content: '' });
  const [showForm, setShowForm] = useState(false);

  // Carga inicial desde localStorage o valores iniciales
  useEffect(() => {
    const stored = localStorage.getItem('testimonials');
    if (stored) {
      setTestimonials(JSON.parse(stored));
    } else {
      setTestimonials(initialTestimonials);
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newTestimonial: Testimonial = {
      id: Date.now(),
      name: form.name,
      email: form.email,
      role: form.role,
      content: form.content,
      avatar: undefined
    };

    const updated = [newTestimonial, ...testimonials];
    setTestimonials(updated);
    localStorage.setItem('testimonials', JSON.stringify(updated));

    setForm({ name: '', email: '', role: '', content: '' });
    setShowForm(false);
  };

  return (
    <>
      <Navbar />
      <section id="testimonials" className="py-20 bg-white">
        <div className="section-container max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="section-title text-3xl font-bold">Testimonios</h2>
            <button
              onClick={() => setShowForm(prev => !prev)}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition shadow"
            >
              {showForm ? 'Ocultar Formulario' : 'Agregar Testimonio'}
            </button>
          </div>

          {showForm && (
            <form onSubmit={handleSubmit} className="mb-12 bg-portfolio-mint/20 p-6 rounded-lg transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4">Deja tu testimonio</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="p-2 border rounded w-full"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Correo"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="p-2 border rounded w-full"
                />
                <input
                  type="text"
                  name="role"
                  placeholder="Cargo"
                  value={form.role}
                  onChange={handleChange}
                  required
                  className="p-2 border rounded w-full"
                />
              </div>
              <textarea
                name="content"
                placeholder="Tu reseña"
                value={form.content}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded mt-4 h-32"
              />
              <button
  type="submit"
  className="bg-portfolio-accent text-#455bff font-bold py-2 px-4 rounded hover:bg-blue-700 mt-4"
>
  Enviar Testimonio
</button>
            </form>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-portfolio-mint/40 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4 bg-gray-200 flex items-center justify-center">
                    {t.avatar ? (
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-2xl text-gray-500">{t.name.charAt(0)}</span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-portfolio-dark">{t.name}</h3>
                    <p className="text-sm text-portfolio-text">{t.role}</p>
                  </div>
                </div>
                <blockquote className="relative">
                  <p className="text-portfolio-text before:content-[''] before:text-4xl before:text-portfolio-accent/30 before:absolute before:-top-2 before:-left-2">
                    {t.content}
                  </p>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsPage;

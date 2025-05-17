import React from 'react';

const testimonials = [
  {
    id: 1,
    name: "Ana Martínez",
    role: "Directora de Proyectos",
    content: "Diego demostró excelentes habilidades técnicas y una gran capacidad de trabajo en equipo durante su colaboración en nuestro proyecto. Su dedicación y proactividad fueron fundamentales para alcanzar los objetivos en tiempo récord.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    name: "Carlos Vega",
    role: "Desarrollador Senior",
    content: "He tenido la oportunidad de mentorear a Diego y siempre me ha impresionado su capacidad de aprendizaje y su compromiso. Asimila conceptos nuevos con rapidez y los aplica de manera efectiva en sus proyectos.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    name: "Laura Jiménez",
    role: "Compañera de Universidad",
    content: "Diego es un excelente compañero de equipo, siempre dispuesto a ayudar y aportar ideas innovadoras. Su enfoque estructurado y atención al detalle hacen que sea un placer trabajar con él en proyectos académicos.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">Testimonios</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-portfolio-mint/40 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-portfolio-dark">{testimonial.name}</h3>
                  <p className="text-sm text-portfolio-text">{testimonial.role}</p>
                </div>
              </div>
              <blockquote className="relative">
                <p className="text-portfolio-text before:content-['\u0022'] before:text-4xl before:text-portfolio-accent/30 before:absolute before:-top-2 before:-left-2">
                  {testimonial.content}
                </p>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
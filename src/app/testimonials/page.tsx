import Image from 'next/image';
import Navbar from '@/components/Navbar';

const testimonials = [
  {
    id: 1,
    name: "Ana Martínez",
    role: "Directora de Proyectos",
    content:
      "Diego demostró excelentes habilidades técnicas y una gran capacidad de trabajo en equipo durante su colaboración en nuestro proyecto. Su dedicación y proactividad fueron fundamentales para alcanzar los objetivos en tiempo récord.",
    avatar: "" // si no hay avatar, se oculta la imagen
  },
  {
    id: 2,
    name: "Carlos Vega",
    role: "Desarrollador Senior",
    content:
      "He tenido la oportunidad de mentorear a Diego y siempre me ha impresionado su capacidad de aprendizaje y su compromiso. Asimila conceptos nuevos con rapidez y los aplica de manera efectiva en sus proyectos.",
    avatar: ""
  },
  {
    id: 3,
    name: "Laura Jiménez",
    role: "Compañera de Universidad",
    content:
      "Diego es un excelente compañero de equipo, siempre dispuesto a ayudar y aportar ideas innovadoras. Su enfoque estructurado y atención al detalle hacen que sea un placer trabajar con él en proyectos académicos.",
    avatar: ""
  }
];

type Testimonial = typeof testimonials[number];

function TestimonialCard({ name, role, content, avatar }: Testimonial) {
  return (
    <article className="bg-blue-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
      <header className="flex items-center mb-6">
        {avatar && (
          <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-white shadow relative">
            <Image
              src={avatar}
              alt={name}
              fill
              className="object-cover rounded-full"
            />
          </div>
        )}
        <div>
          <h3 className="font-bold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </header>
      <p className="text-gray-600 italic">
        <q>{content}</q>
      </p>
    </article>
  );
}

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-16 bg-white min-h-screen">
        <h1 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Testimonios
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} {...t} />
          ))}
        </div>
      </main>
    </>
  );
}

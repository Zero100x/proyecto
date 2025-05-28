import Navbar from '@/components/Navbar';
import Image from 'next/image';

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
    name: "HTML",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "Python",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  }
];

export default function About() {
  return (
    <section className="min-h-screen bg-white">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">Acerca de mí</h1>

        <section className="flex flex-col lg:flex-row gap-12">
          <article className="lg:w-2/3">
            <section className="text-gray-700 space-y-6 leading-relaxed">
              <p>
              ¡Hola! Soy Diego Cerón, un apasionado estudiante de 20 años cursando mi quinto semestre en la Universidad Cooperativa de Colombia. Mi mundo gira en torno a la tecnología, los motores y los videojuegos. Cuando no estoy programando o diseñando sistemas, probablemente esté analizando las últimas innovaciones en automóviles o disfrutando de partidas competitivas en mis juegos favoritos.
              </p>
              <p>
              Me defino como un solucionador de problemas con una mentalidad creativa. Disfruto transformar ideas en soluciones tecnológicas funcionales, ya sea mediante código, diseño de interfaces o optimización de sistemas. Mi motivación es aprender constantemente y aplicar ese conocimiento para impactar positivamente en proyectos reales.
              </p>
            </section>

            <h2 className="text-xl font-semibold mt-12 mb-6 text-gray-800">Tecnologías que domino:</h2>
            <ul className="flex flex-wrap gap-6">
              {techIcons.map(({ name, image }) => (
                <li key={name} className="flex flex-col items-center">
                  <Image
                    src={image}
                    alt={name}
                    width={56}
                    height={56}
                    className="object-contain hover:scale-110 transition-transform"
                  />
                  <span className="mt-2 text-sm text-gray-600">{name}</span>
                </li>
              ))}
            </ul>
          </article>

          <aside className="lg:w-1/3 flex flex-col items-center">
            <figure className="sticky top-24">
              <Image
                src="/Diego Ceron.jpg"
                alt="Diego Ceron"
                width={400}
                height={400}
                className="rounded-lg shadow-xl border-4 border-white object-cover"
              />
              <figcaption className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-gray-800">Diego Ceron</h3>
                <p className="text-gray-600 mt-2">Desarrollador de Software</p>
              </figcaption>
            </figure>
          </aside>
        </section>

        <p className="border-t border-gray-300 pt-8 mt-12 text-right text-gray-800 font-medium">
          Diego Ceron
        </p>
      </main>
    </section>
  );
}

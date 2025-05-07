import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />        
      {/* Sección Bienvenida + Acerca de mí */}
      <section className="bg-gray-100 py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Bienvenid@</h2>
            <p className="text-gray-600">
              Hola, soy Diego Ceron, un apasionado de la tecnología y el desarrollo de software. Aquí encontrarás una recopilación de mis proyectos, habilidades y experiencias que reflejan mi crecimiento como profesional en el mundo digital.
            </p>
          </div>
          <div className="bg-white p-6 rounded-md shadow-md flex items-center gap-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Acerca de mí</h3>
              <p className="text-gray-600 mb-2">
                Soy estudiante de quinto semestre en la Universidad Cooperativa de Colombia.
              </p>
              <p className="text-gray-600">
                <strong>Contacto</strong><br />
                cerondiego19@gmail.com<br />
                318836638
              </p>
            </div>
            <img
              src="/Diego Ceron.jpg"
              alt="Diego Ceron"
              className="w-28 h-28 rounded-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Sección Proyectos */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Mis Proyectos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-gray-200 p-6 rounded-md shadow-md">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Proyecto {i}</h3>
                <div className="bg-teal-700 text-white py-12 rounded-md">
                  Imagen del proyecto
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección Testimonios */}
      <section className="bg-gray-100 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Testimonios</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-300 px-6 py-4 rounded-md">
                Nombre del Testimonio {i}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Hola, soy Diego Cerón</h1>
          <p className="text-xl mb-8">Desarrollador de software apasionado por la tecnología</p>
          <div className="space-x-4">
            <a href="#contact" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition duration-300">
              Contáctame
            </a>
            <a href="/cv.pdf" download className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition duration-300">
              Descargar CV
            </a>
          </div>
        </div>
      </section>

      {/* Otras secciones se agregarán en commits posteriores */}
    </main>
  );
}
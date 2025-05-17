import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    
    <main className="bg-white">
      <Navbar></Navbar>
    
      {/* Columna izquierda - Bienvenida y Acerca de mí */}
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row">
        <div className="w-full md:w-1/1 bg-gray-100 p-5">
          {/* Bienvenida */}
          <section className="bg-gray-200 p-6 mb-4 rounded-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-3">Bienvenid@</h2>
            <p className="text-gray-700">
              Hola, soy Diego Ceron, un apasionado de la tecnología y el desarrollo de software. Aquí encontrarás una recopilación de mis proyectos, habilidades y experiencias que reflejan mi crecimiento como profesional en el mundo digital.
            </p>
          </section>

          {/* Acerca de mí */}
          <section className="bg-gray-200 p-6 rounded-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-3">Acerca de mi</h2>
            <p className="text-gray-700 mb-4">
              Soy estudiante de quinto semestre en la univercidad cooperativa de colombia
            </p>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Contactos</h3>
            <p className="text-gray-700">
              cerondiego19@gmail.com<br />
              318836638
            </p>
            <img
              src="/Diego Ceron.jpg"
              alt="Diego Ceron"
              className="w-24 h-24 rounded-full object-cover mt-4"
            />
          </section>
        </div>

        {/* Columna derecha - Proyectos y Testimonios */}
        <div className="w-full md:w-2/3 p-6">
          {/* Proyectos */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Mis proyectos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <section key={i} className="bg-gray-200 p-4 rounded-md">
                  <h3 className="text-gray-700 mb-2">Título del Proyecto</h3>
                  <div className="bg-teal-700 text-white py-12 flex items-center justify-center rounded-md">
                    <p>Imagen proyecto</p>
                  </div>
                </section>
              ))}
            </div>
          </section>

          {/* Testimonios */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Testimonios</h2>
            <div className="flex flex-wrap gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gray-200 px-6 py-4 rounded-md">
                  <p>Nombre testimonio</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

{/* Contenido principal */}
<section className="max-w-6xl mx-auto p-6">
<div className="bg-gray-100 rounded-md p-8">
  <h1 className="text-2xl font-semibold text-gray-700 mb-4">Acerca de mi</h1>
  
  <div className="flex flex-col md:flex-row md:gap-8 items-center md:items-start">
    <div className="w-full md:w-3/4">
      <p className="text-gray-700 mb-4">
        Soy estudiante de quinto semestre en la univercidad cooperativa 
        de colombia con una fuerte motivación por aprender, crear y 
        resolver problemas a través del desarrollo de soluciones 
        tecnológicas. Me apasiona el diseño de sistemas, la programación 
        y la mejora continua de mis habilidades técnicas y creativas.
      </p>
      
      <p className="text-gray-700 mb-4">
        Durante mi formación, he trabajado en proyectos académicos y 
        personales que me han permitido aplicar conocimientos en 
        lenguajes de programación, estructuras de datos, arquitectura de 
        software y desarrollo web.
      </p>
      
      <p className="text-gray-700 mb-6">
        Me considero una persona comprometida, proactiva y siempre 
        dispuesta a asumir nuevos retos. Mi objetivo es seguir creciendo 
        como profesional, contribuyendo con ideas innovadoras y 
        trabajando en equipo para generar un impacto positivo en el 
        entorno tecnológico.
      </p>
      
      {/* Iconos de tecnologías */}
      <div className="flex items-center space-x-6 mt-4">
        <div className="w-16 h-16">
          <img src="/javascript-logo.png" alt="JavaScript" className="w-full h-full object-contain" />
        </div>
        <div className="w-16 h-16">
          <img src="/react-logo.png" alt="React" className="w-full h-full object-contain" />
        </div>
        <div className="w-16 h-16">
          <img src="/c-sharp-logo.png" alt="C#" className="w-full h-full object-contain" />
        </div>
        <div className="w-16 h-16">
          <img src="/python-logo.png" alt="Python" className="w-full h-full object-contain" />
        </div>
      </div>
    </div>
    
    <div className="md:w-1/4 flex flex-col items-center mt-6 md:mt-0">
      <div className="w-48 h-48 rounded-full overflow-hidden mb-3">
        <img 
          src="/Diego Ceron.jpg" 
          alt="Diego Ceron" 
          className="w-full h-full object-cover"
        />
      </div>
      <h2 className="text-xl font-medium text-gray-700">Diego Ceron</h2>
      
    </div>
  </div>
</div>
</section>




import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function Hobbies() {
  return (
    <>
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 py-12 space-y-12">
        <section aria-labelledby="hobbies-heading">
          <h1
            id="hobbies-heading"
            className="text-3xl font-bold text-gray-800 mb-6"
          >
            Mis Hobbies / Pasatiempos
          </h1>

          <ul
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700"
            role="list"
          >
            {/* Videojuegos */}
            <li className="bg-gray-100 rounded-xl p-6 flex flex-col items-center space-y-3 shadow-md">
              <figure className="w-24 h-24 overflow-hidden rounded-full">
                <Image
                  src="/juegos.png"
                  alt="Videojuegos"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </figure>
              <figcaption className="text-center space-y-2">
                <strong>Videojuegos</strong>
                <p className="text-sm">
                  Como entusiasta de los esports y la cultura gamer, dediqué 396
                  horas el año anterior a explorar mundos virtuales.
                  <br />
                  <br />
                  🏆 <strong>Logros Clave</strong>
                  <br />
                  • 79 juegos jugados (54 nuevos)
                  <br />
                  • 396 logros desbloqueados (70 raros)
                  <br />
                  • Racha épica: 36 días consecutivos jugando
                  <br />
                  <br />
                  🎮 <strong>Top 3 juegos</strong>
                  <br />
                  • Left 4 Dead 2 (32%, 365 sesiones)
                  <br />
                  • GTA V (20%, 204 sesiones)
                  <br />
                  • ARK: Survival Evolved (13%, 122 sesiones)
                  <br />
                  <br />
                  🚗 <strong>Conexión con mis intereses</strong>
                  <br />
                  • Simuladores de conducción: Assetto Corsa (525 sesiones)
                  <br />
                  • Juegos rítmicos: Hatsune Miku Project DIVA
                  <br />
                  • Estrategia: 72% teclado/ratón – 28% mando
                </p>
              </figcaption>
            </li>

            {/* Música */}
            <li className="bg-gray-100 rounded-xl p-6 flex flex-col items-center space-y-3 shadow-md">
              <figure className="w-24 h-24 overflow-hidden rounded-full">
                <Image
                  src="/music.png"
                  alt="Música"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </figure>
              <figcaption className="text-center space-y-2">
                <strong>Música</strong>
                <p className="text-sm">
                  Mi playlist refleja mi pasión por la innovación y la cultura
                  japonesa, mezclando Vocaloid, J-pop y géneros experimentales.
                  <br />
                  <br />
                  🎤 <strong>Artistas favoritos</strong>
                  <br />
                  • DECO*27: &quot;Ghost Rule&quot;, &quot;Girl Anatomy&quot;
                  <br />
                  • MARETU: &quot;Mind Revolution Girl&quot;, &quot;Coin Locker Baby&quot;
                  <br />
                  • Utsu-P: &quot;OGRE&quot;, &quot;Rolling Girl&quot;
                  <br />
                  • Kanaria: &quot;KING&quot;, &quot;Identity&quot;
                  <br />
                  • Kairiki Bear: &quot;Darling Dance&quot;, &quot;No No No&quot;
                  <br />
                  <br />
                  🎧 <strong>Estilos destacados</strong>
                  <br />
                  • Vocaloid con Hatsune Miku, Kagamine Rin/Len y Megurine Luka
                  <br />
                  • Electro-Rock y experimental
                  <br />
                  • J-pop innovador y rítmico
                </p>
              </figcaption>
            </li>

            {/* Anime */}
            <li className="bg-gray-100 rounded-xl p-6 flex flex-col items-center space-y-3 shadow-md">
              <figure className="w-24 h-24 overflow-hidden rounded-full">
                <Image
                  src="/anime.png"
                  alt="Anime"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </figure>
              <figcaption className="text-center space-y-2">
                <strong>Anime</strong>
                <p className="text-sm">
                  El anime ha sido fuente de inspiración y valores como la
                  estrategia, determinación y crecimiento personal.
                  <br />
                  <br />
                  <em>Initial D</em> es mi favorito por su mezcla de velocidad,
                  música e intensidad. Me enseña a avanzar sin frenar, incluso
                  en las curvas de la vida.
                  <br />
                  <br />
                  <em>Death Note</em> me recuerda el poder de la mente y la
                  importancia de cada decisión. El anime para mí es más que
                  entretenimiento: es una filosofía.
                </p>
              </figcaption>
            </li>

            {/* Mecánica Automotriz */}
            <li className="bg-gray-100 rounded-xl p-6 flex flex-col items-center space-y-3 shadow-md">
              <figure className="w-24 h-24 overflow-hidden rounded-full">
                <Image
                  src="/mecanica.png"
                  alt="Mecánica Automotriz"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </figure>
              <figcaption className="text-center space-y-2">
                <strong>Mecánica Automotriz</strong>
                <p className="text-sm">
                  Ayudo a mi padre en su taller, donde aprendí desde joven sobre
                  motores, herramientas y el valor del trabajo técnico.
                  <br />
                  <br />
                  Con mi Renault Symbol he realizado mantenimientos básicos,
                  como cambio de aceite, bujías, frenos y revisión eléctrica.
                  Esto despertó mi interés por la ingeniería y la solución de
                  problemas.
                  <br />
                  <br />
                  Esta pasión me enseñó a pensar como desarrollador: analizar,
                  diagnosticar y aplicar soluciones eficientes y seguras.
                </p>
              </figcaption>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}

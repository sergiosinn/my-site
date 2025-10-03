import React from "react";
import { ArrowRightCircle, Camera, Heart, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const persona = {
  nombre: "Sergio Alonso González Cervantes",
  frase: "Simplificando el mundo un código a la vez.",
  foto: "/images/retrato.jpeg", 
};

const viaResults = {
  fortalezasPrincipales: [
    "Honestidad",
    "Curiosidad",
    "Perseverancia",
    "Amor por el aprendizaje",
    "Juicio crítico",
  ],
  analisis: 
  `Para mí no hay nada más importante que la verdad, la curiosidad es otro 
  aspecto que creo es fundamental en cualquier persona para poder crecer 
  y encontrar lo que nos apasiona. 
  En mi día a día me enfrento a muchos retos que sin duda requieren del amor por el aprendizaje 
  ya que la tecnología avanza muy rápido y hay que estar siempre actualizado.`,
};

const reflexionesliderazgo = [
  {
    pregunta: "¿Cuál es tu estilo de liderazgo?",
    respuesta:
      "Mi estilo es colaborativo y orientado a ejemplos: lidero mostrando trabajo, escuchando y dando autonomía.",
  },
  {
    pregunta: "¿Cómo enfrentas conflictos?",
    respuesta:
      "Busco entender intereses, facilitar diálogo y construir soluciones que sumen a largo plazo.",
  },
];

const mision = {
  enunciado:
    "Mi misión es crear experiencias digitales que empoderen a las personas para aprender y llevar a la práctica nuevas habilidades.",
  justificacion:
    "Creo que la tecnología debe servir para aumentar la capacidad humana; por eso diseño productos que priorizan claridad, accesibilidad y crecimiento personal.",
};

const galeria = [
  { tipo: "frase", contenido: "Actúa con intención, no por inercia." },
  { tipo: "imagen", src: "/images/valor-1.jpeg", alt: "Valor 1" },
  { tipo: "imagen", src: "/images/valor-2.jpeg", alt: "Valor 2" },
  { tipo: "frase", contenido: "La curiosidad vence al miedo." },
];

export default function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <header className="max-w-5xl mx-auto p-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold">{persona.nombre}</h1>
          <p className="text-sm opacity-80">{persona.frase}</p>
        </div>
        <nav className="flex gap-3 items-center">
          <a href="#inicio" className="text-sm hover:underline">Inicio</a>
          <a href="#tests" className="text-sm hover:underline">Tests</a>
          <a href="#liderazgo" className="text-sm hover:underline">Liderazgo</a>
          <a href="#mision" className="text-sm hover:underline">Misión</a>
          <a href="#galeria" className="text-sm hover:underline">Galería</a>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto p-6 space-y-12">
        {/* PORTADA */}
        <section id="inicio" className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.img
              src={persona.foto}
              alt="Retrato"
              className="w-72 h-72 object-cover rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-3">Hola — soy {persona.nombre}.</h2>
            <p className="mb-4 text-lg opacity-90">{persona.frase}</p>
            <p className="mb-6">Aquí encontrarás mis resultados de tests de fortalezas, mis reflexiones sobre liderazgo y mi propósito de vida.</p>
            <a href="#tests" className="inline-flex items-center gap-2 text-sm font-medium">
              Ver mis resultados <ArrowRightCircle size={18} />
            </a>
          </div>
        </section>

        {/* SECCIÓN TESTS (VIA/WAVE) */}
        <section id="tests" className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Resultados del test VIA/WAVE</h3>
          <div className="md:flex gap-6">
            <div className="flex-1">
              <h4 className="font-medium mb-2">Fortalezas principales</h4>
              <ul className="grid grid-cols-2 gap-2">
                {viaResults.fortalezasPrincipales.map((f) => (
                  <li key={f} className="p-3 border rounded-lg flex items-center gap-3">
                    <Heart size={16} /> <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1">
              <h4 className="font-medium mb-2">Análisis</h4>
              <p className="text-sm opacity-90">{viaResults.analisis}</p>
            </div>
          </div>
        </section>

        {/* REFLEXIONES SOBRE LIDERAZGO */}
        <section id="liderazgo" className="p-6 rounded-2xl bg-gradient-to-r from-slate-50 to-white shadow-sm">
          <h3 className="text-2xl font-semibold mb-4">Reflexiones sobre mi visión y estilo de liderazgo</h3>
          <div className="space-y-4">
            {reflexionesliderazgo.map((r, i) => (
              <article key={i} className="p-4 border rounded-lg">
                <h5 className="font-medium">{r.pregunta}</h5>
                <p className="text-sm opacity-90">{r.respuesta}</p>
              </article>
            ))}
          </div>
        </section>

        {/* MISIÓN / PROPÓSITO */}
        <section id="mision" className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Misión / Propósito de vida</h3>
          <p className="mb-3 font-medium">{mision.enunciado}</p>
          <p className="text-sm opacity-90">{mision.justificacion}</p>
        </section>

        {/* GALERÍA */}
        <section id="galeria" className="p-6 rounded-2xl bg-gradient-to-t from-slate-50 to-white shadow-sm">
          <h3 className="text-2xl font-semibold mb-4">Galería de valores</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {galeria.map((item, i) => (
              <figure key={i} className="rounded-lg overflow-hidden border p-4 flex flex-col items-center justify-center min-h-[140px]">
                {item.tipo === "frase" ? (
                  <blockquote className="text-center font-semibold">“{item.contenido}”</blockquote>
                ) : (
                  <img src={item.src} alt={item.alt} className="w-full h-36 object-cover rounded-md" />
                )}
              </figure>
            ))}
          </div>
        </section>

        {/* PIE DE PÁGINA + CONTACTO */}
        <footer className="text-sm opacity-80 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Camera size={18} /> <span>© {new Date().getFullYear()} {persona.nombre}</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="sergio_al11@outlook.com" className="hover:underline">Contacto</a>
            <a href="#" className="hover:underline">CV</a>
          </div>
        </footer>
      </main>
    </div>
  );
}


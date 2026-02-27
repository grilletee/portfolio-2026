import React from 'react';
import { 
  Github, Mail, Layout, ShieldCheck, Zap, Server, Terminal, 
  Cpu, Coffee, BookOpen, Layers, QrCode, ExternalLink, Linkedin
} from 'lucide-react';

function App() {
  // Array de tecnologías con los nombres exactos para cargar los logos reales
  const technologies = [
    { name: "Spring Boot", icon: "springboot", color: "6DB33F", sub: "Backend & Auth" },
    { name: "Angular", icon: "angular", color: "DD0031", sub: "Signals & RxJS" },
    { name: "React", icon: "react", color: "61DAFB", sub: "UI & Componentes" },
    { name: "TypeScript", icon: "typescript", color: "3178C6", sub: "Tipado Estricto" },
    { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4", sub: "Diseño Responsive" },
    { name: "Python", icon: "python", color: "3776AB", sub: "Scripting & Tools" },
    { name: "Arduino", icon: "arduino", color: "00979D", sub: "C++ & Hardware IoT" },
    { name: "Git", icon: "git", color: "F05032", sub: "Control de Versiones" }
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* Navbar */}
      <div className="max-w-6xl mx-auto px-6 pt-8 flex justify-between items-center">
        <span className="text-sm font-mono text-blue-500 tracking-tighter">&lt;grillete.dev /&gt;</span>
        <div className="h-px flex-1 bg-gradient-to-r from-blue-500/50 to-transparent ml-4 opacity-20"></div>
      </div>

      {/* Hero Section */}
      <header className="py-20 px-6 max-w-6xl mx-auto">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none">
            HOLA, SOY <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
              GUILLERMO.
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-400 max-w-2xl leading-relaxed font-light">
            Desarrollador Full Stack en formación continua. Me gusta conectar el software con el mundo real, 
            desde un <span className="text-white font-medium">backend seguro en Java</span> hasta 
            sensores <span className="text-white font-medium">IoT con Arduino</span>.
          </p>
        </div>
      </header>

      {/* About & Interests */}
      <section className="py-12 bg-slate-900/50 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <Coffee className="text-blue-500" /> Más allá del Código
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all">
              <BookOpen className="text-cyan-400 mb-4" size={32} />
              <h3 className="text-white font-bold mb-2">Aprendizaje Activo</h3>
              <p className="text-sm text-slate-400">
                No me conformo con lo básico. Si en clase damos Angular, yo investigo <strong>Signals</strong>. 
                Si damos Java, implemento <strong>JWT</strong>. Me motiva entender el "por qué" de las cosas.
              </p>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all">
              <Cpu className="text-green-400 mb-4" size={32} />
              <h3 className="text-white font-bold mb-2">Cultura Maker & IoT</h3>
              <p className="text-sm text-slate-400">
                Me fascina cuando el código toca lo físico. Participar en el proyecto <strong>Green Campus</strong> me ha enseñado a trabajar con limitaciones de hardware y datos reales.
              </p>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all">
              <Layers className="text-purple-400 mb-4" size={32} />
              <h3 className="text-white font-bold mb-2">Automatización</h3>
              <p className="text-sm text-slate-400">
                Me obsesiona la eficiencia. Creo mis propias herramientas en Python (scripts de organización, generadores) para optimizar tareas repetitivas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack - SIMETRÍA PERFECTA Y LOGOS REALES */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-xl font-bold text-slate-500 mb-8 uppercase tracking-widest text-center md:text-left">Tecnologías</h2>
        
        {/* Usamos grid-cols-2 en móvil y md:grid-cols-4 en PC para tener 2 filas de 4 exactas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, i) => (
            <div key={i} className="flex flex-col items-center p-6 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-all group hover:-translate-y-1 shadow-lg">
              {/* Cargamos el logo real oficial */}
              <img 
                src={`https://cdn.simpleicons.org/${tech.icon}/${tech.color}`} 
                alt={`${tech.name} logo`} 
                className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform drop-shadow-md"
              />
              <span className="text-sm font-bold text-white text-center">{tech.name}</span>
              <span className="text-[10px] text-slate-500 uppercase text-center mt-1">{tech.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
            <Layout className="text-blue-500" /> Proyectos Destacados
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* CRM Project */}
            <a href="https://github.com/Yangsr-png/Proyecto-CRM" target="_blank" rel="noopener noreferrer" className="group flex flex-col p-6 bg-slate-800/50 border border-white/10 rounded-3xl hover:border-blue-500/50 transition-all shadow-xl hover:shadow-blue-500/10 cursor-pointer">
              <div className="mb-6 flex justify-between items-start">
                <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400">
                  <ShieldCheck size={24} />
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-blue-400 bg-blue-500/10 px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  Ver Código <ExternalLink size={12} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">CRM Enterprise Full Stack</h3>
              <p className="text-slate-400 text-sm mb-6 flex-1">
                Sistema completo de gestión. Implementé una arquitectura segura con <strong>Spring Security y JWT</strong>. 
                El frontend usa <strong>Angular Signals</strong> para un rendimiento reactivo superior.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="tag">Java</span>
                <span className="tag">Angular</span>
                <span className="tag">JWT</span>
              </div>
            </a>

            {/* Green Campus Project */}
            <a href="https://github.com/GreenCampusNebrija" target="_blank" rel="noopener noreferrer" className="group flex flex-col p-6 bg-slate-800/50 border border-white/10 rounded-3xl hover:border-green-500/50 transition-all shadow-xl hover:shadow-green-500/10 cursor-pointer">
              <div className="mb-6 flex justify-between items-start">
                <div className="p-3 bg-green-500/20 rounded-xl text-green-400">
                  <Cpu size={24} />
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-green-400 bg-green-500/10 px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  Ver Código <ExternalLink size={12} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Green Campus IoT</h3>
              <p className="text-slate-400 text-sm mb-6 flex-1">
                Seleccionado para el desarrollo de la red de sensores de la universidad. 
                Programación de hardware con <strong>Arduino y C++</strong> para monitorización ambiental en tiempo real.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="tag">C++</span>
                <span className="tag">Arduino</span>
                <span className="tag">IoT</span>
              </div>
            </a>

            {/* File Organizer */}
            <a href="https://github.com/grilletee/python-automation-tools" target="_blank" rel="noopener noreferrer" className="group flex flex-col p-6 bg-slate-800/50 border border-white/10 rounded-3xl hover:border-yellow-500/50 transition-all shadow-xl hover:shadow-yellow-500/10 cursor-pointer">
              <div className="mb-6 flex justify-between items-start">
                <div className="p-3 bg-yellow-500/20 rounded-xl text-yellow-400">
                  <Terminal size={24} />
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-yellow-400 bg-yellow-500/10 px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  Ver Repo <ExternalLink size={12} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Auto File Organizer</h3>
              <p className="text-slate-400 text-sm mb-6 flex-1">
                Script de automatización en <strong>Python</strong> para gestión inteligente de archivos. 
                Detecta extensiones, clasifica ficheros y limpia directorios de forma autónoma.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="tag">Python</span>
                <span className="tag">OS</span>
                <span className="tag">Tkinter</span>
              </div>
            </a>

            {/* QR Generator */}
            <a href="https://github.com/grilletee/python-automation-tools" target="_blank" rel="noopener noreferrer" className="group flex flex-col p-6 bg-slate-800/50 border border-white/10 rounded-3xl hover:border-purple-500/50 transition-all shadow-xl hover:shadow-purple-500/10 cursor-pointer">
              <div className="mb-6 flex justify-between items-start">
                <div className="p-3 bg-purple-500/20 rounded-xl text-purple-400">
                  <QrCode size={24} />
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-purple-400 bg-purple-500/10 px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  Ver Repo <ExternalLink size={12} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Python QR Generator</h3>
              <p className="text-slate-400 text-sm mb-6 flex-1">
                Herramienta CLI para generar códigos QR personalizados instantáneos. 
                Integra librerías gráficas para exportación en alta calidad y personalización de datos.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="tag">Python</span>
                <span className="tag">CLI</span>
                <span className="tag">Pillow</span>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-slate-800 bg-[#0b1222]">
        <h2 className="text-2xl font-bold text-white mb-8">¿Conectamos?</h2>
        <div className="flex justify-center gap-6">
          <a href="https://github.com/grilletee" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-full hover:bg-white/10 hover:text-white text-slate-400 transition-all">
            <Github size={24} />
          </a>
          <a href="mailto:grillete07@gmail.com" className="p-4 bg-white/5 rounded-full hover:bg-white/10 hover:text-white text-slate-400 transition-all">
            <Mail size={24} />
          </a>
          <a href="https://www.linkedin.com/in/guillermo-sanchez-gutierrez" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-full hover:bg-white/10 hover:text-white text-slate-400 transition-all">
            <Linkedin size={24} />
          </a>
        </div>
        <p className="mt-8 text-slate-600 text-xs">
          © 2026 Guillermo Sánchez | Construido con React & Tailwind
        </p>
      </footer>
      
      <style>{`
        .tag {
          padding: 4px 10px;
          background-color: rgba(30, 41, 59, 0.5);
          color: #94a3b8;
          font-size: 0.75rem;
          border-radius: 6px;
          border: 1px solid rgba(255,255,255,0.1);
        }
      `}</style>
    </div>
  );
}

export default App;
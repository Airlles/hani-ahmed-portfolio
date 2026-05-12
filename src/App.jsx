// import AnimatedBackground from "./components/effects/AnimatedBackground.jsx"
// import Navbar from "./components/layout/Navbar.jsx"
// import Projects from "./components/sections/Projects.jsx"
// import Skills from "./components/sections/Skills.jsx"
// import Contact from "./components/sections/Contact.jsx"
// import Footer from "./components/layout/Footer.jsx"
// import TypingLine from "./components/ui/TypingLine.jsx"
// import HeroStats from "./components/ui/HeroStats.jsx"

// function App() {
//   return (
//     <main className="relative min-h-screen overflow-hidden text-white">
//       <AnimatedBackground />
//       <Navbar />

//       <section id="home" className="flex min-h-screen items-center justify-center px-6">
//         <div className="max-w-5xl text-center">
//           <p className="mb-5 text-sm uppercase tracking-[0.55em] text-cyan-300">
//             RTL • EDA Automation • ASIC/Physical Design • AI for Silicon Debug
//           </p>

//           <h1 className="text-6xl font-bold tracking-tight md:text-8xl">
//             Hani Ahmed
//           </h1>

//           <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
//             Building hardware focused tools for RTL design, EDA automation,
//             AI assisted silicon debug, physical design, and computer architecture.
//           </p>

//           <TypingLine />
//           <HeroStats />


//           <div className="mt-10 flex justify-center">
//             <a
//               href="#projects"
//               className="rounded-full border border-cyan-300/40 bg-cyan-300 px-8 py-4 font-semibold text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.35)] transition hover:-translate-y-1 hover:bg-cyan-200"
//             >
//               Enter Portfolio
//             </a>
//           </div>
//         </div>
//       </section>

//       <Projects />
//       <Skills />
//       <Contact />
//       <Footer />
//     </main>
//   )
// }

// export default App

import AnimatedBackground from "./components/effects/AnimatedBackground.jsx"
import Navbar from "./components/layout/Navbar.jsx"
import Projects from "./components/sections/Projects.jsx"
import Skills from "./components/sections/Skills.jsx"
import Contact from "./components/sections/Contact.jsx"
import Footer from "./components/layout/Footer.jsx"
import TypingLine from "./components/ui/TypingLine.jsx"
import HeroStats from "./components/ui/HeroStats.jsx"

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <AnimatedBackground />
      <Navbar />

      <section
        id="home"
        className="flex min-h-screen items-center justify-center px-4 pt-28 sm:px-6"
      >
        <div className="max-w-5xl text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.28em] text-cyan-300 sm:text-sm sm:tracking-[0.55em]">
            RTL • EDA Automation • ASIC/Physical Design • AI for Silicon Debug
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-8xl">
            Hani Ahmed
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg md:text-xl">
            Building hardware focused tools for RTL design, EDA automation,
            AI assisted silicon debug, physical design, and computer architecture.
          </p>

          <TypingLine />
          <HeroStats />

          <div className="mt-10 flex justify-center">
            <a
              href="#projects"
              className="rounded-full border border-cyan-300/40 bg-cyan-300 px-7 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.35)] transition hover:-translate-y-1 hover:bg-cyan-200 sm:px-8 sm:py-4 sm:text-base"
            >
              Enter Portfolio
            </a>
          </div>
        </div>
      </section>

      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
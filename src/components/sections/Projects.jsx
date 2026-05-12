// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { Cpu, Layers, TerminalSquare, Zap } from "lucide-react"
// import { projects } from "../../data/projects.js"
// import ProjectCard from "../ui/ProjectCard.jsx"
// import ProjectModal from "../ui/ProjectModal.jsx"

// function Projects() {
//   const [activeFilter, setActiveFilter] = useState("All")
//   const [selectedProject, setSelectedProject] = useState(null)

//   const filters = [
//     "All",
//     "RTL",
//     "EDA Automation",
//     "AI/ML",
//     "ASIC Debug",
//     "Physical Design",
//     "High-Speed Interface Technology (SerDes)",
//     "Computer Architecture",
//   ]

//   const filteredProjects =
//     activeFilter === "All"
//       ? projects
//       : projects.filter((project) => project.tags?.includes(activeFilter))

//   const stats = [
//     {
//       label: "Primary Focus",
//       value: "EDA + RTL",
//       icon: TerminalSquare,
//     },
//     {
//       label: "Visible Projects",
//       value: String(filteredProjects.length),
//       icon: Layers,
//     },
//     {
//       label: "Core Domain",
//       value: "ASIC Debug",
//       icon: Cpu,
//     },
//     {
//       label: "AI Layer",
//       value: "ML + RAG",
//       icon: Zap,
//     },
//   ]

//   return (
//     <section id="projects" className="relative px-6 py-28">
//       <div className="mx-auto max-w-7xl">
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.7 }}
//           className="mb-12 overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-slate-950/75 shadow-2xl shadow-cyan-950/30 backdrop-blur"
//         >
//           <div className="border-b border-cyan-300/10 bg-slate-950/80 px-6 py-4">
//             <div className="flex items-center gap-2">
//               <span className="h-3 w-3 rounded-full bg-red-400" />
//               <span className="h-3 w-3 rounded-full bg-yellow-300" />
//               <span className="h-3 w-3 rounded-full bg-green-400" />

//               <p className="ml-4 font-mono text-xs uppercase tracking-[0.35em] text-slate-400">
//                 hani.project_console
//               </p>
//             </div>
//           </div>

//           <div className="p-7 md:p-10">
//             <p className="text-sm uppercase tracking-[0.45em] text-cyan-300">
//               Project Console
//             </p>

//             <h2 className="mt-4 text-4xl font-bold text-white md:text-6xl">
//               Selected Hardware Projects
//             </h2>

//             <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
//               A focused portfolio of RTL, EDA automation, ASIC debug, physical design,
//               high speed interface, machine learning, and computer architecture projects.
//             </p>

//             <div className="mt-8 grid gap-4 md:grid-cols-4">
//               {stats.map((item) => {
//                 const Icon = item.icon

//                 return (
//                   <div
//                     key={item.label}
//                     className="rounded-2xl border border-slate-700/70 bg-black/30 p-4"
//                   >
//                     <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
//                       <Icon size={20} />
//                     </div>

//                     <p className="text-sm text-slate-400">{item.label}</p>
//                     <p className="mt-1 font-mono text-lg font-semibold text-white">
//                       {item.value}
//                     </p>
//                   </div>
//                 )
//               })}
//             </div>
//           </div>
//         </motion.div>

//         <div className="mb-8 flex flex-wrap gap-3">
//           {filters.map((filter) => {
//             const isActive = activeFilter === filter

//             return (
//               <button
//                 key={filter}
//                 onClick={() => setActiveFilter(filter)}
//                 className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
//                   isActive
//                     ? "border-cyan-200 bg-cyan-300 text-slate-950 shadow-[0_0_22px_rgba(34,211,238,0.35)]"
//                     : "border-cyan-300/20 bg-cyan-300/10 text-cyan-100 hover:border-cyan-200/60 hover:bg-cyan-300/20"
//                 }`}
//               >
//                 {filter}
//               </button>
//             )
//           })}
//         </div>

//         <AnimatePresence mode="popLayout">
//           <motion.div layout className="grid gap-6 lg:grid-cols-2">
//             {filteredProjects.map((project, index) => (
//               <motion.div
//                 layout
//                 key={project.title}
//                 initial={{ opacity: 0, scale: 0.96, y: 20 }}
//                 animate={{ opacity: 1, scale: 1, y: 0 }}
//                 exit={{ opacity: 0, scale: 0.96, y: -20 }}
//                 transition={{ duration: 0.35, delay: index * 0.04 }}
//               >
//                 <ProjectCard
//                   project={project}
//                   onClick={() => setSelectedProject(project)}
//                 />
//               </motion.div>
//             ))}
//           </motion.div>
//         </AnimatePresence>

//         <ProjectModal
//           project={selectedProject}
//           onClose={() => setSelectedProject(null)}
//         />
//       </div>
//     </section>
//   )
// }

// export default Projects

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Cpu, Layers, TerminalSquare, Zap } from "lucide-react"
import { projects } from "../../data/projects.js"
import ProjectCard from "../ui/ProjectCard.jsx"
import ProjectModal from "../ui/ProjectModal.jsx"

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [selectedProject, setSelectedProject] = useState(null)

  const filters = [
    "All",
    "RTL",
    "EDA Automation",
    "AI/ML",
    "ASIC Debug",
    "Physical Design",
    "SerDes",
    "Computer Architecture",
  ]

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.tags?.includes(activeFilter))

  const stats = [
    {
      label: "Primary Focus",
      value: "EDA + RTL",
      icon: TerminalSquare,
    },
    {
      label: "Visible Projects",
      value: String(filteredProjects.length),
      icon: Layers,
    },
    {
      label: "Core Domain",
      value: "ASIC Debug",
      icon: Cpu,
    },
    {
      label: "AI Layer",
      value: "ML + RAG",
      icon: Zap,
    },
  ]

  return (
    <section id="projects" className="relative px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-12 overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-slate-950/75 shadow-2xl shadow-cyan-950/30 backdrop-blur"
        >
          <div className="border-b border-cyan-300/10 bg-slate-950/80 px-5 py-4 sm:px-6">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-300" />
              <span className="h-3 w-3 rounded-full bg-green-400" />

              <p className="ml-3 font-mono text-[10px] uppercase tracking-[0.25em] text-slate-400 sm:ml-4 sm:text-xs sm:tracking-[0.35em]">
                hani.project_console
              </p>
            </div>
          </div>

          <div className="p-5 sm:p-7 md:p-10">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300 sm:text-sm sm:tracking-[0.45em]">
              Project Console
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-6xl">
              Selected Hardware Projects
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              A focused portfolio of RTL, EDA automation, ASIC debug, physical design,
              high speed interface, machine learning, and computer architecture projects.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              {stats.map((item) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-slate-700/70 bg-black/30 p-4"
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                      <Icon size={20} />
                    </div>

                    <p className="text-xs text-slate-400 sm:text-sm">{item.label}</p>
                    <p className="mt-1 font-mono text-sm font-semibold text-white sm:text-lg">
                      {item.value}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </motion.div>

        <div className="mb-8 flex gap-3 overflow-x-auto pb-2 sm:flex-wrap sm:overflow-visible">
          {filters.map((filter) => {
            const isActive = activeFilter === filter

            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "border-cyan-200 bg-cyan-300 text-slate-950 shadow-[0_0_22px_rgba(34,211,238,0.35)]"
                    : "border-cyan-300/20 bg-cyan-300/10 text-cyan-100 hover:border-cyan-200/60 hover:bg-cyan-300/20"
                }`}
              >
                {filter}
              </button>
            )
          })}
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div layout className="grid gap-6 lg:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -20 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
              >
                <ProjectCard
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  )
}

export default Projects
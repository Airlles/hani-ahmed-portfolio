// import { motion } from "framer-motion"
// import { Braces, Cpu, Database, Layers, MonitorCog, Terminal } from "lucide-react"

// const skillGroups = [
//   {
//     title: "RTL & Digital Design",
//     icon: Cpu,
//     skills: ["Verilog", "SystemVerilog", "VHDL", "RTL Design", "FSMs", "Pipelining", "RISC-V"],
//   },
//   {
//     title: "EDA & ASIC Flow",
//     icon: Layers,
//     skills: ["Synthesis", "Timing Analysis", "Netlists", "DRC", "LVS", "Physical Design", "Sky130"],
//   },
//   {
//   title: "AI/ML & Python Automation",
//   icon: Braces,
//   skills: ["Python", "PyTorch", "NLTK", "Intent Classification", "RAG", "MCP", "Parsing", "Regex", "NumPy"],
//   },
//   {
//     title: "Debug & Validation",
//     icon: MonitorCog,
//     skills: ["Waveform Debug", "EDA Logs", "Assertions", "Testbenches", "Hardware Debug", "Root Cause Analysis"],
//   },
//   {
//     title: "Low Level Systems",
//     icon: Terminal,
//     skills: ["C++", "CPU Emulation", "Instruction Decode", "Linux", "Git", "Shell"],
//   },
//   {
//     title: "Data & Reporting",
//     icon: Database,
//     skills: ["Technical Reports", "Data Analysis", "Visualization", "Documentation", "Stakeholder Updates"],
//   },
// ]

// function Skills() {
//   return (
//     <section id="skills" className="relative px-6 py-28">
//       <div className="mx-auto max-w-7xl">
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.7 }}
//           className="mb-12"
//         >
//           <p className="text-sm uppercase tracking-[0.45em] text-cyan-300">
//             Skills Matrix
//           </p>

//           <h2 className="mt-4 text-4xl font-bold text-white md:text-6xl">
//             Technical Stack
//           </h2>

//           <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
//             A focused mix of hardware design, EDA automation, silicon debug,
//             physical design fundamentals, and low level software tooling.
//           </p>
//         </motion.div>

//         <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
//           {skillGroups.map((group, index) => {
//             const Icon = group.icon

//             return (
//               <motion.article
//                 key={group.title}
//                 initial={{ opacity: 0, y: 28 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.2 }}
//                 transition={{ duration: 0.5, delay: index * 0.06 }}
//                 className="rounded-[2rem] border border-slate-700/70 bg-slate-950/70 p-6 shadow-2xl shadow-black/30 backdrop-blur transition hover:-translate-y-2 hover:border-cyan-300/60 hover:shadow-cyan-500/20"
//               >
//                 <div className="mb-5 flex items-center gap-4">
//                   <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">
//                     <Icon size={24} />
//                   </div>

//                   <h3 className="text-xl font-bold text-white">
//                     {group.title}
//                   </h3>
//                 </div>

//                 <div className="flex flex-wrap gap-2">
//                   {group.skills.map((skill) => (
//                     <span
//                       key={skill}
//                       className="rounded-full border border-cyan-300/15 bg-cyan-300/10 px-3 py-1 text-sm text-cyan-100"
//                     >
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </motion.article>
//             )
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Skills

import { motion } from "framer-motion"
import { Braces, Cpu, Database, Layers, MonitorCog, Terminal } from "lucide-react"

const skillGroups = [
  {
    title: "RTL & Digital Design",
    icon: Cpu,
    skills: ["Verilog", "SystemVerilog", "VHDL", "RTL Design", "FSMs", "Pipelining", "RISC-V"],
  },
  {
    title: "EDA & ASIC Flow",
    icon: Layers,
    skills: ["Synthesis", "Timing Analysis", "Netlists", "DRC", "LVS", "Physical Design", "Sky130"],
  },
  {
    title: "AI/ML & Python Automation",
    icon: Braces,
    skills: ["Python", "PyTorch", "NLTK", "Intent Classification", "RAG", "MCP", "Parsing", "Regex", "NumPy"],
  },
  {
    title: "Debug & Validation",
    icon: MonitorCog,
    skills: ["Waveform Debug", "EDA Logs", "Assertions", "Testbenches", "Hardware Debug", "Root Cause Analysis"],
  },
  {
    title: "Low Level Systems",
    icon: Terminal,
    skills: ["C++", "CPU Emulation", "Instruction Decode", "Linux", "Git", "Shell"],
  },
  {
    title: "Data & Reporting",
    icon: Database,
    skills: ["Technical Reports", "Data Analysis", "Visualization", "Documentation", "Stakeholder Updates"],
  },
]

function Skills() {
  return (
    <section id="skills" className="relative px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300 sm:text-sm sm:tracking-[0.45em]">
            Skills Matrix
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-6xl">
            Technical Stack
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            A focused mix of hardware design, EDA automation, silicon debug,
            physical design fundamentals, AI/ML tooling, and low level software.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon

            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="rounded-[2rem] border border-slate-700/70 bg-slate-950/70 p-6 shadow-2xl shadow-black/30 backdrop-blur transition hover:-translate-y-2 hover:border-cyan-300/60 hover:shadow-cyan-500/20"
              >
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-xl font-bold text-white">
                    {group.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-cyan-300/15 bg-cyan-300/10 px-3 py-1 text-sm text-cyan-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
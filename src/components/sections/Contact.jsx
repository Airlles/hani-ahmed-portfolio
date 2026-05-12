// import { motion } from "framer-motion"
// import { Code2, Network, Mail, FileText } from "lucide-react"

// function Contact() {
//   const links = [
//   {
//     label: "GitHub",
//     value: "github.com/Airlles",
//     href: "https://github.com/Airlles",
//     icon: Code2,
//   },
//   {
//     label: "LinkedIn",
//     value: "linkedin.com/in/haniahmd",
//     href: "https://linkedin.com/in/haniahmd",
//     icon: Network,
//   },
//   {
//     label: "Email",
//     value: "h13ahmed@torontomu.ca",
//     href: "mailto:h13ahmed@torontomu.ca",
//     icon: Mail,
//   },
//   {
//   label: "Resume",
//   value: "Download PDF",
//   href: "/resume/Hani_Ahmed_Resume.pdf",
//   icon: FileText,
//   },
// ]

//   return (
//     <section id="contact" className="relative px-6 py-28">
//       <div className="mx-auto max-w-7xl">
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.7 }}
//           className="overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-slate-950/75 shadow-2xl shadow-cyan-950/30 backdrop-blur"
//         >
//           <div className="border-b border-cyan-300/10 bg-slate-950/80 px-6 py-4">
//             <div className="flex items-center gap-2">
//               <span className="h-3 w-3 rounded-full bg-red-400" />
//               <span className="h-3 w-3 rounded-full bg-yellow-300" />
//               <span className="h-3 w-3 rounded-full bg-green-400" />

//               <p className="ml-4 font-mono text-xs uppercase tracking-[0.35em] text-slate-400">
//                 hani.contact_console
//               </p>
//             </div>
//           </div>

//           <div className="grid gap-10 p-7 md:p-10 lg:grid-cols-[1fr_0.9fr]">
//             <div>
//               <p className="text-sm uppercase tracking-[0.45em] text-cyan-300">
//                 Contact
//               </p>

//               <h2 className="mt-4 text-4xl font-bold text-white md:text-6xl">
//                 Let’s connect
//               </h2>

//               <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
//                 Interested in RTL design, EDA automation, ASIC debug, physical design,
//                 firmware, validation, and AI assisted silicon workflows.
//               </p>

//               <div className="mt-8 rounded-2xl border border-cyan-300/15 bg-black/30 p-5">
//                 <p className="font-mono text-sm text-cyan-200">
//                   status: open_to_coop_roles
//                 </p>
//                 <p className="mt-2 font-mono text-sm text-slate-400">
//                   focus: rtl | eda | asic_debug | physical_design | ai_automation
//                 </p>
//               </div>
//             </div>

//             <div className="grid gap-4">
//               {links.map((link) => {
//                 const Icon = link.icon

//                 return (
//                   <a
//                     key={link.label}
//                     href={link.href}
//                     target={link.href.startsWith("http") ? "_blank" : undefined}
//                     rel={link.href.startsWith("http") ? "noreferrer" : undefined}
//                     className="group rounded-2xl border border-slate-700/70 bg-black/30 p-5 transition hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-cyan-300/10"
//                   >
//                     <div className="flex items-center gap-4">
//                       <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">
//                         <Icon size={22} />
//                       </div>

//                       <div>
//                         <p className="font-semibold text-white">{link.label}</p>
//                         <p className="mt-1 text-sm text-slate-400 group-hover:text-cyan-100">
//                           {link.value}
//                         </p>
//                       </div>
//                     </div>
//                   </a>
//                 )
//               })}
//             </div>
//           </div>
//         </motion.div>

        
//       </div>
//     </section>
//   )
// }

// export default Contact

import { motion } from "framer-motion"
import { Code2, FileText, Mail, Network } from "lucide-react"

function Contact() {
  const links = [
    {
      label: "GitHub",
      value: "github.com/Airlles",
      href: "https://github.com/Airlles",
      icon: Code2,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/haniahmd",
      href: "https://linkedin.com/in/haniahmd",
      icon: Network,
    },
    {
      label: "Email",
      value: "h13ahmed@torontomu.ca",
      href: "mailto:h13ahmed@torontomu.ca",
      icon: Mail,
    },
    {
      label: "Resume",
      value: "Download PDF",
      href: "/resume/Hani_Ahmed_Resume.pdf",
      icon: FileText,
    },
  ]

  return (
    <section id="contact" className="relative px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-slate-950/75 shadow-2xl shadow-cyan-950/30 backdrop-blur"
        >
          <div className="border-b border-cyan-300/10 bg-slate-950/80 px-5 py-4 sm:px-6">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-300" />
              <span className="h-3 w-3 rounded-full bg-green-400" />

              <p className="ml-3 font-mono text-[10px] uppercase tracking-[0.25em] text-slate-400 sm:ml-4 sm:text-xs sm:tracking-[0.35em]">
                hani.contact_console
              </p>
            </div>
          </div>

          <div className="grid gap-10 p-5 sm:p-7 md:p-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300 sm:text-sm sm:tracking-[0.45em]">
                Contact
              </p>

              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-6xl">
                Let’s connect
              </h2>

              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                Interested in RTL design, EDA automation, ASIC debug, physical design,
                firmware, validation, and AI assisted silicon workflows.
              </p>

              <div className="mt-8 rounded-2xl border border-cyan-300/15 bg-black/30 p-5">
                <p className="font-mono text-xs text-cyan-200 sm:text-sm">
                  status: open_to_coop_roles
                </p>
                <p className="mt-2 break-words font-mono text-xs text-slate-400 sm:text-sm">
                  focus: rtl | eda | asic_debug | physical_design | ai_automation
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              {links.map((link) => {
                const Icon = link.icon

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="group rounded-2xl border border-slate-700/70 bg-black/30 p-5 transition hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-cyan-300/10"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">
                        <Icon size={22} />
                      </div>

                      <div className="min-w-0">
                        <p className="font-semibold text-white">{link.label}</p>
                        <p className="mt-1 break-words text-sm text-slate-400 group-hover:text-cyan-100">
                          {link.value}
                        </p>
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
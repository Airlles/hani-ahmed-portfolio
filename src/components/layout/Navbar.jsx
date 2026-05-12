// import { motion } from "framer-motion"

// function Navbar() {
//   const links = [
//     { label: "Home", href: "#home" },
//     { label: "Projects", href: "#projects" },
//     { label: "Skills", href: "#skills" },
//     { label: "Contact", href: "#contact" },
//   ]

//   return (
//     <motion.header
//       initial={{ y: -24, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.7 }}
//       className="fixed left-0 right-0 top-0 z-50 px-6 py-5"
//     >
//       <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-cyan-300/15 bg-slate-950/65 px-5 py-3 shadow-2xl shadow-black/30 backdrop-blur-xl">
//         <a href="#home" className="group flex items-center gap-3">
//           <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 font-mono text-sm font-bold text-cyan-200 shadow-[0_0_18px_rgba(34,211,238,0.18)]">
//             HA
//           </div>

//           <div className="hidden sm:block">
//             <p className="text-sm font-semibold text-white">Hani Ahmed</p>
//             <p className="font-mono text-xs text-slate-400">RTL / EDA / ASIC</p>
//           </div>
//         </a>

//         <div className="hidden items-center gap-2 md:flex">
//           {links.map((link) => (
//             <a
//               key={link.label}
//               href={link.href}
//               className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-cyan-300/10 hover:text-cyan-200"
//             >
//               {link.label}
//             </a>
//           ))}
//         </div>

//         <a
//           href="#contact"
//           className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300 hover:text-slate-950"
//         >
//           Connect
//         </a>
//       </nav>
//     </motion.header>
//   )
// }

// export default Navbar

import { motion } from "framer-motion"

function Navbar() {
  const links = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed left-0 right-0 top-0 z-50 px-3 py-4 sm:px-6 sm:py-5"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-cyan-300/15 bg-slate-950/75 px-3 py-3 shadow-2xl shadow-black/30 backdrop-blur-xl sm:px-5">
        <a href="#home" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 font-mono text-sm font-bold text-cyan-200 shadow-[0_0_18px_rgba(34,211,238,0.18)]">
            HA
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-white">Hani Ahmed</p>
            <p className="font-mono text-xs text-slate-400">RTL / EDA / ASIC</p>
          </div>
        </a>

        <div className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-cyan-300/10 hover:text-cyan-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-2 text-xs font-semibold text-cyan-100 transition hover:bg-cyan-300 hover:text-slate-950 sm:px-4 sm:text-sm"
        >
          Connect
        </a>
      </nav>
    </motion.header>
  )
}

export default Navbar
// import { motion } from "framer-motion"

// const symbols = [
//   "assign",
//   "always_ff",
//   "clk",
//   "rst_n",
//   "DFF",
//   "MUX",
//   "FIFO",
//   "CDC",
//   "STA",
//   "LVS",
//   "DRC",
//   "ASIC",
//   "RTL",
//   "EDA",
//   "setup",
//   "hold",
//   "slack",
//   "netlist",
//   "timing",
//   "Verilog",
//   "posedge",
//   "wire",
//   "reg",
//   "logic",
// ]

// const labelPositions = [
//   { left: "8%", top: "12%" },
//   { left: "22%", top: "8%" },
//   { left: "45%", top: "10%" },
//   { left: "66%", top: "9%" },
//   { left: "84%", top: "14%" },

//   { left: "5%", top: "34%" },
//   { left: "9%", top: "49%" },
//   { left: "6%", top: "66%" },
//   { left: "15%", top: "82%" },

//   { left: "82%", top: "32%" },
//   { left: "90%", top: "46%" },
//   { left: "78%", top: "64%" },
//   { left: "88%", top: "80%" },

//   { left: "20%", top: "88%" },
//   { left: "35%", top: "84%" },
//   { left: "52%", top: "89%" },
//   { left: "68%", top: "85%" },
//   { left: "76%", top: "92%" },

//   { left: "3%", top: "22%" },
//   { left: "94%", top: "24%" },
//   { left: "28%", top: "15%" },
//   { left: "72%", top: "18%" },
//   { left: "12%", top: "74%" },
//   { left: "92%", top: "70%" },
// ]

// function AnimatedBackground() {
//   const particles = Array.from({ length: 220 })
//   const traces = Array.from({ length: 16 })
//   const dataStreams = Array.from({ length: 10 })

//   return (
//     <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#020617]">
//       <motion.div
//         className="absolute left-[-15%] top-[-20%] h-[620px] w-[620px] rounded-full bg-cyan-400/10 blur-3xl"
//         animate={{
//           x: [0, 180, 60, 0],
//           y: [0, 90, 190, 0],
//           scale: [1, 1.18, 0.95, 1],
//         }}
//         transition={{
//           duration: 18,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />

//       <motion.div
//         className="absolute right-[-12%] top-[5%] h-[700px] w-[700px] rounded-full bg-violet-600/10 blur-3xl"
//         animate={{
//           x: [0, -190, -80, 0],
//           y: [0, 130, -70, 0],
//           scale: [1, 0.9, 1.22, 1],
//         }}
//         transition={{
//           duration: 22,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />

//       <motion.div
//         className="absolute bottom-[-25%] left-[20%] h-[520px] w-[1000px] rounded-full bg-blue-500/7 blur-3xl"
//         animate={{
//           x: [0, 130, -130, 0],
//           y: [0, -90, -40, 0],
//         }}
//         transition={{
//           duration: 26,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />

//       <motion.div
//         className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(34,211,238,0.20)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.20)_1px,transparent_1px)] [background-size:64px_64px]"
//         animate={{
//           backgroundPosition: ["0px 0px", "72px 72px"],
//         }}
//         transition={{
//           duration: 14,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//       />

//       <div className="absolute inset-0">
//         {dataStreams.map((_, index) => (
//           <motion.div
//             key={index}
//             className="absolute top-[-20%] font-mono text-xs leading-6 text-cyan-300/18"
//             style={{
//               left: `${8 + index * 9}%`,
//             }}
//             animate={{
//               y: ["-20%", "130%"],
//               opacity: [0, 0.5, 0.18, 0],
//             }}
//             transition={{
//               duration: 10 + (index % 5),
//               repeat: Infinity,
//               delay: index * 0.9,
//               ease: "linear",
//             }}
//           >
//             <div>1010</div>
//             <div>clk</div>
//             <div>rst</div>
//             <div>0101</div>
//             <div>wire</div>
//             <div>DFF</div>
//             <div>STA</div>
//             <div>1100</div>
//           </motion.div>
//         ))}
//       </div>

//       <div className="absolute inset-0">
//         {traces.map((_, index) => (
//           <motion.div
//             key={index}
//             className="absolute h-px w-72 bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent"
//             style={{
//               top: `${8 + index * 6}%`,
//               left: `${(index * 17) % 90}%`,
//               rotate: index % 2 === 0 ? "0deg" : "90deg",
//             }}
//             animate={{
//               opacity: [0, 0.8, 0],
//               x: index % 2 === 0 ? [-100, 140] : [0, 0],
//               y: index % 2 === 0 ? [0, 0] : [-100, 140],
//             }}
//             transition={{
//               duration: 4 + (index % 5),
//               repeat: Infinity,
//               delay: index * 0.45,
//               ease: "easeInOut",
//             }}
//           />
//         ))}
//       </div>

//       <div className="absolute inset-0">
//         {particles.map((_, index) => {
//           const left = `${(index * 37) % 100}%`
//           const top = `${(index * 61) % 100}%`

//           return (
//             <motion.span
//               key={index}
//               className="absolute h-[2px] w-[2px] rounded-full bg-cyan-100 shadow-[0_0_18px_rgba(103,232,249,1)]"
//               style={{ left, top }}
//               animate={{
//                 y: [0, -34, 22, 0],
//                 x: [0, 14, -12, 0],
//                 opacity: [0.35, 1, 0.55, 0.35],
//                 scale: [0.95, 1.45, 1.05, 0.95],
//               }}
//               transition={{
//                 duration: 5 + (index % 9),
//                 repeat: Infinity,
//                 delay: (index % 12) * 0.35,
//                 ease: "easeInOut",
//               }}
//             />
//           )
//         })}
//       </div>

//       <div className="absolute inset-0">
//         {symbols.map((symbol, index) => {
//           const position = labelPositions[index % labelPositions.length]

//           return (
//             <motion.span
//               key={`${symbol}-${index}`}
//               className="absolute rounded-md border border-cyan-300/40 bg-slate-950/70 px-3 py-1 font-mono text-sm font-semibold text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.35)] backdrop-blur-sm"              style={{
//                 left: position.left,
//                 top: position.top,
//               }}
//               animate={{
//                 y: [0, -28, 0],
//                 x: [0, index % 2 === 0 ? 18 : -18, 0],
//                 opacity: [0.18, 0.85, 0.18],
//                 scale: [0.92, 1.04, 0.92],
//               }}
//               transition={{
//                 duration: 7 + (index % 6),
//                 repeat: Infinity,
//                 delay: index * 0.32,
//                 ease: "easeInOut",
//               }}
//             >
//               {symbol}
//             </motion.span>
//           )
//         })}
//       </div>

//       <div className="absolute left-1/2 top-1/2 h-[430px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-[3rem] bg-[#020617]/45 blur-xl" />

//       <motion.div
//         className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-transparent via-cyan-300/7 to-transparent"
//         animate={{
//           y: ["-100%", "100%"],
//         }}
//         transition={{
//           duration: 7,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//       />

//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.22)_42%,rgba(2,6,23,0.94)_100%)]" />
//       <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/65 to-transparent" />
//       <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/75 to-transparent" />
//     </div>
//   )
// }

// export default AnimatedBackground

import { motion } from "framer-motion"

const symbols = [
  "assign",
  "always_ff",
  "clk",
  "rst_n",
  "DFF",
  "MUX",
  "FIFO",
  "CDC",
  "STA",
  "LVS",
  "DRC",
  "ASIC",
  "RTL",
  "EDA",
  "setup",
  "hold",
  "slack",
  "netlist",
  "timing",
  "Verilog",
  "posedge",
  "wire",
  "reg",
  "logic",
]

const labelPositions = [
  { left: "8%", top: "12%" },
  { left: "22%", top: "8%" },
  { left: "45%", top: "10%" },
  { left: "66%", top: "9%" },
  { left: "84%", top: "14%" },
  { left: "5%", top: "34%" },
  { left: "9%", top: "49%" },
  { left: "6%", top: "66%" },
  { left: "15%", top: "82%" },
  { left: "82%", top: "32%" },
  { left: "90%", top: "46%" },
  { left: "78%", top: "64%" },
  { left: "88%", top: "80%" },
  { left: "20%", top: "88%" },
  { left: "35%", top: "84%" },
  { left: "52%", top: "89%" },
  { left: "68%", top: "85%" },
  { left: "76%", top: "92%" },
  { left: "3%", top: "22%" },
  { left: "94%", top: "24%" },
  { left: "28%", top: "15%" },
  { left: "72%", top: "18%" },
  { left: "12%", top: "74%" },
  { left: "92%", top: "70%" },
]

function AnimatedBackground() {
  const particles = Array.from({ length: 140 })
  const traces = Array.from({ length: 10 })
  const dataStreams = Array.from({ length: 7 })
  const gridPulses = Array.from({ length: 8 })

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#020617]">
      <motion.div
        className="absolute left-[-15%] top-[-20%] h-[620px] w-[620px] rounded-full bg-cyan-400/10 blur-3xl"
        animate={{
          x: [0, 180, 60, 0],
          y: [0, 90, 190, 0],
          scale: [1, 1.18, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute right-[-12%] top-[5%] h-[700px] w-[700px] rounded-full bg-violet-600/10 blur-3xl"
        animate={{
          x: [0, -190, -80, 0],
          y: [0, 130, -70, 0],
          scale: [1, 0.9, 1.22, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-[-25%] left-[20%] h-[520px] w-[1000px] rounded-full bg-blue-500/7 blur-3xl"
        animate={{
          x: [0, 130, -130, 0],
          y: [0, -90, -40, 0],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(34,211,238,0.20)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.20)_1px,transparent_1px)] [background-size:64px_64px]"
        animate={{
          backgroundPosition: ["0px 0px", "64px 64px"],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="absolute inset-0">
        {gridPulses.map((_, index) => (
          <motion.div
            key={`horizontal-pulse-${index}`}
            className="absolute h-px w-72 bg-gradient-to-r from-transparent via-cyan-200 to-transparent shadow-[0_0_18px_rgba(103,232,249,0.95)]"
            style={{
              top: `${16 + index * 9}%`,
              left: "-20%",
            }}
            animate={{
              x: ["0vw", "140vw"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5 + (index % 4),
              repeat: Infinity,
              delay: index * 0.8,
              ease: "linear",
            }}
          />
        ))}

        {gridPulses.map((_, index) => (
          <motion.div
            key={`vertical-pulse-${index}`}
            className="absolute h-72 w-px bg-gradient-to-b from-transparent via-cyan-200 to-transparent shadow-[0_0_18px_rgba(103,232,249,0.95)]"
            style={{
              left: `${12 + index * 11}%`,
              top: "-20%",
            }}
            animate={{
              y: ["0vh", "140vh"],
              opacity: [0, 0.85, 0],
            }}
            transition={{
              duration: 6 + (index % 4),
              repeat: Infinity,
              delay: index * 1.1,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 hidden sm:block">
        {dataStreams.map((_, index) => (
          <motion.div
            key={index}
            className="absolute top-[-20%] font-mono text-xs leading-6 text-cyan-300/18"
            style={{
              left: `${8 + index * 9}%`,
            }}
            animate={{
              y: ["-20%", "130%"],
              opacity: [0, 0.5, 0.18, 0],
            }}
            transition={{
              duration: 10 + (index % 5),
              repeat: Infinity,
              delay: index * 0.9,
              ease: "linear",
            }}
          >
            <div>1010</div>
            <div>clk</div>
            <div>rst</div>
            <div>0101</div>
            <div>wire</div>
            <div>DFF</div>
            <div>STA</div>
            <div>1100</div>
          </motion.div>
        ))}
      </div>

      <div className="absolute inset-0">
        {traces.map((_, index) => (
          <motion.div
            key={index}
            className="absolute h-px w-72 bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent"
            style={{
              top: `${8 + index * 8}%`,
              left: `${(index * 17) % 90}%`,
              rotate: index % 2 === 0 ? "0deg" : "90deg",
            }}
            animate={{
              opacity: [0, 0.8, 0],
              x: index % 2 === 0 ? [-100, 140] : [0, 0],
              y: index % 2 === 0 ? [0, 0] : [-100, 140],
            }}
            transition={{
              duration: 4 + (index % 5),
              repeat: Infinity,
              delay: index * 0.45,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0">
        {particles.map((_, index) => {
          const left = `${(index * 37) % 100}%`
          const top = `${(index * 61) % 100}%`

          return (
            <motion.span
              key={index}
              className="absolute h-[2px] w-[2px] rounded-full bg-cyan-100/80 shadow-[0_0_12px_rgba(103,232,249,0.85)]"
              style={{ left, top }}
              animate={{
                y: [0, -34, 22, 0],
                x: [0, 14, -12, 0],
                opacity: [0.18, 0.75, 0.4, 0.18],
                scale: [0.95, 1.35, 1.05, 0.95],
              }}
              transition={{
                duration: 5 + (index % 9),
                repeat: Infinity,
                delay: (index % 12) * 0.35,
                ease: "easeInOut",
              }}
            />
          )
        })}
      </div>

      <div className="absolute inset-0 hidden sm:block">
        {symbols.map((symbol, index) => {
          const position = labelPositions[index % labelPositions.length]

          return (
            <motion.span
              key={`${symbol}-${index}`}
              className="absolute rounded-md border border-cyan-300/40 bg-slate-950/75 px-3 py-1 font-mono text-sm font-semibold text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.28)] backdrop-blur-none"
              style={{
                left: position.left,
                top: position.top,
              }}
              animate={{
                y: [0, -28, 0],
                x: [0, index % 2 === 0 ? 18 : -18, 0],
                opacity: [0.45, 1, 0.45],
                scale: [0.92, 1.04, 0.92],
              }}
              transition={{
                duration: 7 + (index % 6),
                repeat: Infinity,
                delay: index * 0.32,
                ease: "easeInOut",
              }}
            >
              {symbol}
            </motion.span>
          )
        })}
      </div>

      <div className="absolute left-1/2 top-1/2 h-[430px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-[3rem] bg-[#020617]/55 blur-md" />

      <motion.div
        className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-transparent via-cyan-300/7 to-transparent"
        animate={{
          y: ["-100%", "100%"],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.22)_42%,rgba(2,6,23,0.94)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/65 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/75 to-transparent" />
    </div>
  )
}

export default AnimatedBackground
// import { motion } from "framer-motion"

// function TypingLine() {
//   return (
//     <div className="mx-auto mt-7 w-fit max-w-full rounded-2xl border border-cyan-300/20 bg-slate-950/70 px-5 py-3 font-mono text-sm text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.12)]">
//       <span className="text-slate-500">hani@silicon-console:~$ </span>

//       <motion.span
//         initial={{ width: 0 }}
//         animate={{ width: "100%" }}
//         transition={{ duration: 3.2, ease: "linear" }}
//         className="inline-block overflow-hidden whitespace-nowrap align-bottom"
//       >
//         run portfolio --focus rtl --eda --asic --ai-debug
//       </motion.span>

//       <motion.span
//         animate={{ opacity: [0, 1, 0] }}
//         transition={{ duration: 1, repeat: Infinity }}
//         className="ml-1"
//       >
//         |
//       </motion.span>
//     </div>
//   )
// }

// export default TypingLine

import { motion } from "framer-motion"

function TypingLine() {
  return (
    <div className="mx-auto mt-7 max-w-full overflow-hidden rounded-2xl border border-cyan-300/20 bg-slate-950/70 px-4 py-3 font-mono text-xs text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.12)] sm:w-fit sm:px-5 sm:text-sm">
      <span className="text-slate-500">hani@silicon-console:~$ </span>

      <motion.span
        className="inline-block max-w-full overflow-hidden whitespace-nowrap align-bottom"
        initial={{ width: 0 }}
        animate={{
          width: ["0%", "100%", "100%", "0%"],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.45, 0.75, 1],
        }}
      >
        run portfolio --rtl --eda --asic --ai-debug
      </motion.span>

      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="ml-1"
      >
        |
      </motion.span>
    </div>
  )
}

export default TypingLine
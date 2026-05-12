// import { Cpu, Layers, Bot, CircuitBoard } from "lucide-react"

// const stats = [
//   {
//     label: "Projects",
//     value: "7",
//     icon: Layers,
//   },
//   {
//     label: "Core Domain",
//     value: "RTL / ASIC",
//     icon: Cpu,
//   },
//   {
//     label: "AI Layer",
//     value: "EDA Debug",
//     icon: Bot,
//   },
//   {
//     label: "Physical Flow",
//     value: "CMOS / LVS",
//     icon: CircuitBoard,
//   },
// ]

// function HeroStats() {
//   return (
//     <div className="mx-auto mt-8 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
//       {stats.map((item) => {
//         const Icon = item.icon

//         return (
//           <div
//             key={item.label}
//             className="rounded-2xl border border-cyan-300/15 bg-slate-950/55 p-4 text-left shadow-[0_0_24px_rgba(34,211,238,0.08)] backdrop-blur"
//           >
//             <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
//               <Icon size={18} />
//             </div>

//             <p className="font-mono text-xs uppercase tracking-[0.25em] text-slate-500">
//               {item.label}
//             </p>

//             <p className="mt-1 font-mono text-sm font-semibold text-cyan-100">
//               {item.value}
//             </p>
//           </div>
//         )
//       })}
//     </div>
//   )
// }

// export default HeroStats

import { Bot, CircuitBoard, Cpu, Layers } from "lucide-react"

const stats = [
  {
    label: "Projects",
    value: "7",
    icon: Layers,
  },
  {
    label: "Core Domain",
    value: "RTL / ASIC",
    icon: Cpu,
  },
  {
    label: "AI Layer",
    value: "EDA Debug",
    icon: Bot,
  },
  {
    label: "Physical Flow",
    value: "CMOS / LVS",
    icon: CircuitBoard,
  },
]

function HeroStats() {
  return (
    <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-3 lg:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon

        return (
          <div
            key={item.label}
            className="rounded-2xl border border-cyan-300/15 bg-slate-950/55 p-4 text-left shadow-[0_0_24px_rgba(34,211,238,0.08)] backdrop-blur"
          >
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
              <Icon size={18} />
            </div>

            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500 sm:text-xs sm:tracking-[0.25em]">
              {item.label}
            </p>

            <p className="mt-1 font-mono text-xs font-semibold text-cyan-100 sm:text-sm">
              {item.value}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default HeroStats
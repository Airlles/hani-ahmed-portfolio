// import { motion } from "framer-motion"
// import {
//   X,
//   Lock,
//   ExternalLink,
//   Workflow,
//   Layers,
//   Cpu,
//   AlertTriangle,
//   Hammer,
//   TrendingUp,
//   ListChecks,
// } from "lucide-react"

// function ProjectModal({ project, onClose }) {
//   if (!project) return null

//   const detailSections = [
//     {
//       title: "Problem",
//       text: project.problem,
//       icon: AlertTriangle,
//     },
//     {
//       title: "What I Built",
//       text: project.built,
//       icon: Hammer,
//     },
//     {
//       title: "Engineering Impact",
//       text: project.impact,
//       icon: TrendingUp,
//     },
//     {
//       title: "Next Steps",
//       text: project.nextSteps,
//       icon: ListChecks,
//     },
//   ]

//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center px-6 py-10">
//       <motion.div
//         className="absolute inset-0 bg-black/70 backdrop-blur-md"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         onClick={onClose}
//       />

//       <motion.div
//         initial={{ opacity: 0, scale: 0.92, y: 24 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         exit={{ opacity: 0, scale: 0.92, y: 24 }}
//         transition={{ duration: 0.25 }}
//         className="relative max-h-[88vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] border border-cyan-300/25 bg-slate-950/95 shadow-2xl shadow-cyan-950/50"
//       >
//         <div className="sticky top-0 z-10 border-b border-cyan-300/10 bg-slate-950/95 px-6 py-4 backdrop-blur-xl">
//           <div className="flex items-center justify-between gap-4">
//             <div className="flex items-center gap-2">
//               <span className="h-3 w-3 rounded-full bg-red-400" />
//               <span className="h-3 w-3 rounded-full bg-yellow-300" />
//               <span className="h-3 w-3 rounded-full bg-green-400" />

//               <p className="ml-4 font-mono text-xs uppercase tracking-[0.3em] text-slate-400">
//                 project.detail_console
//               </p>
//             </div>

//             <button
//               onClick={onClose}
//               className="rounded-full border border-slate-700 bg-slate-900 p-2 text-slate-300 transition hover:border-cyan-300/60 hover:text-cyan-200"
//             >
//               <X size={18} />
//             </button>
//           </div>
//         </div>

//         <div className="p-7 md:p-10">
//           <div className="mb-6 flex flex-wrap items-center gap-3">
//             <span className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-sm font-medium text-cyan-100">
//               {project.category}
//             </span>

//             <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-sm text-slate-300">
//               {project.status}
//             </span>

//             {project.tags?.map((tag) => (
//               <span
//                 key={tag}
//                 className="rounded-full border border-slate-700 bg-black/30 px-3 py-1 text-sm text-slate-400"
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>

//           <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
//             {project.title}
//           </h2>

//           <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
//             {project.description}
//           </p>

//           <div className="mt-8 grid gap-5 md:grid-cols-2">
//             <div className="rounded-2xl border border-cyan-300/15 bg-black/30 p-5">
//               <div className="mb-3 flex items-center gap-2 text-cyan-200">
//                 <Workflow size={18} />
//                 <h3 className="font-semibold">System Flow</h3>
//               </div>

//               <p className="font-mono text-sm leading-7 text-slate-300">
//                 {project.flow}
//               </p>
//             </div>

//             <div className="rounded-2xl border border-cyan-300/15 bg-black/30 p-5">
//               <div className="mb-3 flex items-center gap-2 text-cyan-200">
//                 <Cpu size={18} />
//                 <h3 className="font-semibold">Project Type</h3>
//               </div>

//               <p className="text-sm leading-7 text-slate-300">
//                 {project.category} project focused on{" "}
//                 {project.tags?.join(", ") || "hardware engineering"}.
//               </p>
//             </div>
//           </div>

//           <div className="mt-6 grid gap-5 md:grid-cols-2">
//             {detailSections.map((section) => {
//               const Icon = section.icon

//               return (
//                 <div
//                   key={section.title}
//                   className="rounded-2xl border border-slate-700/70 bg-black/30 p-5"
//                 >
//                   <div className="mb-3 flex items-center gap-2 text-cyan-200">
//                     <Icon size={18} />
//                     <h3 className="font-semibold">{section.title}</h3>
//                   </div>

//                   <p className="text-sm leading-7 text-slate-300">
//                     {section.text || "Details coming soon."}
//                   </p>
//                 </div>
//               )
//             })}
//           </div>

//           <div className="mt-6 rounded-2xl border border-slate-700/70 bg-black/30 p-5">
//             <div className="mb-4 flex items-center gap-2 text-slate-300">
//               <Layers size={18} />
//               <h3 className="font-semibold">Technical Stack</h3>
//             </div>

//             <div className="flex flex-wrap gap-2">
//               {project.stack.map((item) => (
//                 <span
//                   key={item}
//                   className="rounded-full border border-cyan-300/15 bg-cyan-300/10 px-3 py-1 text-sm text-cyan-100"
//                 >
//                   {item}
//                 </span>
//               ))}
//             </div>
//           </div>

//           <div className="mt-8 flex flex-wrap gap-3">
//             {project.github ? (
//               <a
//                 href={project.github}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200"
//               >
//                 <ExternalLink size={17} />
//                 Open GitHub Repository
//               </a>
//             ) : (
//               <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-3 text-slate-400">
//                 <Lock size={17} />
//                 Repository pending or private
//               </div>
//             )}

//             <button
//               onClick={onClose}
//               className="rounded-full border border-slate-700 px-5 py-3 font-semibold text-slate-300 transition hover:border-cyan-300/60 hover:text-cyan-200"
//             >
//               Close Console
//             </button>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   )
// }

// export default ProjectModal

import { motion } from "framer-motion"
import {
  X,
  Lock,
  ExternalLink,
  Workflow,
  Layers,
  Cpu,
  AlertTriangle,
  Hammer,
  TrendingUp,
  ListChecks,
} from "lucide-react"

function ProjectModal({ project, onClose }) {
  if (!project) return null

  const detailSections = [
    {
      title: "Problem",
      text: project.problem,
      icon: AlertTriangle,
    },
    {
      title: "What I Built",
      text: project.built,
      icon: Hammer,
    },
    {
      title: "Engineering Impact",
      text: project.impact,
      icon: TrendingUp,
    },
    {
      title: "Next Steps",
      text: project.nextSteps,
      icon: ListChecks,
    },
  ]

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-3 py-6 sm:px-6 sm:py-10">
      <motion.div
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 24 }}
        transition={{ duration: 0.25 }}
        className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[1.5rem] border border-cyan-300/25 bg-slate-950/95 shadow-2xl shadow-cyan-950/50 sm:rounded-[2rem]"
      >
        <div className="sticky top-0 z-10 border-b border-cyan-300/10 bg-slate-950/95 px-5 py-4 backdrop-blur-xl sm:px-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex min-w-0 items-center gap-2">
              <span className="h-3 w-3 shrink-0 rounded-full bg-red-400" />
              <span className="h-3 w-3 shrink-0 rounded-full bg-yellow-300" />
              <span className="h-3 w-3 shrink-0 rounded-full bg-green-400" />

              <p className="ml-2 truncate font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400 sm:ml-4 sm:text-xs sm:tracking-[0.3em]">
                project.detail_console
              </p>
            </div>

            <button
              onClick={onClose}
              className="shrink-0 rounded-full border border-slate-700 bg-slate-900 p-2 text-slate-300 transition hover:border-cyan-300/60 hover:text-cyan-200"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        <div className="p-5 sm:p-7 md:p-10">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-sm font-medium text-cyan-100">
              {project.category}
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-sm text-slate-300">
              {project.status}
            </span>

            {project.tags?.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-700 bg-black/30 px-3 py-1 text-sm text-slate-400"
              >
                {tag}
              </span>
            ))}
          </div>

          <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl">
            {project.title}
          </h2>

          <p className="mt-6 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg">
            {project.description}
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-cyan-300/15 bg-black/30 p-5">
              <div className="mb-3 flex items-center gap-2 text-cyan-200">
                <Workflow size={18} />
                <h3 className="font-semibold">System Flow</h3>
              </div>

              <p className="font-mono text-sm leading-7 text-slate-300">
                {project.flow}
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-300/15 bg-black/30 p-5">
              <div className="mb-3 flex items-center gap-2 text-cyan-200">
                <Cpu size={18} />
                <h3 className="font-semibold">Project Type</h3>
              </div>

              <p className="text-sm leading-7 text-slate-300">
                {project.category} project focused on{" "}
                {project.tags?.join(", ") || "hardware engineering"}.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {detailSections.map((section) => {
              const Icon = section.icon

              return (
                <div
                  key={section.title}
                  className="rounded-2xl border border-slate-700/70 bg-black/30 p-5"
                >
                  <div className="mb-3 flex items-center gap-2 text-cyan-200">
                    <Icon size={18} />
                    <h3 className="font-semibold">{section.title}</h3>
                  </div>

                  <p className="text-sm leading-7 text-slate-300">
                    {section.text || "Details coming soon."}
                  </p>
                </div>
              )
            })}
          </div>

          <div className="mt-6 rounded-2xl border border-slate-700/70 bg-black/30 p-5">
            <div className="mb-4 flex items-center gap-2 text-slate-300">
              <Layers size={18} />
              <h3 className="font-semibold">Technical Stack</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cyan-300/15 bg-cyan-300/10 px-3 py-1 text-sm text-cyan-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                <ExternalLink size={17} />
                Open GitHub Repository
              </a>
            ) : (
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-3 text-slate-400">
                <Lock size={17} />
                Repository pending or private
              </div>
            )}

            <button
              onClick={onClose}
              className="rounded-full border border-slate-700 px-5 py-3 font-semibold text-slate-300 transition hover:border-cyan-300/60 hover:text-cyan-200"
            >
              Close Console
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectModal
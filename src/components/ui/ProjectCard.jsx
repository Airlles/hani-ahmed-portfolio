import { Cpu, Lock, Workflow, TerminalSquare, Layers } from "lucide-react"

const accentStyles = {
  cyan: {
    border: "hover:border-cyan-300/70",
    glow: "group-hover:shadow-cyan-500/20",
    text: "text-cyan-300",
    bg: "bg-cyan-300/10",
  },
  violet: {
    border: "hover:border-violet-300/70",
    glow: "group-hover:shadow-violet-500/20",
    text: "text-violet-300",
    bg: "bg-violet-300/10",
  },
  blue: {
    border: "hover:border-blue-300/70",
    glow: "group-hover:shadow-blue-500/20",
    text: "text-blue-300",
    bg: "bg-blue-300/10",
  },
}

function ProjectCard({ project, onClick }) {
  const accent = accentStyles[project.accent] || accentStyles.cyan

  return (
    <article
      onClick={onClick}
      className={`group relative cursor-pointer overflow-hidden rounded-[2rem] border border-slate-700/70 bg-slate-950/75 p-6 shadow-2xl shadow-black/30 backdrop-blur transition duration-300 hover:-translate-y-2 ${accent.border} ${accent.glow}`}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent opacity-70" />

      <div className="relative mb-6 flex items-start justify-between gap-4">
        <div>
          <p className={`text-sm font-semibold uppercase tracking-[0.28em] ${accent.text}`}>
            {project.category}
          </p>

          <h3 className="mt-3 max-w-xl text-2xl font-bold leading-tight text-white">
            {project.title}
          </h3>
        </div>

        <div className={`rounded-2xl border border-white/10 ${accent.bg} p-3 ${accent.text}`}>
          <Cpu size={24} />
        </div>
      </div>

      <div className="relative mb-5 flex flex-wrap gap-2">
        <span className="rounded-full border border-slate-600 bg-slate-900 px-3 py-1 text-xs font-medium text-slate-300">
          {project.status}
        </span>

        {project.tags?.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-cyan-300/15 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="relative min-h-[112px] leading-7 text-slate-300">
        {project.description}
      </p>

      <div className="relative mt-6 overflow-hidden rounded-2xl border border-cyan-300/15 bg-black/35 p-4">
        <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(34,211,238,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.35)_1px,transparent_1px)] [background-size:28px_28px]" />

        <div className="relative mb-3 flex items-center gap-2 text-sm text-cyan-200">
          <Workflow size={16} />
          <span>System Flow</span>
        </div>

        <p className="relative font-mono text-sm leading-6 text-slate-300">
          {project.flow}
        </p>
      </div>

      <div className="relative mt-5">
        <div className="mb-3 flex items-center gap-2 text-sm text-slate-400">
          <Layers size={16} />
          <span>Stack</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full bg-slate-800/90 px-3 py-1 text-xs text-slate-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="relative mt-7 flex items-center justify-between gap-4">
        {project.github ? (
          <a
            onClick={(event) => event.stopPropagation()}
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-300 hover:text-slate-950"
          >
            <span className="font-mono text-xs">GH</span>
            GitHub Repository
          </a>
        ) : (
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-500">
            <Lock size={16} />
            Repository pending or private
          </div>
        )}

        <div className="hidden items-center gap-2 font-mono text-xs text-slate-600 sm:flex">
          <TerminalSquare size={15} />
          module.ready
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
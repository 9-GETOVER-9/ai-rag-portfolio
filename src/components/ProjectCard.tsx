import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../data/profile'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-[#ff8d8d]">{project.type}</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">
            {project.title}
          </h3>
        </div>
        <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-slate-500" />
      </div>
      <p className="mt-5 leading-7 text-slate-300">{project.outcome}</p>
      <ul className="mt-6 space-y-3">
        {project.highlights.map((highlight) => (
          <li className="flex gap-3 text-sm leading-6 text-slate-400" key={highlight}>
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff6969]" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
      <div className="mt-7 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span className="skill-pill" key={item}>
            {item}
          </span>
        ))}
      </div>
    </article>
  )
}

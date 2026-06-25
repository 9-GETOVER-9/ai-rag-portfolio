import type { ReactNode } from 'react'

type SectionProps = {
  children: ReactNode
  eyebrow: string
  id: string
  title: string
}

export function Section({ children, eyebrow, id, title }: SectionProps) {
  return (
    <section className="border-b border-white/10 px-5 py-16 sm:px-8 sm:py-20" id={id}>
      <div className="mx-auto max-w-[1200px]">
        <p className="text-sm font-medium uppercase text-[#ff6969]">{eyebrow}</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-5xl">
          {title}
        </h2>
        <div className="mt-9">{children}</div>
      </div>
    </section>
  )
}

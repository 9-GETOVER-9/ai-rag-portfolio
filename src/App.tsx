import {
  ArrowDown,
  GitBranch,
  GraduationCap,
  Mail,
  Sparkles,
} from 'lucide-react'
import { LineWavesBackground } from './components/LineWavesBackground'
import { ProjectCard } from './components/ProjectCard'
import { Section } from './components/Section'
import { profile } from './data/profile'

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070809] text-slate-100">
      <section className="relative flex min-h-[92vh] items-center border-b border-white/10">
        <LineWavesBackground />
        <div className="relative z-10 mx-auto grid w-full max-w-[1200px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-10">
          <div className="flex flex-col justify-center">
            <p className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/12 bg-white/6 px-3 py-1.5 text-sm text-slate-300">
              <Sparkles className="h-4 w-4 text-[#ff5f5f]" />
              {profile.name} · {profile.location}
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
              {profile.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              {profile.summary}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a className="primary-action" href="#projects">
                查看项目
                <ArrowDown className="h-4 w-4" />
              </a>
              <a className="secondary-action" href="#contact">
                联系我
                <Mail className="h-4 w-4" />
              </a>
              <a className="secondary-action" href="#contact">
                GitHub
                <GitBranch className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-[460px] rounded-lg border border-white/12 bg-[#111316]/78 p-5 shadow-2xl shadow-black/40 backdrop-blur">
              <div className="grid grid-cols-2 gap-3">
                {profile.heroMetrics.map((metric) => (
                  <div
                    className="rounded-md border border-white/10 bg-white/[0.04] p-4"
                    key={metric.label}
                  >
                    <p className="text-2xl font-semibold text-white">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-sm leading-5 text-slate-400">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-md border border-[#c11515]/35 bg-[#c11515]/10 p-4">
                <p className="text-sm font-medium text-[#ff9a9a]">Focus</p>
                <p className="mt-2 text-base leading-7 text-slate-200">
                  {profile.focus}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="About"
        title="把技术项目包装成能被理解的成果"
        id="about"
      >
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
            <GraduationCap className="mb-5 h-7 w-7 text-[#ff6969]" />
            <h2 className="text-2xl font-semibold text-white">
              {profile.education.school}
            </h2>
            <p className="mt-3 text-slate-300">{profile.education.major}</p>
            <p className="mt-5 leading-7 text-slate-400">
              首版公开学校、专业方向和项目成果，不公开私人日记、敏感规划、服务器信息或过深隐私。
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {profile.positioning.map((item) => (
              <div
                className="rounded-lg border border-white/10 bg-[#101215] p-5"
                key={item.title}
              >
                <item.icon className="mb-4 h-6 w-6 text-[#ff6969]" />
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Selected Projects"
        title="三个最适合首版展示的项目"
        id="projects"
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {profile.projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Skills" title="能支撑项目落地的能力栈" id="skills">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {profile.skills.map((skill) => (
            <div
              className="rounded-md border border-white/10 bg-white/[0.04] px-4 py-4 text-slate-200"
              key={skill}
            >
              {skill}
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Contact" title="先保留克制的联系入口" id="contact">
        <div className="rounded-lg border border-white/10 bg-[#101215] p-6 sm:p-8">
          <p className="max-w-3xl text-lg leading-8 text-slate-300">
            如果你正在寻找 AI/RAG、知识库、学习产品或数据采集方向的实习与项目合作，可以先通过以下入口记录联系信息。真实邮箱和 GitHub 链接会在确认公开信息后替换。
          </p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <div className="contact-card">
              <Mail className="h-5 w-5 text-[#ff6969]" />
              <span>邮箱即将补充</span>
            </div>
            <div className="contact-card">
              <GitBranch className="h-5 w-5 text-[#ff6969]" />
              <span>GitHub 即将补充</span>
            </div>
          </div>
        </div>
      </Section>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-500">
        © 2026 {profile.name}. Built for AI/RAG portfolio conversations.
      </footer>
    </main>
  )
}

export default App

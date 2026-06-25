import { BrainCircuit, DatabaseZap, RadioTower } from 'lucide-react'

export type Project = {
  highlights: string[]
  outcome: string
  stack: string[]
  title: string
  type: string
}

export const profile = {
  name: '木旭林晖',
  location: 'Dalian',
  title: '大数据背景的 AI/RAG 项目实践者',
  summary:
    '关注 AI × 心理学、知识库系统、数据采集与学习产品。用工程项目证明理解力，用成果包装让合作对象快速看懂价值。',
  focus:
    '把大数据、RAG、心理学内容结构化和产品思维连接起来，沉淀为可展示、可复用、可继续扩展的项目资产。',
  education: {
    school: '大连工业大学',
    major: '大数据管理与应用',
  },
  heroMetrics: [
    { label: '首版项目展示', value: '3' },
    { label: '核心方向', value: 'AI/RAG' },
    { label: '项目气质', value: '研究型' },
    { label: '页面目标', value: '简历可用' },
  ],
  positioning: [
    {
      description: '关注心理学内容如何被组织成可检索、可问答、可学习的知识系统。',
      icon: BrainCircuit,
      title: 'AI × 心理学',
    },
    {
      description: '用爬虫、数据处理和工程化迭代，把零散信息转成稳定的数据资产。',
      icon: DatabaseZap,
      title: '数据采集',
    },
    {
      description: '把项目讲清楚，面向实习、研究和合作对象呈现成果而不是流水账。',
      icon: RadioTower,
      title: '成果表达',
    },
  ],
  projects: [
    {
      highlights: [
        '面向大学生与英语学习者，围绕听音频、翻卡片、复习评分形成闭环。',
        'FSRS 复习、PWA 离线能力和 AI 解析共同服务长期学习体验。',
        '适合展示学习产品理解、前端工程组织和 AI 辅助学习方向。',
      ],
      outcome:
        '一个英语听力学习网站，把听力材料、复习算法和 AI 解析组合成可持续使用的学习工具。',
      stack: ['React', 'TypeScript', 'FSRS', 'PWA', 'AI 解析'],
      title: 'CET Listening Studio',
      type: 'Learning Product',
    },
    {
      highlights: [
        '从基础采集迭代到更稳定的自动化采集流程，强调可恢复和可维护。',
        'XHR 接口优先解析，DOM 兜底，checkpoint 备份和断点续跑降低失败成本。',
        '适合展示 Python、数据采集、异常处理和工程迭代能力。',
      ],
      outcome:
        '围绕酒店与房型数据采集构建的自动化爬虫项目，重点不只是抓取，而是稳定运行。',
      stack: ['Python', 'Selenium', 'XHR', 'Checkpoint', '自动化'],
      title: '携程酒店爬虫',
      type: 'Data Engineering',
    },
    {
      highlights: [
        '把心理学资料、学习卡片和个人知识库组织成更适合检索与问答的结构。',
        '关注 RAG、Prompt Engineering、知识表示和学习产品之间的连接。',
        '适合承接未来研究、实习和项目合作对 AI × 心理学方向的判断。',
      ],
      outcome:
        '一个持续推进的方向型项目：将心理学知识结构化，探索 RAG 在学习和研究场景中的应用。',
      stack: ['RAG', 'Prompt Engineering', 'Obsidian', '知识库', '心理学'],
      title: 'AI × 心理学 / RAG',
      type: 'Research Direction',
    },
  ] satisfies Project[],
  skills: [
    'Python',
    'React / Vite',
    'RAG',
    'Prompt Engineering',
    '爬虫 / 数据采集',
    'Obsidian 知识管理',
    '产品思维',
    '用户研究基础',
  ],
}

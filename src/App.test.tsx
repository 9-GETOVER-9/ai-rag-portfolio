import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('portfolio homepage', () => {
  it('presents the public identity and audience-facing positioning', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /大数据背景的 AI\/RAG 项目实践者/,
      }),
    ).toBeInTheDocument()
    expect(screen.getAllByText(/木旭林晖/).length).toBeGreaterThan(0)
    expect(screen.getByText(/大连工业大学/)).toBeInTheDocument()
  })

  it('shows the three selected projects as outcome-focused cards', () => {
    render(<App />)

    expect(screen.getByText('CET Listening Studio')).toBeInTheDocument()
    expect(screen.getByText('携程酒店爬虫')).toBeInTheDocument()
    expect(screen.getByText('AI × 心理学 / RAG')).toBeInTheDocument()
    expect(screen.getByText(/FSRS 复习/)).toBeInTheDocument()
    expect(screen.getByText(/断点续跑/)).toBeInTheDocument()
    expect(screen.getByText(/心理学内容结构化/)).toBeInTheDocument()
  })

  it('keeps contact methods as safe placeholders', () => {
    render(<App />)

    expect(screen.getByText(/邮箱即将补充/)).toBeInTheDocument()
    expect(screen.getByText(/GitHub 即将补充/)).toBeInTheDocument()
  })
})

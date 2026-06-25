export function LineWavesBackground() {
  const paths = Array.from({ length: 14 }, (_, index) => {
    const y = 46 + index * 30
    const offset = index % 2 === 0 ? 0 : 42
    return `M -120 ${y} C 130 ${y - 76 + offset}, 300 ${y + 86 - offset}, 560 ${y} S 940 ${y - 78 + offset}, 1220 ${y} S 1500 ${y + 74 - offset}, 1760 ${y}`
  })

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(193,21,21,0.26),transparent_32%),radial-gradient(circle_at_86%_18%,rgba(255,255,255,0.12),transparent_28%),linear-gradient(135deg,#08090b_0%,#0d1014_48%,#170909_100%)]" />
      <svg
        className="line-waves absolute inset-0 h-full w-full opacity-80"
        viewBox="0 0 1600 620"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="wave-stroke" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(193,21,21,0)" />
            <stop offset="38%" stopColor="rgba(193,21,21,0.72)" />
            <stop offset="72%" stopColor="rgba(255,125,125,0.34)" />
            <stop offset="100%" stopColor="rgba(193,21,21,0)" />
          </linearGradient>
        </defs>
        {paths.map((d, index) => (
          <path
            d={d}
            fill="none"
            key={d}
            pathLength="1"
            stroke="url(#wave-stroke)"
            strokeWidth={index % 3 === 0 ? 1.35 : 0.8}
            style={{ animationDelay: `${index * -0.45}s` }}
          />
        ))}
      </svg>
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,8,9,0)_0%,rgba(7,8,9,0.32)_58%,#070809_100%)]" />
    </div>
  )
}

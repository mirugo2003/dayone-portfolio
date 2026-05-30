import { useRef } from 'react'
import { useCountUp } from '../hooks/useScrollReveal.js'
import './Hero.css'

const stats = [
  { value: '40+',  label: 'Projects shipped' },
  { value: '12d',  label: 'Avg. launch time' },
  { value: '100%', label: 'On-time delivery' },
]

function StatItem({ value, label, delay }) {
  const numRef = useRef(null)
  useCountUp(numRef, value)

  return (
    <div className="hero__stat reveal" style={{ transitionDelay: delay }}>
      <span className="hero__stat-value" ref={numRef}>{value}</span>
      <span className="hero__stat-label">{label}</span>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="hero section">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__glow hero__glow--1" />
        <div className="hero__glow hero__glow--2" />
        <div className="hero__grid" />
      </div>

      <div className="container hero__inner">
        <div className="hero__badge hero__animate-1">
          <span className="hero__badge-dot" aria-hidden="true" />
          Available for new projects — June 2026
        </div>

        <h1 className="hero__headline hero__animate-2">
          Websites that <br />
          <em>ship fast,</em><br />
          and convert faster.
        </h1>

        <p className="hero__sub hero__animate-3">
          I'm a freelance developer helping local businesses get online and
          startup founders launch MVPs in weeks, not quarters.
        </p>

        <div className="hero__actions hero__animate-4">
          <a href="#services" className="btn btn--primary">See services</a>
          <a href="#work" className="btn btn--ghost">View recent work →</a>
        </div>

        <div className="hero__stats hero__animate-5" role="list">
          {stats.map((s, i) => (
            <StatItem key={s.label} value={s.value} label={s.label} delay={`${0.6 + i * 0.12}s`} />
          ))}
        </div>
      </div>
    </section>
  )
}

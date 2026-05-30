import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import { projects } from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'
import './Work.css'

const filters = [
  { label: 'All work',       value: 'all' },
  { label: 'LaunchPad Sites', value: 'launchpad' },
  { label: 'MVP Sprints',    value: 'mvp' },
]

export default function Work() {
  const [active, setActive] = useState('all')
  const headerRef = useScrollReveal()

  const filtered = active === 'all'
    ? projects
    : projects.filter(p => p.type === active)

  return (
    <section className="work section" id="work">
      <div className="container">
        <p className="section-label reveal" ref={headerRef}>Selected work</p>
        <h2 className="work__heading reveal reveal-delay-1" ref={headerRef}>Shipped, live, and earning.</h2>
        <p className="work__sub reveal reveal-delay-2" ref={headerRef}>
          A sample of recent launches across local business sites and startup MVPs.
        </p>

        <div className="work__filters reveal reveal-delay-3" ref={headerRef} role="tablist" aria-label="Filter projects">
          {filters.map(f => (
            <button
              key={f.value}
              role="tab"
              aria-selected={active === f.value}
              className={`work__filter${active === f.value ? ' work__filter--active' : ''}`}
              onClick={() => setActive(f.value)}
            >
              {f.label}
              {f.value !== 'all' && (
                <span className="work__filter-count">
                  {projects.filter(p => p.type === f.value).length}
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="work__grid">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="work__empty">
            <p>No projects yet. Add some to <code>src/data/projects.js</code>!</p>
          </div>
        )}
      </div>
    </section>
  )
}

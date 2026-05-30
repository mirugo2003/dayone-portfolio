import { useScrollReveal } from '../hooks/useScrollReveal.js'
import './ProjectCard.css'

const typeLabels = {
  launchpad: 'LaunchPad',
  mvp: 'MVP Sprint',
}

export default function ProjectCard({ project, index = 0 }) {
  const { type, title, tagline, description, tags, liveUrl, imageUrl, year, highlight } = project
  const ref = useScrollReveal()

  const delay = `${(index % 3) * 0.12}s`

  return (
    <article
      ref={ref}
      className={`project-card project-card--${type} reveal reveal-scale`}
      style={{ transitionDelay: delay }}
    >
      <div className="project-card__image-wrap">
        {imageUrl ? (
          <img src={imageUrl} alt={`${title} preview`} className="project-card__image" loading="lazy" />
        ) : (
          <div className="project-card__placeholder" aria-hidden="true">
            <span className="project-card__placeholder-letter">{title[0]}</span>
          </div>
        )}

        <div className="project-card__overlay">
          <p className="project-card__desc">{description}</p>
          {liveUrl && liveUrl !== 'https://example.com' && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__live-link"
              aria-label={`View ${title} live site`}
            >
              View live site →
            </a>
          )}
        </div>
      </div>

      <div className="project-card__body">
        <div className="project-card__meta">
          <span className={`project-card__type project-card__type--${type}`}>
            {typeLabels[type]}
          </span>
          <span className="project-card__year">{year}</span>
        </div>

        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__tagline">{tagline}</p>

        {highlight && (
          <div className="project-card__highlight">
            <span>⚡</span> {highlight}
          </div>
        )}

        <div className="project-card__tags">
          {tags.map(t => (
            <span key={t} className="project-card__tag">{t}</span>
          ))}
        </div>
      </div>
    </article>
  )
}

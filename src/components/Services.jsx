import { useScrollReveal } from '../hooks/useScrollReveal.js'
import './Services.css'

const services = [
  {
    id: 'launchpad',
    audience: 'For local businesses',
    name: 'LaunchPad Sites',
    description: 'A beautiful, fast website that turns visitors into customers — built and shipped in 7 days.',
    price: 'from $2,400',
    timeline: '7 days',
    features: [
      'Custom design tailored to your brand',
      'Mobile-first, lightning fast',
      'Booking, contact & maps integrated',
      'SEO + Google Business setup',
    ],
  },
  {
    id: 'mvp',
    audience: 'For startup founders',
    name: 'MVP Sprints',
    description: 'Go from idea to a working product in 3 weeks. Real users. Real feedback. Real fast.',
    price: 'from $8,000',
    timeline: '3 weeks',
    features: [
      'Full-stack web app (React + API)',
      'Auth, payments & database ready',
      'Deployed on day one of week one',
      'Weekly demos + post-launch support',
    ],
  },
]

export default function Services() {
  const headingRef = useScrollReveal()
  const subRef     = useScrollReveal()
  const card1Ref   = useScrollReveal()
  const card2Ref   = useScrollReveal()

  const cardRefs = [card1Ref, card2Ref]

  return (
    <section className="services section" id="services">
      <div className="container">
        <p className="section-label reveal" ref={headingRef}>Services</p>
        <h2 className="services__heading reveal reveal-delay-1" ref={headingRef}>Two ways to work together.</h2>
        <p className="services__sub reveal reveal-delay-2" ref={subRef}>
          Productized engagements with clear timelines and fixed scope. No surprises.
        </p>

        <div className="services__grid">
          {services.map((s, i) => (
            <article
              key={s.id}
              ref={cardRefs[i]}
              className={`service-card service-card--${s.id} reveal reveal-scale reveal-delay-${i + 1}`}
            >
              <div className="service-card__header">
                <span className="service-card__audience">{s.audience}</span>
                <h3 className="service-card__name">{s.name}</h3>
                <p className="service-card__desc">{s.description}</p>
              </div>

              <div className="service-card__price-row">
                <span className="service-card__price">{s.price}</span>
                <span className="service-card__timeline">⚡ {s.timeline}</span>
              </div>

              <ul className="service-card__features" role="list">
                {s.features.map((f, fi) => (
                  <li key={f} className="service-card__feature" style={{ transitionDelay: `${fi * 0.06}s` }}>
                    <span className="service-card__check" aria-hidden="true">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a href="#contact" className="service-card__cta btn btn--primary">
                Get started
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

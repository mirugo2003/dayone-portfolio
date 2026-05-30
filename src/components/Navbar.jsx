import { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Work',     href: '#work' },
    { label: 'Contact',  href: '#contact' },
  ]

  return (
    <header className={`navbar navbar--entrance${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#" className="navbar__logo">
          <span className="navbar__logo-dot" aria-hidden="true" />
          dayone.studio
        </a>

        <nav className="navbar__links" aria-label="Main navigation">
          {links.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              className="navbar__link"
              style={{ animationDelay: `${0.1 + i * 0.07}s` }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="navbar__cta">Start a project</a>

        <button
          className="navbar__burger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
      </div>

      {menuOpen && (
        <div className="navbar__mobile">
          {links.map(l => (
            <a key={l.label} href={l.href} className="navbar__mobile-link" onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="navbar__mobile-cta" onClick={() => setMenuOpen(false)}>
            Start a project →
          </a>
        </div>
      )}
    </header>
  )
}

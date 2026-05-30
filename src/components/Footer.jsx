import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          <a href="#" className="footer__logo">
            <span className="footer__logo-dot" aria-hidden="true" />
            dayone.studio
          </a>
          <p className="footer__copy">© {new Date().getFullYear()} DayOne Studio. Built with care.</p>
        </div>
        <p className="footer__version">v1.0 — Shipping things that matter.</p>
      </div>
    </footer>
  )
}

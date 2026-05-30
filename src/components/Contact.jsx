import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import './Contact.css'

const initialForm = { name: '', email: '', projectType: '', message: '' }

export default function Contact() {
  const [form, setForm]     = useState(initialForm)
  const [status, setStatus] = useState('idle')
  const headerRef = useScrollReveal()
  const infoRef   = useScrollReveal()
  const formRef   = useScrollReveal()

  const handleChange = e => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')

    // ── Replace with your Formspree / EmailJS call ──
    await new Promise(r => setTimeout(r, 1200))
    setStatus('sent')
    setForm(initialForm)
  }

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <p className="section-label reveal" ref={headerRef}>Contact</p>
        <h2 className="contact__heading reveal reveal-delay-1" ref={headerRef}>
          Let's build <br />
          <em>something worth shipping.</em>
        </h2>
        <p className="contact__sub reveal reveal-delay-2" ref={headerRef}>
          Tell me about your project. I reply to every inquiry within one business day.
        </p>

        <div className="contact__grid">
          <div className="contact__info reveal reveal-left reveal-delay-2" ref={infoRef}>
            <div className="contact__info-item">
              <span className="contact__info-label">Email</span>
              <a href="mailto:hello@dayone.studio" className="contact__info-value">
                hello@dayone.studio
              </a>
            </div>
            <div className="contact__info-item">
              <span className="contact__info-label">Location</span>
              <span className="contact__info-value">Remote — working worldwide</span>
            </div>
            <div className="contact__info-item">
              <span className="contact__info-label">Response time</span>
              <span className="contact__info-value">Within 1 business day</span>
            </div>
          </div>

          <form
            className="contact__form reveal reveal-delay-3"
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
          >
            {status === 'sent' ? (
              <div className="contact__success">
                <span className="contact__success-icon" aria-hidden="true">✓</span>
                <h3>Message sent!</h3>
                <p>I'll get back to you within one business day.</p>
                <button type="button" className="btn btn--ghost" onClick={() => setStatus('idle')}>
                  Send another
                </button>
              </div>
            ) : (
              <>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input id="name" name="name" type="text" className="form-input"
                      placeholder="Your name" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input id="email" name="email" type="email" className="form-input"
                      placeholder="you@company.com" value={form.email} onChange={handleChange} required />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="projectType" className="form-label">Project type</label>
                  <select id="projectType" name="projectType" className="form-input form-select"
                    value={form.projectType} onChange={handleChange} required>
                    <option value="" disabled>Select a service</option>
                    <option value="launchpad">LaunchPad Site</option>
                    <option value="mvp">MVP Sprint</option>
                    <option value="other">Something else</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Tell me about it</label>
                  <textarea id="message" name="message" className="form-input form-textarea"
                    placeholder="What are you building? Any deadline or budget in mind?"
                    rows={5} value={form.message} onChange={handleChange} required />
                </div>

                <button type="submit" className="btn btn--primary contact__submit"
                  disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Send message'}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

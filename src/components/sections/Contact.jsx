import { useSectionReveal } from '../../hooks/useSectionReveal'

// TODO: replace the placeholder links below with your real profiles
const contactLinks = [
  {
    label: 'EMAIL',
    href: 'mailto:your.email@example.com', // TODO: replace with your email
    hint: 'your.email@example.com',
  },
  {
    label: 'GITHUB',
    href: 'https://github.com/your-username', // TODO: replace with your GitHub
    hint: 'github.com/your-username',
  },
  {
    label: 'LINKEDIN',
    href: 'https://www.linkedin.com/in/your-username', // TODO: replace with your LinkedIn
    hint: 'linkedin.com/in/your-username',
  },
]

export default function Contact() {
  const { ref, isVisible } = useSectionReveal({ threshold: 0.2 })

  return (
    <section id="contact" className="section contact" ref={ref}>
      <div
        className={`contact__title reveal ${isVisible ? 'is-visible' : ''}`}
        style={{ '--reveal-delay': '0ms' }}
      >
        <h2>
          HAVE AN IDEA?
          <br />
          LET’S BUILD IT.
        </h2>
      </div>

      <div className="contact__links">
        {contactLinks.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            className={`contact__link reveal ${isVisible ? 'is-visible' : ''}`}
            style={{ '--reveal-delay': `${200 + i * 120}ms` }}
          >
            <span className="contact__link-text">
              <span className="contact__link-label mono">{link.label}</span>
              <span className="contact__link-hint mono">{link.hint}</span>
            </span>
            <span className="contact__link-arrow" aria-hidden="true">↗</span>
          </a>
        ))}
      </div>

      <footer className="footer">
        <p className="mono">© 2026 Nikhil Gangwar</p>
      </footer>
    </section>
  )
}
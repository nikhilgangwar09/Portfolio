import { useSectionReveal } from '../../hooks/useSectionReveal'

export default function Intro() {
  const { ref, isVisible } = useSectionReveal()

  return (
    <section id="intro" className="section intro" ref={ref}>
      <p
        className={`intro__status mono reveal ${isVisible ? 'is-visible' : ''}`}
        style={{ '--reveal-delay': '0ms' }}
      >
        PORTFOLIO — 2026
      </p>

      <div
        className={`intro__name reveal ${isVisible ? 'is-visible' : ''}`}
        style={{ '--reveal-delay': '120ms' }}
      >
        <h1>
          NIKHIL<span className="intro__cursor" aria-hidden="true">.</span>
        </h1>
      </div>

      <div
        className={`intro__role mono reveal ${isVisible ? 'is-visible' : ''}`}
        style={{ '--reveal-delay': '240ms' }}
      >
        BCA STUDENT · DEVELOPER · BUILDER
      </div>

      <p
        className={`intro__statement reveal ${isVisible ? 'is-visible' : ''}`}
        style={{ '--reveal-delay': '360ms' }}
      >
        “I build things, break things, and learn how they work.”
      </p>

      <a
        className={`intro__scroll mono reveal ${isVisible ? 'is-visible' : ''}`}
        style={{ '--reveal-delay': '480ms' }}
        href="#about"
      >
        <span className="intro__scroll-line" aria-hidden="true" />
        SCROLL TO EXPLORE ↓
      </a>
    </section>
  )
}
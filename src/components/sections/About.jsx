import { useSectionReveal } from '../../hooks/useSectionReveal'

export default function About() {
  const { ref, isVisible } = useSectionReveal()

  const meta = [
    ['NAME', 'Nikhil Gangwar'],
    ['PROGRAM', 'BCA — 3rd Year'],
    ['BASED IN', 'India'], // TODO: replace with your city/country
  ]

  return (
    <section id="about" className="section about" ref={ref}>
      <div className="section__head">
        <span className="section__num mono">02</span>
        <div className={`reveal ${isVisible ? 'is-visible' : ''}`}>
          <h2>WHO AM I?</h2>
        </div>
      </div>

      <div className="about__grid">
        <div
          className={`about__meta reveal ${isVisible ? 'is-visible' : ''}`}
          style={{ '--reveal-delay': '120ms' }}
        >
          {meta.map(([label, value]) => (
            <div className="about__meta-row" key={label}>
              <span className="mono">{label}</span>
              <span>{value}</span>
            </div>
          ))}
        </div>

        <div
          className={`about__desc reveal ${isVisible ? 'is-visible' : ''}`}
          style={{ '--reveal-delay': '240ms' }}
        >
          <p>
            I’m a BCA student interested in building useful digital experiences
            and understanding how things work behind the interface.
          </p>
        </div>
      </div>

      <div className="about__currently">
        <div
          className={`about__block reveal ${isVisible ? 'is-visible' : ''}`}
          style={{ '--reveal-delay': '360ms' }}
        >
          <p className="about__label mono">CURRENTLY · LEARNING</p>
          <p>
            Web Development · JavaScript · Backend · DSA
          </p>
        </div>
        <div
          className={`about__block reveal ${isVisible ? 'is-visible' : ''}`}
          style={{ '--reveal-delay': '480ms' }}
        >
          <p className="about__label mono">INTERESTS</p>
          <p>
            Building projects · Problem solving · Exploring technology
          </p>
        </div>
      </div>
    </section>
  )
}
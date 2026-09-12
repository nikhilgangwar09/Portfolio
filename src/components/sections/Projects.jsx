import { projects } from '../../data/projects'
import { useSectionReveal } from '../../hooks/useSectionReveal'

export default function Projects() {
  const { ref, isVisible } = useSectionReveal({ threshold: 0.08 })

  return (
    <section id="projects" className="section projects" ref={ref}>
      <div className="section__head">
        <span className="section__num mono">03</span>
        <div className={`reveal ${isVisible ? 'is-visible' : ''}`}>
          <h2>THINGS I BUILT</h2>
        </div>
      </div>

      <div className="projects__list">
        {projects.map((p, i) => (
          <article
            className={`project reveal ${isVisible ? 'is-visible' : ''}`}
            style={{ '--reveal-delay': `${140 + i * 120}ms` }}
            key={p.number}
          >
            <div className="project__top">
              <span className="project__num mono">/{p.number}</span>
              <div className="project__links mono">
                <a href={p.liveUrl}>VIEW PROJECT ↗</a>
                <a href={p.githubUrl}>GITHUB ↗</a>
              </div>
            </div>

            <h3 className="project__name">{p.name}</h3>
            <p className="project__desc">{p.description}</p>

            <ul className="project__tags mono">
              {p.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
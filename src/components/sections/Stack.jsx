import { useSectionReveal } from '../../hooks/useSectionReveal'

const stack = [
  {
    category: 'FRONTEND',
    items: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    category: 'BACKEND / DATA',
    items: ['Python', 'SQL'],
  },
  {
    category: 'TOOLS',
    items: ['Git', 'GitHub'],
  },
]

export default function Stack() {
  const { ref, isVisible } = useSectionReveal()

  return (
    <section id="stack" className="section stack" ref={ref}>
      <div className="section__head" data-scrub>
        <span className="section__num mono">04</span>
        <h2>WHAT I USE</h2>
      </div>

      <div className="stack__list">
        {stack.map((group, i) => (
          <div className="stack__group" key={group.category}>
            <p
              className={`stack__category mono reveal ${isVisible ? 'is-visible' : ''}`}
              style={{ '--reveal-delay': `${i * 120}ms` }}
            >
              {group.category}
            </p>
            <ul className="stack__items">
              {group.items.map((item, j) => (
                <li
                  className={`stack__item reveal ${isVisible ? 'is-visible' : ''}`}
                  style={{ '--reveal-delay': `${i * 120 + 100 + j * 80}ms` }}
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p
        className={`stack__note mono reveal ${isVisible ? 'is-visible' : ''}`}
        style={{ '--reveal-delay': '360ms' }}
      >
        “Tools change. Curiosity doesn’t.”
      </p>
    </section>
  )
}
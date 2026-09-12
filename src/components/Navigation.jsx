import { useEffect, useState } from 'react'

const sections = [
  { id: 'intro', label: '01' },
  { id: 'about', label: '02' },
  { id: 'projects', label: '03' },
  { id: 'stack', label: '04' },
  { id: 'contact', label: '05' },
]

export default function Navigation() {
  const [active, setActive] = useState('intro')

  useEffect(() => {
    const onScroll = () => {
      const offset = window.innerHeight / 3
      let current = sections[0].id
      for (const s of sections) {
        const el = document.getElementById(s.id)
        if (!el) continue
        if (el.offsetTop - offset <= window.scrollY) current = s.id
        else break
      }
      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="nav">
      <a href="#intro" className="nav__brand" aria-label="Back to top">
        NIKHIL<span className="nav__dot">.</span>
      </a>
      <nav aria-label="Sections">
        <ul className="nav__list">
          {sections.map((s) => (
            <li key={s.id} aria-current={active === s.id ? 'true' : undefined}>
              <a
                className={`nav__link ${active === s.id ? 'is-active' : ''}`}
                href={`#${s.id}`}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
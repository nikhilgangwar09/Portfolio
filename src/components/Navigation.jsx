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
  const [progress, setProgress] = useState(0)

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

  // Thin accent line under the nav that fills with page scroll progress.
  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? window.scrollY / max : 0)
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
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
      <span
        className="nav__progress"
        aria-hidden="true"
        style={{ transform: `scaleX(${progress})` }}
      />
    </header>
  )
}
import { useEffect, useState } from 'react'
import { useSectionReveal } from '../../hooks/useSectionReveal'
import heroPhoto from '../../assets/hero.jpeg'

const NAME = 'NIKHIL.'

const TYPE_SPEED = 110 // ms per letter while typing
const DELETE_SPEED = 70 // ms per letter while erasing
const HOLD_TYPED = 2200 // pause once the name is fully written
const HOLD_EMPTY = 900 // pause once it has been fully erased

export default function Intro() {
  const { ref, isVisible } = useSectionReveal()
  // Looping typewriter for "NIKHIL.":
  // type → hold → erase → hold → type again… forever.
  const [typed, setTyped] = useState(0)

  useEffect(() => {
    let cancelled = false
    let timer = null

    const tick = (count, dir, speed) => {
      if (cancelled) return
      setTyped(count)

      if (dir > 0 && count >= NAME.length) {
        timer = setTimeout(() => tick(NAME.length - 1, -1, DELETE_SPEED), HOLD_TYPED)
      } else if (dir < 0 && count <= 0) {
        timer = setTimeout(() => tick(1, 1, TYPE_SPEED), HOLD_EMPTY)
      } else {
        timer = setTimeout(() => tick(count + dir, dir, speed), speed)
      }
    }

    timer = setTimeout(() => tick(1, 1, TYPE_SPEED), 400)

    return () => {
      cancelled = true
      if (timer) clearTimeout(timer)
    }
  }, [])

  return (
    <section id="intro" className="section intro" ref={ref}>
      <p
        className={`intro__status mono reveal ${isVisible ? 'is-visible' : ''}`}
        style={{ '--reveal-delay': '0ms' }}
      >
        PORTFOLIO — 2026
      </p>

      <div className="intro__name">
        <h1 aria-label={NAME} data-scrub-hero>
          {/* typed text is aria-hidden; the label on the h1 is what
              screen readers announce */}
          <span className="intro__typed" aria-hidden="true">
            {NAME.slice(0, typed)
              .split('')
              .map((char, i) => (
                <span className="intro__typed-char" key={i}>
                  {char}
                </span>
              ))}
          </span>
          <span
            className="intro__cursor intro__cursor--show"
            aria-hidden="true"
          />
        </h1>
      </div>

      <div className="intro__grid">
        <div className="intro__info">
          <div
            className={`intro__role mono reveal ${isVisible ? 'is-visible' : ''}`}
            style={{ '--reveal-delay': '320ms' }}
          >
            BCA STUDENT · DEVELOPER · BUILDER
          </div>

          <p
            className={`intro__statement reveal ${isVisible ? 'is-visible' : ''}`}
            style={{ '--reveal-delay': '440ms' }}
          >
            “I build things, break things, and learn how they work.”
          </p>

          <a
            className={`intro__scroll mono reveal ${isVisible ? 'is-visible' : ''}`}
            style={{ '--reveal-delay': '620ms' }}
            href="#about"
          >
            <span className="intro__scroll-line" aria-hidden="true" />
            SCROLL TO EXPLORE ↓
          </a>
        </div>

        <figure
          className={`intro__photo reveal ${isVisible ? 'is-visible' : ''}`}
          style={{ '--reveal-delay': '380ms' }}
        >
          <div className="intro__photo-move" data-scrub-hero>
            <img
              src={heroPhoto}
              alt="Portrait of Nikhil Gangwar" // TODO: update alt text to match the photo
              width="1254"
              height="1254"
              decoding="async"
            />
          </div>
        </figure>
      </div>
    </section>
  )
}
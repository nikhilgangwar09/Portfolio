import { useEffect, useRef, useState } from 'react'

/**
 * Reveal-on-scroll hook.
 * Returns a ref to attach and whether the element is in view.
 * Animation is applied via CSS (see .reveal / .is-visible).
 * Falls back gracefully when JS is disabled or observer unsupported.
 */
export function useSectionReveal({ threshold = 0.15 } = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const thresholdRef = useRef(threshold)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: thresholdRef.current }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}
import { useEffect } from 'react'

/**
 * useScrub(ref)
 * ------------
 * Drives subtle scroll-scrub effects.
 *
 * - Elements inside the container marked `data-scrub` get a `--scrub`
 *   value (0 → 1) based on how far they have travelled through the viewport.
 * - Elements marked `data-scrub-hero` get `--scrub` based on how far past
 *   the hero the page has been scrolled (0 at the top → 1 after ~1 screen).
 *
 * The actual movement/opacity lives in CSS using calc(var(--scrub) * …),
 * so this hook only sets one number per element per frame.
 *
 * Respects prefers-reduced-motion: on serves, nothing is written and the
 * default `--scrub` in CSS keeps everything at its final, static state.
 */
export function useScrub(ref) {
  useEffect(() => {
    const container = ref.current
    if (!container) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const items = [...container.querySelectorAll('[data-scrub]')]
    const heroItems = [...container.querySelectorAll('[data-scrub-hero]')]
    if (items.length === 0 && heroItems.length === 0) return

    let raf = 0

    const animate = () => {
      raf = 0
      const vh = window.innerHeight

      for (const el of items) {
        // 0 while below the viewport, 1 when the element's top hits the top.
        const top = el.getBoundingClientRect().top
        const p = Math.min(1, Math.max(0, 1 - top / vh))
        el.style.setProperty('--scrub', p.toFixed(3))
      }

      if (heroItems.length > 0) {
        const maxScroll = document.documentElement.scrollHeight - vh
        const p = Math.min(1, maxScroll > 0 ? window.scrollY / vh : 0)
        for (const el of heroItems) {
          el.style.setProperty('--scrub', p.toFixed(3))
        }
      }
    }

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(animate)
    }

    animate()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [ref])
}
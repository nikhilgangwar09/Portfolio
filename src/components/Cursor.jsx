import { useEffect, useRef } from 'react'

/**
 * Minimal custom cursor dot — a small accent dot that trails the mouse.
 *
 * - Doesn't replace the real cursor, just follows it.
 * - Disabled on touch devices and with prefers-reduced-motion.
 * - Only appears once the mouse actually moves, so nothing shows on
 *   a touch-first device or a user who never moves the pointer.
 */
export default function Cursor() {
  const dotRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    if (!dot) return

    if (window.matchMedia('(pointer: coarse)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let x = -100
    let y = -100
    let tx = x
    let ty = y
    let raf = 0
    let hasMoved = false

    const tick = () => {
      x += (tx - x) * 0.2
      y += (ty - y) * 0.2
      dot.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`

      if (Math.abs(tx - x) < 0.3 && Math.abs(ty - y) < 0.3) {
        raf = 0
        return
      }
      raf = requestAnimationFrame(tick)
    }

    const onMove = (e) => {
      tx = e.clientX
      ty = e.clientY
      if (!hasMoved) {
        hasMoved = true
        dot.classList.add('is-on')
        x = tx
        y = ty
      }
      if (!raf) raf = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return <div className="cursor-dot" ref={dotRef} aria-hidden="true" />
}
import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver to the returned ref.
 * When the element enters the viewport, adds the class 'is-visible'.
 * CSS handles the actual animation via that class.
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.unobserve(el) // fire once
        }
      },
      { threshold: 0.12, ...options }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}

/**
 * Animates a number counting up from 0 to `target`.
 * Call with a ref to the element and the target number.
 */
export function useCountUp(ref, target, duration = 1400) {
  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.unobserve(el)

        const isPercent = target.toString().includes('%')
        const isPlus = target.toString().includes('+')
        const isD = target.toString().includes('d')
        const numeric = parseInt(target)

        let start = null
        const step = (timestamp) => {
          if (!start) start = timestamp
          const progress = Math.min((timestamp - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
          const current = Math.round(eased * numeric)

          if (isPercent) el.textContent = current + '%'
          else if (isPlus) el.textContent = current + '+'
          else if (isD) el.textContent = current + 'd'
          else el.textContent = current

          if (progress < 1) requestAnimationFrame(step)
        }

        requestAnimationFrame(step)
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])
}

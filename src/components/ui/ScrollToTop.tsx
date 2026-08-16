import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      window.setTimeout(() => {
        const el = document.getElementById(hash.replace('#', ''))
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 110
          window.scrollTo({ top, behavior: 'smooth' })
        }
      }, 0)
      return
    }

    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

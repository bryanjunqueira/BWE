import { useEffect, useState, useCallback } from 'react'
import styles from './ImageSlideshow.module.css'

interface ImageSlideshowProps {
  images: string[]
  alt?: string
  interval?: number
  showDots?: boolean
  className?: string
  kenBurns?: boolean
}

export default function ImageSlideshow({
  images,
  alt = '',
  interval = 5000,
  showDots = false,
  className = '',
  kenBurns = true,
}: ImageSlideshowProps) {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent(prev => (prev + 1) % images.length)
  }, [images.length])

  useEffect(() => {
    if (images.length <= 1) return
    const timer = setInterval(next, interval)
    return () => clearInterval(timer)
  }, [next, interval, images.length])

  if (images.length === 0) return null
  if (images.length === 1) {
    return (
      <div className={`${styles.slideshow} ${className}`}>
        <div className={`${styles.slide} ${styles.slideActive}`}>
          <img src={images[0]} alt={alt} loading="lazy" />
        </div>
      </div>
    )
  }

  return (
    <div className={`${styles.slideshow} ${className}`}>
      {images.map((img, i) => (
        <div
          key={i}
          className={`${styles.slide} ${i === current ? styles.slideActive : ''} ${kenBurns ? styles[`kenBurns${i % 3}`] : ''}`}
        >
          <img
            src={img}
            alt={i === current ? alt : ''}
            aria-hidden={i !== current}
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        </div>
      ))}

      {showDots && (
        <div className={styles.dots}>
          {images.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Imagem ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

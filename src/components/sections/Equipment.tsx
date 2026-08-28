import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'
import styles from './Equipment.module.css'

import cameraBullet1 from '../../assets/camera-bullet-1.png'
import cameraBullet2 from '../../assets/camera-bullet-2.png'
import speedDome from '../../assets/speed-dome.jpeg'
import speedDomePark from '../../assets/speed-dome-park.jpeg'
import speedDomeStreet from '../../assets/speed-dome-street.jpeg'
import controleFacial1 from '../../assets/controle-facial-1.png'
import controleFacial3 from '../../assets/controle-facial-3.png'
import biometria from '../../assets/biometria.png'
import xat2000 from '../../assets/xat-2000-lcd.png'
import armarioInteligente1 from '../../assets/armario-inteligente-1.png'

interface EquipmentItem {
  id: string
  category: 'cftv' | 'acesso' | 'alarme' | 'tech'
  title: string
  description: string
  image: string
}

const EQUIPMENT: EquipmentItem[] = [
  {
    id: 'bullet-1',
    category: 'cftv',
    title: 'Câmera Bullet',
    description: 'Alta resolução para ambientes externos, com visão noturna e resistência a intempéries.',
    image: cameraBullet1,
  },
  {
    id: 'bullet-2',
    category: 'cftv',
    title: 'Câmera Bullet Pro',
    description: 'Modelo avançado com detecção inteligente e alcance ampliado.',
    image: cameraBullet2,
  },
  {
    id: 'speed-dome',
    category: 'cftv',
    title: 'Speed Dome',
    description: 'Câmera PTZ com rotação 360°, zoom óptico e acompanhamento automático.',
    image: speedDome,
  },
  {
    id: 'speed-dome-park',
    category: 'cftv',
    title: 'Speed Dome Park',
    description: 'Ideal para áreas abertas, estacionamentos e ambientes amplos.',
    image: speedDomePark,
  },
  {
    id: 'speed-dome-street',
    category: 'cftv',
    title: 'Speed Dome Street',
    description: 'Monitoramento urbano com cobertura de grandes perímetros.',
    image: speedDomeStreet,
  },
  {
    id: 'facial-1',
    category: 'acesso',
    title: 'Controle Facial',
    description: 'Reconhecimento facial rápido e seguro para liberação de acesso em portões.',
    image: controleFacial1,
  },
  {
    id: 'facial-3',
    category: 'acesso',
    title: 'Videoporteiro Facial',
    description: 'Identificação facial com vídeo integrado para portarias e condomínios.',
    image: controleFacial3,
  },
  {
    id: 'biometria',
    category: 'acesso',
    title: 'Leitor Biométrico',
    description: 'Acesso por impressão digital com tela LCD e registro de eventos.',
    image: biometria,
  },
  {
    id: 'xat-2000',
    category: 'alarme',
    title: 'Xat 2000 LCD',
    description: 'Teclado de alarme com display LCD, ativação por senha e status em tempo real.',
    image: xat2000,
  },
  {
    id: 'armario',
    category: 'tech',
    title: 'Armário Inteligente',
    description: 'Solução para recebimento seguro de encomendas em condomínios e empresas.',
    image: armarioInteligente1,
  },
]

const BADGE_LABELS: Record<string, string> = {
  cftv: 'CFTV',
  acesso: 'Controle de Acesso',
  alarme: 'Alarme',
  tech: 'Tecnologia',
}

const BADGE_STYLES: Record<string, string> = {
  cftv: styles.badgeCftv,
  acesso: styles.badgeAcesso,
  alarme: styles.badgeAlarme,
  tech: styles.badgeTech,
}

export default function Equipment() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    const amount = 300
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    })
  }

  return (
    <section id="equipamentos" className={styles.section}>
      <div className="container">
        <AnimatedSection className={styles.header}>
          <span className="section-label">Equipamentos</span>
          <div className="accent-line" />
          <h2 className={styles.heading}>
            Conheça os equipamentos<br />que utilizamos
          </h2>
          <p className={styles.subheading}>
            Câmeras, leitores biométricos, painéis de alarme e soluções inteligentes
            — todos de marcas reconhecidas e com tecnologia de ponta.
          </p>
        </AnimatedSection>
      </div>

      <div className="container">
        <div className={styles.carouselWrapper}>
          <button
            className={`${styles.scrollBtn} ${styles.scrollBtnLeft}`}
            onClick={() => scroll('left')}
            aria-label="Rolar para esquerda"
          >
            <ChevronLeft size={20} />
          </button>

          <div className={styles.carousel} ref={scrollRef}>
            {EQUIPMENT.map((item, i) => (
              <AnimatedSection key={item.id} className={styles.card} delay={i * 60}>
                <div className={styles.cardImage}>
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <span className={`${styles.cardBadge} ${BADGE_STYLES[item.category] || ''}`}>
                    {BADGE_LABELS[item.category]}
                  </span>
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <button
            className={`${styles.scrollBtn} ${styles.scrollBtnRight}`}
            onClick={() => scroll('right')}
            aria-label="Rolar para direita"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}

import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'
import styles from './Equipment.module.css'

import cameraBullet from '../../assets/camera-bullet-1.png'
import speedDome from '../../assets/speed-dome.jpeg'
import controleFacial from '../../assets/controle-facial-1.png'
import biometria from '../../assets/biometria.png'
import xat2000 from '../../assets/xat-2000-lcd.png'
import armarioInteligente from '../../assets/armario-inteligente-1.png'
import torreMonitoramento from '../../assets/torre-monitoramento-1.png'

interface EquipmentItem {
  id: string
  category: 'cftv' | 'acesso' | 'alarme' | 'tech'
  title: string
  description: string
  image: string
}

const EQUIPMENT: EquipmentItem[] = [
  {
    id: 'camera-seguranca',
    category: 'cftv',
    title: 'Câmera de Segurança',
    description: 'Câmera Bullet de alta definição para ambientes internos e externos, com visão noturna e carcaça resistente.',
    image: cameraBullet,
  },
  {
    id: 'camera-ptz',
    category: 'cftv',
    title: 'Câmera Sistema PTZ',
    description: 'Speed Dome com movimentação 360°, zoom óptico potente e patrulhamento inteligente de áreas.',
    image: speedDome,
  },
  {
    id: 'controle-facial',
    category: 'acesso',
    title: 'Controle de Acesso Facial',
    description: 'Reconhecimento facial com alta precisão e rapidez para liberação sem contato físico.',
    image: controleFacial,
  },
  {
    id: 'leitor-biometrico',
    category: 'acesso',
    title: 'Leitor Biométrico',
    description: 'Identificação por impressão digital com tela informativa e registro detalhado de acessos.',
    image: biometria,
  },
  {
    id: 'sistemas-alarme',
    category: 'alarme',
    title: 'Sistemas de Alarme',
    description: 'Teclado XAT LCD integrado à central de monitoramento com sensores perimetrais e aviso instantâneo.',
    image: xat2000,
  },
  {
    id: 'armario-inteligente',
    category: 'tech',
    title: 'Armário Inteligente',
    description: 'Locker inteligente para recebimento e retirada segura e autônoma de encomendas.',
    image: armarioInteligente,
  },
  {
    id: 'torre-vigilancia',
    category: 'cftv',
    title: 'Torre de Vigilância',
    description: 'Torre de monitoramento autônoma para visão panorâmica e segurança de grandes perímetros.',
    image: torreMonitoramento,
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

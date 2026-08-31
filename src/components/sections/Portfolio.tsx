import { useState } from 'react'
import { X } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'
import styles from './Portfolio.module.css'

import torreMonitoramento1 from '../../assets/torre-monitoramento-1.png'
import armarioInteligente1 from '../../assets/armario-inteligente-1.png'
import centralMonitoramento from '../../assets/central-monitoramento.png'
import cameraBullet1 from '../../assets/camera-bullet-1.png'
import controleFacial1 from '../../assets/controle-facial-1.png'
import biometria from '../../assets/biometria.png'

interface PortfolioItem {
  id: string
  category: string
  title: string
  description: string
  image: string
  featured?: boolean
}

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'central',
    category: 'Monitoramento',
    title: 'Central de monitoramento BWE',
    description: 'Sala operacional com múltiplas telas e atendimento 24h',
    image: centralMonitoramento,
    featured: true,
  },
  {
    id: 'torre',
    category: 'CFTV',
    title: 'Torre de monitoramento',
    description: 'Câmeras em poste exclusivo com cobertura 360°',
    image: torreMonitoramento1,
    featured: false,
  },
  {
    id: 'armario',
    category: 'Tecnologia',
    title: 'Armário inteligente',
    description: 'Solução para recebimento seguro de encomendas',
    image: armarioInteligente1,
    featured: false,
  },
  {
    id: 'cameras',
    category: 'CFTV',
    title: 'Câmeras bullet instaladas',
    description: 'Vigilância externa de alta resolução',
    image: cameraBullet1,
  },
  {
    id: 'facial',
    category: 'Controle de acesso',
    title: 'Reconhecimento facial',
    description: 'Liberação de acesso por identificação facial',
    image: controleFacial1,
  },
  {
    id: 'biometria',
    category: 'Controle de acesso',
    title: 'Biometria digital',
    description: 'Acesso por impressão digital em portaria',
    image: biometria,
  },
]

export default function Portfolio() {
  const [lightbox, setLightbox] = useState<PortfolioItem | null>(null)

  return (
    <section id="projetos" className={styles.section}>
      <div className="container">
        <AnimatedSection className={styles.header}>
          <span className="section-label section-label-light">Nossos projetos</span>
          <div className="accent-line" />
          <h2 className={styles.heading}>
            Conheça trabalhos<br />realizados pela BWE
          </h2>
          <p className={styles.subheading}>
            Projetos reais de segurança eletrônica, automação e monitoramento
            executados pela nossa equipe em Guarulhos e região.
          </p>
        </AnimatedSection>

        <div className={styles.grid}>
          {PORTFOLIO_ITEMS.map((item, i) => (
            <AnimatedSection
              key={item.id}
              className={`${styles.item} ${item.featured ? styles.itemFeatured : ''}`}
              delay={i * 80}
            >
              <div
                className={styles.itemInner}
                onClick={() => setLightbox(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.itemImg}
                  loading="lazy"
                />
                <div className={styles.itemOverlay} />
                <div className={styles.itemLabel}>
                  <span className={styles.itemCategory}>{item.category}</span>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemDesc}>{item.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className={styles.lightbox} onClick={() => setLightbox(null)}>
          <img
            src={lightbox.image}
            alt={lightbox.title}
            className={styles.lightboxImg}
            onClick={e => e.stopPropagation()}
          />
          <button
            className={styles.lightboxClose}
            onClick={() => setLightbox(null)}
            aria-label="Fechar"
          >
            <X size={20} />
          </button>
          <div className={styles.lightboxCaption}>
            <strong>{lightbox.title}</strong>
            <span>{lightbox.description}</span>
          </div>
        </div>
      )}
    </section>
  )
}

import { useState } from 'react'
import { X } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'
import styles from './Portfolio.module.css'

import torreVigilancia2 from '../../assets/torre-vigilancia-2.webp'
import boxInteligente from '../../assets/box-inteligente.webp'
import centralMonitoramento from '../../assets/central-monitoramento.png'
import cameraBullet1 from '../../assets/camera-bullet-1.png'
import controleFacialNovo from '../../assets/controle-facial-novo.webp'
import leitorPlacas from '../../assets/leitor-placas.webp'

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
    title: 'Torre de vigilância',
    description: 'Câmeras em poste exclusivo, com opção de integração ao Smart Sampa',
    image: torreVigilancia2,
    featured: false,
  },
  {
    id: 'armario',
    category: 'Tecnologia',
    title: 'Armário inteligente',
    description: 'Solução para recebimento seguro de encomendas',
    image: boxInteligente,
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
    title: 'Acesso facial',
    description: 'Liberação de acesso por reconhecimento facial na portaria',
    image: controleFacialNovo,
  },
  {
    id: 'leitor-placas',
    category: 'Tecnologia',
    title: 'Leitor de placas',
    description: 'Identificação automática de veículos na entrada',
    image: leitorPlacas,
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
            executados pela nossa equipe em São Paulo, Grande São Paulo e Interior.
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

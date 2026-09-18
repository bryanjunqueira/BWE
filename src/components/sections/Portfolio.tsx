import { useState } from 'react'
import { X } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'
import styles from './Portfolio.module.css'

// Fotos da pasta "fotos site" — nenhuma delas se repete em outra seção
import armarioInteligente1 from '../../assets/armario-inteligente-1.webp'
import speedDomePark from '../../assets/speed-dome-park.webp'
import cameraBullet2 from '../../assets/camera-bullet-2.webp'
import speedDomeStreet from '../../assets/speed-dome-street.webp'
import xat2000 from '../../assets/xat-2000-lcd.webp'
import speedDome from '../../assets/speed-dome.webp'
import casaAutomacao from '../../assets/casa-automacao.webp'

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
    id: 'armario-condominio',
    category: 'Tecnologia',
    title: 'Armário inteligente em condomínio',
    description: 'Locker instalado no hall para recebimento autônomo de encomendas',
    image: armarioInteligente1,
    featured: true,
  },
  {
    id: 'speed-dome-park',
    category: 'CFTV',
    title: 'Speed Dome em área externa',
    description: 'Monitoramento de perímetro aberto com zoom óptico e giro 360°',
    image: speedDomePark,
    featured: true,
  },
  {
    id: 'cameras-bullet',
    category: 'CFTV',
    title: 'Câmeras bullet instaladas',
    description: 'Duplo ponto de vigilância externa com caixa de passagem organizada',
    image: cameraBullet2,
  },
  {
    id: 'speed-dome-street',
    category: 'CFTV',
    title: 'Speed Dome em fachada',
    description: 'Câmera PTZ em braço alto para cobrir toda a frente do imóvel',
    image: speedDomeStreet,
  },
  {
    id: 'alarme-residencial',
    category: 'Alarmes',
    title: 'Central de alarme residencial',
    description: 'Teclado LCD para ativação por setor, integrado ao monitoramento 24h',
    image: xat2000,
  },
  {
    id: 'speed-dome-comercio',
    category: 'CFTV',
    title: 'Câmera dome em comércio',
    description: 'Cobertura de entrada e circulação com câmera dome discreta',
    image: speedDome,
  },
  {
    id: 'automacao-residencial',
    category: 'Tecnologia',
    title: 'Automação residencial',
    description: 'Casa com automação integrada ao sistema de segurança',
    image: casaAutomacao,
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

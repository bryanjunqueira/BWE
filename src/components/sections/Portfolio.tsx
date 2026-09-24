import { useState } from 'react'
import { X } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'
import styles from './Portfolio.module.css'

// Fotos e ordem da pasta "fotos-projetos" — nenhuma se repete em outra seção
import leitorFacial from '../../assets/controle-facial-1.webp'
import torreMonitoramento from '../../assets/proj-torre-vigilancia.webp'
import armarioInteligente from '../../assets/armario-inteligente-1.webp'
import claviculario from '../../assets/proj-claviculario.webp'
import antenaVeicular from '../../assets/proj-antena-veicular.webp'
import catraca from '../../assets/catraca-1.webp'
import sistemaCftv from '../../assets/proj-sistema-cftv.webp'

interface PortfolioItem {
  id: string
  category: string
  title: string
  description: string
  image: string
  featured?: boolean
  /**
   * Ponto de foco do recorte (object-position). Fotos verticais em tiles largos
   * e baixos são cortadas pelo meio; aqui definimos o que não pode sumir.
   */
  imagePosition?: string
}

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'leitor-facial',
    category: 'Controle de acesso',
    title: 'Leitor Facial',
    description: 'Liberação de acesso por reconhecimento facial no portão social',
    image: leitorFacial,
    featured: true,
  },
  {
    id: 'torre-monitoramento',
    category: 'CFTV',
    title: 'Torre de Monitoramento',
    description: 'Poste com câmeras cobrindo via pública e entorno, 24 horas',
    image: torreMonitoramento,
    featured: true,
  },
  {
    id: 'armario-inteligente',
    category: 'Tecnologia',
    title: 'Armário Inteligente',
    description: 'Locker instalado no hall para recebimento autônomo de encomendas',
    image: armarioInteligente,
  },
  {
    id: 'claviculario-inteligente',
    category: 'Controle de acesso',
    title: 'Claviculário Inteligente',
    description: 'Guarda de chaves com RFID e registro de retirada e devolução',
    image: claviculario,
  },
  {
    id: 'antena-veicular',
    category: 'Tecnologia',
    title: 'Antena Veicular',
    description: 'Identificação automática de veículos para liberação do portão',
    image: antenaVeicular,
    // Foto vertical: sem isso o corte deixa a antena cortada no topo do tile
    imagePosition: 'center 20%',
  },
  {
    id: 'catracas',
    category: 'Controle de acesso',
    title: 'Catracas',
    description: 'Controle de passagem em portarias e recepções com leitor facial',
    image: catraca,
    // Foto vertical: sem isso o corte mostra só o corpo, sem o leitor facial
    imagePosition: 'center 5%',
  },
  {
    id: 'sistema-cftv',
    category: 'CFTV',
    title: 'Sistema de CFTV',
    description: 'Central com dezenas de câmeras monitoradas em tempo real',
    image: sistemaCftv,
  },
]

export default function Portfolio() {
  const [lightbox, setLightbox] = useState<PortfolioItem | null>(null)

  return (
    <section id="projetos" className={styles.section}>
      <div className="container">
        <AnimatedSection className={styles.header}>
          <span className="section-label section-label-light">Projetos</span>
          <div className="accent-line" />
          <h2 className={styles.heading}>
            Conheça nossos<br />projetos
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
                  style={item.imagePosition ? { objectPosition: item.imagePosition } : undefined}
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

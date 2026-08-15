import AnimatedSection from '../ui/AnimatedSection'
import styles from './Partners.module.css'

const PARTNERS = [
  { name: 'Intelbras',    abbr: 'Intelbras'  },
  { name: 'PositivoSeg', abbr: 'PositivoSeg' },
  { name: 'Seventh',     abbr: 'Seventh'     },
  { name: 'ID Control',  abbr: 'ID Control'  },
  { name: 'JFL Alarmes', abbr: 'JFL Alarmes' },
]

// Duplicate array for seamless infinite scroll
const DOUBLED = [...PARTNERS, ...PARTNERS, ...PARTNERS]

export default function Partners() {
  return (
    <section id="parceiros" className={`section ${styles.section}`}>
      <div className="container">
        <AnimatedSection className={styles.header}>
          <span className="section-label">Ecossistema de parceiros</span>
          <div className="accent-line" />
          <h2 className={styles.heading}>
            Tecnologia das melhores<br />marcas do mercado
          </h2>
          <p className={styles.subheading}>
            Trabalhamos com fabricantes líderes do setor de segurança eletrônica,
            garantindo equipamentos com qualidade comprovada e suporte de fábrica.
          </p>
        </AnimatedSection>
      </div>

      {/* Marquee — full width, no container */}
      <div className={styles.marqueeWrapper} aria-label="Marcas parceiras da BWE Monitoramento">
        <div className={styles.marqueeTrack}>
          {DOUBLED.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className={styles.partnerItem}
              aria-label={partner.name}
            >
              <span className={styles.partnerName}>{partner.abbr}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <AnimatedSection delay={200}>
          <p className={styles.partnerNote}>
            Aguardando logos oficiais dos parceiros — as marcas serão inseridas quando disponíveis.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}

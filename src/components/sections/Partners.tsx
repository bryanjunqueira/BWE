import AnimatedSection from '../ui/AnimatedSection'
import styles from './Partners.module.css'
import intelbrasLogo from '../../assets/partners/intelbras.png'
import controlidLogo from '../../assets/partners/controlid.png'
import jflLogo from '../../assets/partners/jfl.png'
import positivoLogo from '../../assets/partners/positivo.png'
import segwareLogo from '../../assets/partners/segware.png'
import hikvisionLogo from '../../assets/partners/hikvision.png'

type Partner = {
  name: string
  logo: string
}

const PARTNERS: Partner[] = [
  { name: 'Intelbras',    logo: intelbrasLogo },
  { name: 'Control iD',   logo: controlidLogo },
  { name: 'JFL Alarmes',  logo: jflLogo },
  { name: 'Positivo Seg', logo: positivoLogo },
  { name: 'Segware',      logo: segwareLogo },
  { name: 'Hikvision',    logo: hikvisionLogo },
]

// Duplicando a lista para garantir animação contínua e sem sobressaltos no carrossel infinito
const MARQUEE_ITEMS = [...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS]

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
            Trabalhamos com os principais fabricantes do setor de segurança eletrônica,
            garantindo equipamentos com qualidade comprovada, tecnologia de ponta e suporte de fábrica.
          </p>
        </AnimatedSection>
      </div>

      {/* Carrossel de parceiros em rolagem contínua */}
      <div className={styles.marqueeWrapper} aria-label="Marcas parceiras da BWE Monitoramento">
        <div className={styles.marqueeTrack}>
          {MARQUEE_ITEMS.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className={styles.partnerItem}
              aria-label={partner.name}
            >
              <img
                src={partner.logo}
                alt={`Logo ${partner.name}`}
                className={styles.partnerLogoImg}
                loading="eager"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

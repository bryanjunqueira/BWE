import { Shield, Camera, Fingerprint, MonitorSmartphone, Cpu } from 'lucide-react'
import { Link } from 'react-router-dom'
import AnimatedSection from '../ui/AnimatedSection'
import styles from './Services.module.css'
import { SOLUTIONS, getSolutionPath } from '../../data/solutions'

const ICONS = {
  monitoramento: <Shield size={26} />,
  cftv: <Camera size={26} />,
  'controle-acesso': <Fingerprint size={26} />,
  'portaria-remota': <MonitorSmartphone size={26} />,
  tecnologia: <Cpu size={26} />,
}

export default function Services() {
  return (
    <section id="servicos" className={`section ${styles.services}`}>
      <div className="container">

        <AnimatedSection className={styles.header}>
          <span className="section-label">O que fazemos</span>
          <div className="accent-line" />
          <h2 className={styles.heading}>
            Soluções completas em<br />segurança eletrônica
          </h2>
          <p className={styles.subheading}>
            Da instalação ao monitoramento contínuo — cobrimos cada aspecto
            da proteção do seu patrimônio.
          </p>
        </AnimatedSection>

        <div className={styles.list}>
          {SOLUTIONS.map((service, index) => (
            <AnimatedSection
              key={service.id}
              className={`${styles.item} ${index % 2 !== 0 ? styles.itemReverse : ''} ${service.image ? styles.itemWithImage : ''} ${['cftv', 'portaria-remota'].includes(service.id) ? styles.itemBlue : ''}`}
              delay={index * 80}
            >
              {/* Content side */}
              <div className={styles.itemContent}>
                <div className={styles.iconBox}>
                  {ICONS[service.id as keyof typeof ICONS]}
                </div>
                <h3 className={styles.itemTitle}>{service.title}</h3>
                <p className={styles.itemDesc}>{service.description}</p>
                <p className={styles.itemDetail}>{service.detail}</p>
                <Link
                  to={getSolutionPath(service.slug)}
                  className={`btn btn-ghost-blue btn-sm ${styles.itemCta}`}
                  id={`service-cta-${service.id}`}
                >
                  Conheça
                </Link>
              </div>

              {/* Image side */}
              {service.image && (
                <div className={styles.itemImageWrapper}>
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className={styles.itemImage}
                    loading="lazy"
                  />
                  <div className={styles.itemImageOverlay} />
                </div>
              )}

              {/* No-image decorative side (fallback) */}
              {!service.image && (
                <div className={styles.itemDecor} aria-hidden="true">
                  <div className={styles.itemDecorIcon}>
                    {ICONS[service.id as keyof typeof ICONS]}
                  </div>
                </div>
              )}
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  )
}

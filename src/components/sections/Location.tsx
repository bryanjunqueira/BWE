import { MapPin, Navigation } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'
import styles from './Location.module.css'

const address = 'Estrada Presidente Juscelino Kubitschek de Oliveira, 2615, Loja 28 - Guarulhos - SP'
const mapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`
const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`

export default function Location() {
  return (
    <section id="localizacao" className={`section ${styles.section}`}>
      <div className={`container ${styles.layout}`}>
        <AnimatedSection className={styles.content}>
          <span className="section-label">Localização</span>
          <div className="accent-line" />
          <h2>Visite a BWE em Guarulhos</h2>
          <p>
            Estamos na Estrada Presidente Juscelino Kubitschek de Oliveira, em uma região
            de fácil acesso para atendimento, visitas técnicas e alinhamento de projetos.
          </p>
          <div className={styles.addressCard}>
            <MapPin size={20} />
            <span>{address}</span>
          </div>
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <Navigation size={18} />
            Abrir rota no Maps
          </a>
        </AnimatedSection>

        <AnimatedSection className={styles.mapPanel} delay={120}>
          <iframe
            src={mapsUrl}
            className={styles.map}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da BWE Monitoramento em Guarulhos-SP"
          />
        </AnimatedSection>
      </div>
    </section>
  )
}

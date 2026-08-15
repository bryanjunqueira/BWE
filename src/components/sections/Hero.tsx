import { MessageCircle, FileText, ChevronDown } from 'lucide-react'
import styles from './Hero.module.css'
import heroBg from '../../assets/cctv-security-camera-ceiling.jpg'

export default function Hero() {
  const scrollToContact = () => {
    const el = document.getElementById('contato')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollDown = () => {
    const el = document.getElementById('sobre')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="inicio" className={styles.hero} aria-label="Seção principal">
      {/* Background image with overlay */}
      <div
        className={styles.bg}
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-hidden="true"
      />
      <div className={styles.overlay} aria-hidden="true" />

      {/* Subtle grid texture */}
      <div className={styles.gridTexture} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        <div className={styles.contentInner}>

          <h1 className={styles.heading}>
            Segurança inteligente<br />
            <span className={styles.headingAccent}>para proteger o que importa</span>
          </h1>

          <p className={styles.subheading}>
            Monitoramento, CFTV, controle de acesso e soluções em segurança eletrônica
            para residências e empresas — com atendimento ágil e projetos sob medida.
          </p>

          <div className={styles.actions}>
            <button
              className="btn btn-primary btn-lg"
              onClick={scrollToContact}
              id="hero-cta-orcamento"
            >
              <FileText size={18} />
              Solicitar orçamento
            </button>

            <a
              href="https://wa.me/5511954744900?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20um%20orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn-outline-white btn-lg`}
              id="hero-cta-whatsapp"
            >
              <MessageCircle size={18} />
              Falar pelo WhatsApp
            </a>
          </div>

          <div className={styles.trustRow}>
            <div className={styles.trustItem}>
              <span className={styles.trustDot} />
              Projetos sob medida
            </div>
            <div className={styles.trustDivider} />
            <div className={styles.trustItem}>
              <span className={styles.trustDot} />
              Atendimento ágil
            </div>
            <div className={styles.trustDivider} />
            <div className={styles.trustItem}>
              <span className={styles.trustDot} />
              Manutenção preventiva
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        className={styles.scrollIndicator}
        onClick={scrollDown}
        aria-label="Rolar para a próxima seção"
      >
        <ChevronDown size={22} />
      </button>
    </section>
  )
}

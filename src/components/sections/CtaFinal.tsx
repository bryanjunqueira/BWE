import { MessageCircle } from 'lucide-react'
import styles from './CtaFinal.module.css'
import bgImg from '../../assets/cctv-security-camera-ceiling.jpg'

export default function CtaFinal() {
  const scrollToContact = () => {
    const el = document.getElementById('contato')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles.section} aria-label="Chamada para ação">
      <div
        className={styles.bg}
        style={{ backgroundImage: `url(${bgImg})` }}
        aria-hidden="true"
      />
      <div className={styles.overlay} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        <p className={styles.eyebrow}>Proteção que você pode confiar</p>
        <h2 className={styles.heading}>
          Proteja seu patrimônio com<br />quem entende de segurança.
        </h2>
        <p className={styles.subheading}>
          Fale com a BWE Monitoramento e encontre a solução ideal para o seu imóvel.
          Atendimento personalizado, projetos sob medida e suporte contínuo.
        </p>
        <div className={styles.actions}>
          <button
            className="btn btn-primary btn-lg"
            onClick={scrollToContact}
            id="cta-final-orcamento"
          >
            Solicitar orçamento
          </button>
          <a
            href="https://wa.me/5511954744900?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-white btn-lg"
            id="cta-final-whatsapp"
          >
            <MessageCircle size={18} />
            Falar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

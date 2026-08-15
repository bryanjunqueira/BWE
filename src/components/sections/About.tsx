import AnimatedSection from '../ui/AnimatedSection'
import styles from './About.module.css'
import aboutImg from '../../assets/man-using-tablet-his-smart-home.jpg'

export default function About() {
  return (
    <section id="sobre" className={`section ${styles.about}`}>
      <div className={`container ${styles.grid}`}>

        {/* Text column */}
        <div className={styles.textCol}>
          <AnimatedSection>
            <span className="section-label">Quem somos</span>
            <div className="accent-line" />
            <h2 className={styles.heading}>
              Uma empresa construída<br />sobre confiança e resultado
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <p className={styles.leadText}>
              Desde 2018, a BWE Monitoramento se dedica a fornecer segurança
              eletrônica de alto nível para residências e empresas em Guarulhos
              e região.
            </p>

            <p className={styles.bodyText}>
              Nossa expertise consolida-se através de um leque abrangente de
              serviços essenciais: monitoramento de alarmes, vigilância por CFTV
              (sistema de câmeras), sistemas robustos de controle de acesso,
              eficiência operacional com portaria remota e desenvolvimento de
              soluções em tecnologia que garantem sua tranquilidade e controle total.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className={styles.pillars}>
              {[
                { label: 'Projetos sob medida',   desc: 'Cada instalação é planejada para a realidade do seu imóvel.' },
                { label: 'Tecnologia de qualidade', desc: 'Equipamentos de fabricantes reconhecidos e materiais duráveis.' },
                { label: 'Suporte contínuo',       desc: 'Manutenção preventiva para máxima disponibilidade do sistema.' },
              ].map(pillar => (
                <div key={pillar.label} className={styles.pillar}>
                  <div className={styles.pillarLine} />
                  <div>
                    <strong className={styles.pillarLabel}>{pillar.label}</strong>
                    <p className={styles.pillarDesc}>{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <a
              href="https://wa.me/5511954744900?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20a%20BWE%20Monitoramento."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              id="about-cta-whatsapp"
            >
              Fale com nossa equipe
            </a>
          </AnimatedSection>
        </div>

        {/* Image column */}
        <AnimatedSection className={styles.imageCol} delay={150}>
          <div className={styles.imageWrapper}>
            <img
              src={aboutImg}
              alt="Pessoa utilizando painel de segurança residencial"
              className={styles.image}
            />
            <div className={styles.imageOverlay} />
            <div className={styles.imageBadge}>
              <span className={styles.badgeYear}>2018</span>
              <span className={styles.badgeText}>Fundação da empresa</span>
            </div>
          </div>
          {/* Decorative block */}
          <div className={styles.decorBlock} aria-hidden="true" />
        </AnimatedSection>

      </div>
    </section>
  )
}

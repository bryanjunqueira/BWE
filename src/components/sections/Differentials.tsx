import { Settings, Package, Zap, Wrench, ShieldCheck, Headphones } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'
import styles from './Differentials.module.css'
import bgImg from '../../assets/medium-shot-blurry-woman-indoors.jpg'

const DIFFS = [
  {
    icon: <Settings size={22} />,
    title: 'Projetos sob medida',
    desc: 'Cada projeto parte de uma análise técnica do seu imóvel. Nada de soluções genéricas — o sistema é dimensionado para a sua realidade.',
  },
  {
    icon: <Package size={22} />,
    title: 'Materiais de alta durabilidade',
    desc: 'Utilizamos equipamentos e materiais de fabricantes reconhecidos no mercado, garantindo vida útil prolongada e desempenho consistente.',
  },
  {
    icon: <Zap size={22} />,
    title: 'Atendimento ágil',
    desc: 'Resposta rápida tanto no pré-venda quanto no suporte pós-instalação. Quando você precisa, a BWE está disponível.',
  },
  {
    icon: <Wrench size={22} />,
    title: 'Manutenção preventiva',
    desc: 'Acompanhamento contínuo do sistema para identificar e corrigir potenciais falhas antes que se tornem problemas reais.',
  },
  {
    icon: <ShieldCheck size={22} />,
    title: 'Confiabilidade comprovada',
    desc: 'Proteção robusta e redução de falhas. Seu investimento em segurança eletrônica deve funcionar quando você mais precisar.',
  },
  {
    icon: <Headphones size={22} />,
    title: 'Suporte técnico especializado',
    desc: 'Equipe técnica treinada e pronta para atender dúvidas, ajustes e emergências com o compromisso de resolver rapidamente.',
  },
]

export default function Differentials() {
  return (
    <section id="diferenciais" className={styles.section}>

      {/* Background half */}
      <div className={styles.bgHalf} aria-hidden="true">
        <img
          src={bgImg}
          alt=""
          className={styles.bgImg}
          loading="lazy"
        />
        <div className={styles.bgOverlay} />
      </div>

      <div className={`container ${styles.inner}`}>

        {/* Header */}
        <AnimatedSection className={styles.header}>
          <span className="section-label section-label-light">Por que a BWE</span>
          <div className="accent-line" />
          <h2 className={styles.heading}>
            O que nos diferencia<br />no mercado
          </h2>
          <p className={styles.subheading}>
            Nossos diferenciais baseiam-se em projetos sob medida, instalação com
            materiais de alta durabilidade e atendimento ágil. Manutenção preventiva
            contínua, garantindo proteção robusta e total confiabilidade para seu
            investimento a longo prazo.
          </p>
        </AnimatedSection>

        {/* Grid */}
        <div className={styles.grid}>
          {DIFFS.map((diff, i) => (
            <AnimatedSection key={diff.title} className={styles.card} delay={i * 80}>
              <div className={styles.cardIcon}>{diff.icon}</div>
              <h3 className={styles.cardTitle}>{diff.title}</h3>
              <p className={styles.cardDesc}>{diff.desc}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

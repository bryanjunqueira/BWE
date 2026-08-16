import { Link, Navigate, useParams } from 'react-router-dom'
import {
  ArrowRight, Camera, CheckCircle2, Cpu, Fingerprint, Headphones, MessageCircle,
  MonitorSmartphone, Phone, Shield, ShieldCheck, Wrench, ClipboardCheck,
} from 'lucide-react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import WhatsAppFloat from '../components/ui/WhatsAppFloat'
import { SOLUTIONS } from '../data/solutions'
import styles from './SolutionPage.module.css'

const ICONS = {
  monitoramento: <Shield size={26} />,
  cftv: <Camera size={26} />,
  'controle-acesso': <Fingerprint size={26} />,
  'portaria-remota': <MonitorSmartphone size={26} />,
  tecnologia: <Cpu size={26} />,
}

const INFO_CARDS = [
  {
    title: 'Consultoria especializada',
    text: 'A equipe avalia a necessidade do local e orienta a solução mais adequada para o projeto.',
    icon: <Phone size={42} />,
  },
  {
    title: 'Projeto sob medida',
    text: 'Cada proposta considera o tipo de imóvel, pontos de risco, rotina de uso e nível de proteção esperado.',
    icon: <ClipboardCheck size={42} />,
  },
  {
    title: 'Profissionais capacitados',
    text: 'A instalação é conduzida por equipe técnica preparada para sistemas de segurança eletrônica.',
    icon: <ShieldCheck size={42} />,
  },
  {
    title: 'Funcionamento orientado',
    text: 'Após a implantação, o cliente recebe orientação básica de uso, acesso e boas práticas da solução.',
    icon: <MonitorSmartphone size={42} />,
  },
  {
    title: 'Suporte técnico',
    text: 'A BWE oferece suporte para dúvidas relacionadas à instalação, configuração e operação dos equipamentos.',
    icon: <Headphones size={42} />,
  },
  {
    title: 'Manutenção preventiva',
    text: 'A manutenção ajuda a preservar o desempenho dos equipamentos e identificar ajustes necessários.',
    icon: <Wrench size={42} />,
  },
]

export default function SolutionPage() {
  const { slug } = useParams()
  const solution = SOLUTIONS.find(item => item.slug === slug)

  if (!solution) return <Navigate to="/" replace />

  const whatsappText = encodeURIComponent(`Olá, tenho interesse em ${solution.title}.`)

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <div className={styles.heroText}>
              <Link to="/#servicos" className={styles.backLink}>Soluções BWE</Link>
              <div className={styles.iconBox}>{ICONS[solution.id as keyof typeof ICONS]}</div>
              <h1>{solution.title}</h1>
              <p>{solution.description}</p>
              <div className={styles.actions}>
                <a
                  href={`https://wa.me/5511954744900?text=${whatsappText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg"
                >
                  <MessageCircle size={18} />
                  Falar com especialista
                </a>
                <Link to="/#contato" className="btn btn-ghost-blue btn-lg">
                  Solicitar orçamento
                </Link>
              </div>
            </div>

            <div className={styles.heroImageWrap}>
              <img src={solution.image} alt={solution.imageAlt} className={styles.heroImage} />
            </div>
          </div>
        </section>

        <section className={`section ${styles.details}`}>
          <div className={`container ${styles.detailsGrid}`}>
            <div className={styles.detailCard}>
              <span className="section-label section-label-light">Como funciona</span>
              <h2>Projeto direto, técnico e sob medida</h2>
              <p>{solution.detail}</p>
            </div>

            <div className={styles.listCard}>
              <h3>Principais recursos</h3>
              <ul>
                {solution.bullets.map(item => (
                  <li key={item}>
                    <CheckCircle2 size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.listCard}>
              <h3>Indicado para</h3>
              <ul>
                {solution.idealFor.map(item => (
                  <li key={item}>
                    <CheckCircle2 size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.featureSection}>
          <div className={`container ${styles.featureHeader}`}>
            <span className="section-label">Solução BWE</span>
            <h2>O essencial para decidir com segurança</h2>
            <p>{solution.overview[0]}</p>
          </div>
          <div className={`container ${styles.featureGrid}`}>
            <FeatureList title="Benefícios para o cliente" items={solution.benefits} />
            <FeatureList title="Aplicações recomendadas" items={solution.applications} />
            <FeatureList title="Recursos técnicos" items={solution.technical} />
          </div>
        </section>

        <section className={styles.infoSection}>
          <div className={`container ${styles.infoGrid}`}>
            {INFO_CARDS.map((card, index) => (
              <article className={`${styles.infoCard} ${index === 1 ? styles.infoCardActive : ''}`} key={card.title}>
                <div className={styles.infoIcon}>{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={`section ${styles.helpSection}`}>
          <div className={`container ${styles.helpCard}`}>
            <h2>Precisa de Ajuda? Fale Conosco!</h2>
            <p>Tenha tranquilidade ao receber atendimento de uma empresa especialista em segurança eletrônica e tecnologia.</p>
            <a
              href={`https://wa.me/5511954744900?text=${whatsappText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              Fale com a BWE
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

function FeatureList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className={styles.featureCard}>
      <h3>{title}</h3>
      <ul>
        {items.map(item => (
          <li key={item}>
            <ArrowRight size={16} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

import { Shield, Camera, Fingerprint, MonitorSmartphone, Cpu } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'
import styles from './Services.module.css'
import intercomImg from '../../assets/back-view-deliverer-ringing-intercom-gate-customer-s-house-while-delivering-packages.jpg'
import cctvImg from '../../assets/cctv-security-camera-ceiling.jpg'
import fingerprintImg from '../../assets/fingerprint.jpg'
import homeAutomationImg from '../../assets/tech-automation.jpg'
import tabletSmartHomeImg from '../../assets/man-using-tablet-his-smart-home.jpg'

interface Service {
  id: string
  icon: React.ReactNode
  title: string
  description: string
  detail: string
  image?: string
  imageAlt?: string
}

const SERVICES: Service[] = [
  {
    id: 'monitoramento',
    icon: <Shield size={26} />,
    title: 'Monitoramento de alarmes',
    description:
      'Central de monitoramento que age imediatamente ao menor sinal de anomalia, garantindo resposta rápida em situações de risco.',
    detail:
      'Integração com sensores de movimento, abertura de portas e janelas, sirenes e comunicação direta com o responsável pelo imóvel.',
    image: homeAutomationImg,
    imageAlt: 'Monitoramento residencial e comercial por dispositivo de automação e segurança',
  },
  {
    id: 'cftv',
    icon: <Camera size={26} />,
    title: 'CFTV — Sistema de câmeras',
    description:
      'Vigilância por câmeras de alta resolução, cobrindo pontos estratégicos do imóvel com imagens nítidas 24 horas por dia.',
    detail:
      'Câmeras internas e externas, gravação em nuvem ou local, acesso remoto pelo smartphone e armazenamento seguro das imagens.',
    image: cctvImg,
    imageAlt: 'Câmera CFTV dome instalada em teto de ambiente comercial',
  },
  {
    id: 'controle-acesso',
    icon: <Fingerprint size={26} />,
    title: 'Controle de acesso',
    description:
      'Sistemas de controle de entrada que combinam biometria, leitores de proximidade, senhas e integração com portões e cancelas.',
    detail:
      'Ideal para empresas, condomínios e residências que precisam registrar e restringir o acesso de pessoas a áreas específicas.',
    image: fingerprintImg,
    imageAlt: 'Leitor biométrico de controle de acesso por impressão digital',
  },
  {
    id: 'portaria-remota',
    icon: <MonitorSmartphone size={26} />,
    title: 'Portaria remota',
    description:
      'Substituição ou apoio à portaria presencial com atendimento e liberação de acesso realizado remotamente, com segurança e agilidade.',
    detail:
      'Integração com interfone, câmeras e controle de acesso, permitindo identificar e autorizar visitantes de qualquer lugar.',
    image: intercomImg,
    imageAlt: 'Entregador utilizando interfone com câmera integrada em portão residencial',
  },
  {
    id: 'tecnologia',
    icon: <Cpu size={26} />,
    title: 'Soluções em tecnologia',
    description:
      'Desenvolvimento e integração de soluções tecnológicas personalizadas que ampliam a segurança e a eficiência operacional.',
    detail:
      'Automação residencial integrada à segurança, dashboards de monitoramento e consultoria técnica para projetos complexos.',
    image: tabletSmartHomeImg,
    imageAlt: 'Profissional utilizando tablet para controle de sistema de segurança inteligente',
  },
]

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
          {SERVICES.map((service, index) => (
            <AnimatedSection
              key={service.id}
              className={`${styles.item} ${index % 2 !== 0 ? styles.itemReverse : ''} ${service.image ? styles.itemWithImage : ''}`}
              delay={index * 80}
            >
              {/* Content side */}
              <div className={styles.itemContent}>
                <div className={styles.iconBox}>
                  {service.icon}
                </div>
                <h3 className={styles.itemTitle}>{service.title}</h3>
                <p className={styles.itemDesc}>{service.description}</p>
                <p className={styles.itemDetail}>{service.detail}</p>
                <a
                  href={`https://wa.me/5511954744900?text=Olá,%20tenho%20interesse%20em%20${encodeURIComponent(service.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn btn-ghost-blue btn-sm ${styles.itemCta}`}
                  id={`service-cta-${service.id}`}
                >
                  Saiba mais
                </a>
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
                    {service.icon}
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

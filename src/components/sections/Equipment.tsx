import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'
import styles from './Equipment.module.css'

// Ordem, legendas e fotos definidas pela cliente
import cameraBullet from '../../assets/camera-bullet-nova.webp'
import speedDome from '../../assets/speed-dome-ambientada.webp'
import leitorFacial from '../../assets/leitor-facial.webp'
import sistemaAlarme from '../../assets/sistema-alarme.webp'
import boxInteligente from '../../assets/box-inteligente.webp'
import torreMonitoramento from '../../assets/torre-monitoramento-2.webp'
import claviculario from '../../assets/claviculario-chaves.webp'
import catraca from '../../assets/catraca-2.webp'

interface EquipmentItem {
  id: string
  title: string
  description: string
  image: string
}

const EQUIPMENT: EquipmentItem[] = [
  {
    id: 'camera-bullet',
    title: 'Câmera Bullet',
    description: 'Câmera Bullet de alta definição para ambientes internos e externos, com visão noturna e carcaça resistente.',
    image: cameraBullet,
  },
  {
    id: 'camera-speed-dome',
    title: 'Câmera Speed Dome Ambientada',
    description: 'Speed Dome com movimentação 360°, zoom óptico potente e patrulhamento inteligente de áreas.',
    image: speedDome,
  },
  {
    id: 'leitor-facial',
    title: 'Leitor Facial',
    description: 'Reconhecimento facial com alta precisão e rapidez para liberação sem contato físico.',
    image: leitorFacial,
  },
  {
    id: 'sistema-alarme',
    title: 'Sistema de Alarme',
    description: 'Central, sensores de presença e abertura, controle remoto e sirene para proteção completa do perímetro.',
    image: sistemaAlarme,
  },
  {
    id: 'armario-inteligente',
    title: 'Armário Inteligente',
    description: 'Locker inteligente instalado na portaria para recebimento e retirada de encomendas de forma segura e autônoma.',
    image: boxInteligente,
  },
  {
    id: 'torre-monitoramento',
    title: 'Torre de Monitoramento com Sistema Smart Sampa',
    description: 'Torre de monitoramento com câmeras em poste exclusivo, interligada ao Smart Sampa para cobertura de grandes perímetros.',
    image: torreMonitoramento,
  },
  {
    id: 'claviculario',
    title: 'Claviculário de Chaves',
    description: 'Armário eletrônico com RFID para guarda e controle de chaves, com registro de quem retirou e devolveu.',
    image: claviculario,
  },
  {
    id: 'catraca',
    title: 'Catraca',
    description: 'Catraca com leitor facial para organizar e registrar a passagem de pessoas em portarias e recepções.',
    image: catraca,
  },
]

export default function Equipment() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    const amount = 300
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    })
  }

  return (
    <section id="equipamentos" className={styles.section}>
      <div className="container">
        <AnimatedSection className={styles.header}>
          <span className="section-label">Equipamentos</span>
          <div className="accent-line" />
          <h2 className={styles.heading}>
            Conheça os equipamentos<br />que utilizamos
          </h2>
          <p className={styles.subheading}>
            Câmeras de segurança, controle de acesso facial, sistemas de alarme, torres
            de vigilância, armário inteligente e outras soluções inovadoras, desenvolvidas
            com tecnologia de ponta e equipamentos de marcas reconhecidas no mercado.
          </p>
        </AnimatedSection>
      </div>

      <div className="container">
        <div className={styles.carouselWrapper}>
          <button
            className={`${styles.scrollBtn} ${styles.scrollBtnLeft}`}
            onClick={() => scroll('left')}
            aria-label="Rolar para esquerda"
          >
            <ChevronLeft size={20} />
          </button>

          <div className={styles.carousel} ref={scrollRef}>
            {EQUIPMENT.map((item, i) => (
              <AnimatedSection key={item.id} className={styles.card} delay={i * 60}>
                <div className={styles.cardImage}>
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <button
            className={`${styles.scrollBtn} ${styles.scrollBtnRight}`}
            onClick={() => scroll('right')}
            aria-label="Rolar para direita"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}

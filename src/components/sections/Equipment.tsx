import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'
import styles from './Equipment.module.css'

import cameraBullet from '../../assets/camera-bullet-nova.webp'
import speedDome from '../../assets/speed-dome-ambientada.webp'
import leitorFacial from '../../assets/leitor-facial.webp'
import catraca from '../../assets/catraca-1.webp'
import xat8000 from '../../assets/xat-8000.webp'
import sistemaAlarme from '../../assets/sistema-alarme.webp'
import leitorPlacas from '../../assets/leitor-placas.webp'
import portariaRemotaHibrida from '../../assets/portaria-remota-hibrida.webp'
import armarioInteligente from '../../assets/box-inteligente.webp'
import claviculario from '../../assets/claviculario-chaves.webp'
import torreVigilancia from '../../assets/torre-vigilancia-2.webp'

interface EquipmentItem {
  id: string
  title: string
  description: string
  image: string
}

const EQUIPMENT: EquipmentItem[] = [
  {
    id: 'camera-seguranca',
    title: 'Câmera de Segurança',
    description: 'Câmera Bullet de alta definição para ambientes internos e externos, com visão noturna e carcaça resistente.',
    image: cameraBullet,
  },
  {
    id: 'camera-ptz',
    title: 'Câmera Sistema PTZ',
    description: 'Speed Dome com movimentação 360°, zoom óptico potente e patrulhamento inteligente de áreas.',
    image: speedDome,
  },
  {
    id: 'controle-facial',
    title: 'Controle de Acesso Facial',
    description: 'Reconhecimento facial com alta precisão e rapidez para liberação sem contato físico.',
    image: leitorFacial,
  },
  {
    id: 'catraca',
    title: 'Catraca de Acesso',
    description: 'Catraca com leitor facial e cartão para organizar e registrar a passagem de pessoas em portarias e recepções.',
    image: catraca,
  },
  {
    id: 'teclado-xat-8000',
    title: 'Teclado XAT 8000',
    description: 'Teclado XAT 8000 integrado à central de monitoramento, com acionamento por setor e aviso instantâneo.',
    image: xat8000,
  },
  {
    id: 'sistemas-alarme',
    title: 'Sistemas de Alarme',
    description: 'Central, sensores de presença e abertura, controle remoto e sirene para proteção completa do perímetro.',
    image: sistemaAlarme,
  },
  {
    id: 'antena-veicular',
    title: 'Antena Veicular e Leitor de Placas',
    description: 'Identificação automática de veículos por placa e tag, com liberação rápida de portões e cancelas.',
    image: leitorPlacas,
  },
  {
    id: 'portaria-remota',
    title: 'Portaria Remota e Híbrida',
    description: 'Central de atendimento remoto integrada a interfones, câmeras e controle de acesso, em modelo remoto ou híbrido.',
    image: portariaRemotaHibrida,
  },
  {
    id: 'armario-inteligente',
    title: 'Armário Inteligente',
    description: 'Locker inteligente para recebimento e retirada segura e autônoma de encomendas.',
    image: armarioInteligente,
  },
  {
    id: 'claviculario',
    title: 'Claviculário de Chaves',
    description: 'Armário eletrônico com RFID para guarda e controle de chaves, com registro de quem retirou e devolveu.',
    image: claviculario,
  },
  {
    id: 'torre-vigilancia',
    title: 'Torre de Vigilância',
    description: 'Torre de monitoramento autônoma para visão panorâmica de grandes perímetros, com opção de integração ao Smart Sampa.',
    image: torreVigilancia,
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

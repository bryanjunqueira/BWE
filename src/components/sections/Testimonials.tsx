import { Star } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'
import styles from './Testimonials.module.css'

// Placeholder testimonials — to be replaced with real content from Wendel
const TESTIMONIALS = [
  {
    id: 1,
    name: '[Nome do cliente]',
    role: '[Tipo de imóvel — residencial / comercial]',
    text: '[Depoimento do cliente a ser inserido. Descreva sua experiência com a BWE Monitoramento, o atendimento recebido e os resultados obtidos.]',
    rating: 5,
    avatar: null,
  },
  {
    id: 2,
    name: '[Nome do cliente]',
    role: '[Tipo de imóvel — residencial / comercial]',
    text: '[Depoimento do cliente a ser inserido. Descreva sua experiência com a BWE Monitoramento, o atendimento recebido e os resultados obtidos.]',
    rating: 5,
    avatar: null,
  },
  {
    id: 3,
    name: '[Nome do cliente]',
    role: '[Tipo de imóvel — residencial / comercial]',
    text: '[Depoimento do cliente a ser inserido. Descreva sua experiência com a BWE Monitoramento, o atendimento recebido e os resultados obtidos.]',
    rating: 5,
    avatar: null,
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className={styles.stars} aria-label={`Avaliação: ${count} de 5 estrelas`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} fill="currentColor" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="depoimentos" className={`section ${styles.section}`}>
      <div className="container">

        <AnimatedSection className={styles.header}>
          <span className="section-label">Quem confia na BWE</span>
          <div className="accent-line" />
          <h2 className={styles.heading}>
            O que dizem<br />nossos clientes
          </h2>
          <p className={styles.subheading}>
            Depoimentos reais de quem escolheu a BWE Monitoramento para proteger
            seu patrimônio.
          </p>
          <div className={styles.placeholder}>
            <span>⚠ Seção aguardando depoimentos reais — conteúdo a ser fornecido pelo Wendel</span>
          </div>
        </AnimatedSection>

        <div className={styles.grid}>
          {TESTIMONIALS.map((t, i) => (
            <AnimatedSection key={t.id} className={styles.card} delay={i * 100}>
              <StarRating count={t.rating} />
              <blockquote className={styles.quote}>
                <p className={styles.quoteText}>{t.text}</p>
              </blockquote>
              <div className={styles.author}>
                <div className={styles.avatar} aria-hidden="true">
                  {t.avatar
                    ? <img src={t.avatar} alt={t.name} />
                    : <span>{t.name.charAt(0)}</span>
                  }
                </div>
                <div>
                  <p className={styles.authorName}>{t.name}</p>
                  <p className={styles.authorRole}>{t.role}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  )
}

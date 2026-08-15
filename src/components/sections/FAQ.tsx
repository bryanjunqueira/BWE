import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'
import styles from './FAQ.module.css'

const FAQS = [
  {
    id: 'orcamento',
    question: 'Como funciona o processo de orçamento e avaliação técnica?',
    answer:
      'Fazemos uma análise das necessidades do seu imóvel (residencial ou comercial) para indicar a melhor solução de equipamentos, pontos estratégicos de instalação e controle de acesso.',
  },
  {
    id: 'celular',
    question: 'Consigo acompanhar as câmeras e alertas pelo celular?',
    answer:
      'Sim! Configuramos o aplicativo no seu smartphone para que você tenha acesso em tempo real às imagens e notificações de onde estiver.',
  },
  {
    id: 'garantia',
    question: 'Vocês oferecem garantia nos equipamentos e na instalação?',
    answer:
      'Sim, todos os equipamentos contam com garantia de fábrica e oferecemos garantia completa sobre o serviço de instalação e suporte técnico.',
  },
  {
    id: 'energia',
    question: 'O que acontece com o sistema se acabar a energia elétrica?',
    answer:
      'Para garantir proteção ininterrupta, podemos integrar nobreaks e baterias de emergência que mantêm o sistema funcionando mesmo em quedas de energia.',
  },
]

interface FAQItemProps {
  faq: typeof FAQS[0]
  isOpen: boolean
  onToggle: () => void
  index: number
}

function FAQItem({ faq, isOpen, onToggle, index }: FAQItemProps) {
  return (
    <AnimatedSection
      className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}
      delay={index * 80}
      as="div"
    >
      <button
        className={styles.trigger}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.id}`}
        id={`faq-question-${faq.id}`}
      >
        <span className={styles.triggerText}>{faq.question}</span>
        <span className={styles.triggerIcon} aria-hidden="true">
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>

      <div
        id={`faq-answer-${faq.id}`}
        role="region"
        aria-labelledby={`faq-question-${faq.id}`}
        className={styles.answer}
        style={{ maxHeight: isOpen ? '400px' : '0' }}
      >
        <p className={styles.answerText}>{faq.answer}</p>
      </div>
    </AnimatedSection>
  )
}

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = (id: string) => setOpenId(prev => (prev === id ? null : id))

  return (
    <section id="faq" className={`section ${styles.section}`}>
      <div className="container">

        <div className={styles.layout}>

          {/* Left: header */}
          <AnimatedSection className={styles.headerCol}>
            <span className="section-label">Dúvidas frequentes</span>
            <div className="accent-line" />
            <h2 className={styles.heading}>
              Perguntas que<br />nossos clientes fazem
            </h2>
            <p className={styles.subheading}>
              Não encontrou o que procura? Entre em contato — nossa equipe está
              pronta para responder.
            </p>
            <a
              href="https://wa.me/5511954744900?text=Olá,%20tenho%20uma%20dúvida%20sobre%20os%20serviços%20da%20BWE%20Monitoramento."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              id="faq-cta-whatsapp"
            >
              Enviar mensagem
            </a>
          </AnimatedSection>

          {/* Right: accordion */}
          <div className={styles.accordionCol}>
            {FAQS.map((faq, i) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => toggle(faq.id)}
                index={i}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

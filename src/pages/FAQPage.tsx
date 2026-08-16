import { MessageCircle, ShieldQuestion } from 'lucide-react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import FAQ from '../components/sections/FAQ'
import WhatsAppFloat from '../components/ui/WhatsAppFloat'
import styles from './FAQPage.module.css'

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroGrid} aria-hidden="true" />
          <div className={`container ${styles.heroInner}`}>
            <div className={styles.heroIcon}>
              <ShieldQuestion size={30} />
            </div>
            <span className="section-label section-label-light">Central de dúvidas</span>
            <h1>Perguntas frequentes sobre segurança eletrônica</h1>
            <p>
              Uma área dedicada para explicar orçamento, instalação, monitoramento,
              suporte e funcionamento das soluções BWE de forma clara e organizada.
            </p>
            <a
              href="https://wa.me/5511954744900?text=Olá,%20tenho%20uma%20dúvida%20sobre%20os%20serviços%20da%20BWE%20Monitoramento."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-white btn-lg"
            >
              <MessageCircle size={18} />
              Tirar dúvida pelo WhatsApp
            </a>
          </div>
        </section>
        <FAQ />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

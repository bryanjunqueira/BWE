import { FormEvent, useState } from 'react'
import { Mail, Upload } from 'lucide-react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import WhatsAppFloat from '../components/ui/WhatsAppFloat'
import styles from './CareerPage.module.css'
import heroImg from '../assets/trabalhe-conosco-hero.webp'
import formImg from '../assets/trabalhe-conosco-homem.webp'

export default function CareerPage() {
  const [status, setStatus] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('Candidatura enviada com sucesso! Entraremos em contato em breve.')
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* ─── HERO: texto à esquerda, profissional ancorada à direita ────── */}
        <section className={styles.hero}>
          <div className={styles.heroGlow} aria-hidden="true" />
          <div className={styles.gridTexture} aria-hidden="true" />

          {/* Altura manda no tamanho da foto (width: auto), então ela nunca é
              ampliada nem cortada quando a tela fica mais larga */}
          <img
            src={heroImg}
            alt=""
            aria-hidden="true"
            className={styles.heroPhoto}
            loading="eager"
          />

          <div className={styles.heroOverlay} aria-hidden="true" />

          <div className={`container ${styles.heroInner}`}>
            <span className={`section-label section-label-light ${styles.heroLabel}`}>
              Trabalhe Conosco
            </span>
            <h1 className={styles.heroTitle}>
              Venha fazer parte<br />de nossa equipe
            </h1>
            <p className={styles.heroText}>
              Buscamos pessoas comprometidas com tecnologia, atendimento e segurança
              para crescer junto com a nossa operação.
            </p>
            <a href="#candidatura" className={`btn btn-primary btn-lg ${styles.heroCta}`}>
              Enviar candidatura
            </a>
          </div>
        </section>

        {/* ─── CONTEÚDO PRINCIPAL: foto + formulário ─────────────────────── */}
        <section id="candidatura" className={`section ${styles.contentSection}`}>
          <div className={`container ${styles.contentGrid}`}>

            {/* Coluna esquerda — foto */}
            <div className={styles.photoCol}>
              <div className={styles.photoWrapper}>
                <img
                  src={formImg}
                  alt="Profissional da equipe BWE na central de monitoramento"
                  className={styles.teamPhoto}
                  loading="lazy"
                />
              </div>
              <div className={styles.photoCopy}>
                <h2 className={styles.photoCopyTitle}>Venha trabalhar conosco</h2>
                <p>
                  Buscamos pessoas comprometidas com tecnologia, atendimento e segurança para
                  crescer junto com a nossa operação.
                </p>
              </div>
            </div>

            {/* Coluna direita — formulário */}
            <div className={styles.formCol}>
              <form className={styles.formCard} onSubmit={handleSubmit}>
                <h3 className={styles.formTitle}>Envie sua candidatura</h3>

                <div className={styles.fieldGrid}>
                  <label className={styles.field}>
                    <span>Nome completo</span>
                    <input name="nome" type="text" placeholder="Seu nome" required />
                  </label>

                  <label className={styles.field}>
                    <span>E-mail</span>
                    <input name="email" type="email" placeholder="seuemail@exemplo.com" required />
                  </label>

                  <label className={styles.field}>
                    <span>Telefone / WhatsApp</span>
                    <input name="telefone" type="tel" placeholder="(11) 99999-9999" required />
                  </label>

                  <label className={styles.field}>
                    <span>Cidade</span>
                    <input name="cidade" type="text" placeholder="Guarulhos - SP" />
                  </label>

                  <label className={styles.field}>
                    <span>Área de interesse</span>
                    <select name="area" defaultValue="">
                      <option value="" disabled>Selecione uma área</option>
                      <option value="monitoramento">Monitoramento</option>
                      <option value="tecnico">Técnico</option>
                      <option value="comercial">Comercial</option>
                      <option value="administrativo">Administrativo</option>
                      <option value="atendimento">Atendimento</option>
                      <option value="outro">Outro</option>
                    </select>
                  </label>

                  <label className={styles.field}>
                    <span>LinkedIn ou portfólio</span>
                    <input name="portfolio" type="url" placeholder="https://" />
                  </label>
                </div>

                <label className={`${styles.field} ${styles.fullField}`}>
                  <span>Resumo profissional</span>
                  <textarea
                    name="resumo"
                    rows={4}
                    placeholder="Conte brevemente sobre sua experiência e disponibilidade."
                  />
                </label>

                <label className={styles.uploadBox}>
                  <Upload size={22} />
                  <strong>Anexar currículo em PDF</strong>
                  <span>Arquivo PDF, preferencialmente até 10 MB.</span>
                  <input name="curriculo" type="file" accept="application/pdf,.pdf" />
                </label>

                <label className={styles.consent}>
                  <input type="checkbox" required />
                  <span>Autorizo o uso dos meus dados para análise de candidatura pela BWE.</span>
                </label>

                {status && <p className={styles.status}>{status}</p>}

                <button type="submit" className="btn btn-primary">
                  <Mail size={18} />
                  Enviar candidatura
                </button>
              </form>
            </div>

          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

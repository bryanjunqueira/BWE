import { FormEvent, useState } from 'react'
import { Briefcase, FileText, Mail, ShieldCheck, Upload } from 'lucide-react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import WhatsAppFloat from '../components/ui/WhatsAppFloat'
import styles from './CareerPage.module.css'
import heroImage from '../assets/tech-automation.jpg'

export default function CareerPage() {
  const [status, setStatus] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('Formulário pronto. O destino de envio será configurado em uma próxima etapa.')
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div
            className={styles.heroBg}
            style={{ backgroundImage: `url(${heroImage})` }}
            aria-hidden="true"
          />
          <div className={styles.heroOverlay} />
          <div className={styles.gridTexture} aria-hidden="true" />

          <div className={`container ${styles.heroContent}`}>
            <span className="section-label section-label-light">Trabalhe conosco</span>
            <h1 className={styles.title}>
              Venha fazer parte da equipe BWE Monitoramento
            </h1>
            <p className={styles.subtitle}>
              Buscamos pessoas comprometidas com tecnologia, atendimento e segurança para
              crescer junto com a nossa operação.
            </p>

            <div className={styles.heroCards}>
              <div className={styles.heroCard}>
                <ShieldCheck size={20} />
                <span>Segurança eletrônica</span>
              </div>
              <div className={styles.heroCard}>
                <Briefcase size={20} />
                <span>Ambiente profissional</span>
              </div>
              <div className={styles.heroCard}>
                <FileText size={20} />
                <span>Cadastro com currículo</span>
              </div>
            </div>
          </div>
        </section>

        <section className={`section ${styles.formSection}`}>
          <div className={`container ${styles.formLayout}`}>
            <aside className={styles.infoPanel}>
              <span className="section-label">Candidatura</span>
              <div className="accent-line" />
              <h2>Envie suas informações</h2>
              <p>
                Preencha seus dados principais e anexe seu currículo em PDF. Em breve,
                esse formulário será conectado ao destino final de recebimento.
              </p>
              <div className={styles.infoList}>
                <div>
                  <strong>Áreas de interesse</strong>
                  <span>Monitoramento, atendimento, técnico, comercial e administrativo.</span>
                </div>
                <div>
                  <strong>Formato do arquivo</strong>
                  <span>Envie preferencialmente um currículo em PDF.</span>
                </div>
                <div>
                  <strong>Contato futuro</strong>
                  <span>A equipe poderá avaliar os perfis quando o fluxo de envio for ativado.</span>
                </div>
              </div>
            </aside>

            <form className={styles.formCard} onSubmit={handleSubmit}>
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
                  <span>LinkedIn ou portfolio</span>
                  <input name="portfolio" type="url" placeholder="https://" />
                </label>
              </div>

              <label className={`${styles.field} ${styles.fullField}`}>
                <span>Resumo profissional</span>
                <textarea
                  name="resumo"
                  rows={5}
                  placeholder="Conte brevemente sobre sua experiência e disponibilidade."
                />
              </label>

              <label className={styles.uploadBox}>
                <Upload size={24} />
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
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

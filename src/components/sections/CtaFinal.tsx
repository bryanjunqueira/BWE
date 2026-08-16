import { FormEvent, useState } from 'react'
import { Mail, MessageCircle, Send } from 'lucide-react'
import styles from './CtaFinal.module.css'
import bgImg from '../../assets/cctv-security-camera-ceiling.jpg'

export default function CtaFinal() {
  const [status, setStatus] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('Mensagem pronta para envio. O destino do formulário será configurado na próxima etapa.')
  }

  return (
    <section id="contato" className={styles.section} aria-label="Contato para orçamento">
      <div
        className={styles.bg}
        style={{ backgroundImage: `url(${bgImg})` }}
        aria-hidden="true"
      />
      <div className={styles.overlay} aria-hidden="true" />

      <div className={`container ${styles.layout}`}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Proteção que você pode confiar</p>
          <h2 className={styles.heading}>
            Fale com quem entende de segurança.
          </h2>
          <p className={styles.subheading}>
            Envie suas informações e conte o que você precisa proteger. A BWE avalia
            o cenário e indica a solução mais adequada para sua residência, empresa ou condomínio.
          </p>
          <div className={styles.contactShortcuts}>
            <a
              href="https://wa.me/5511954744900?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento."
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} />
              WhatsApp: (11) 95474-4900
            </a>
            <a href="mailto:bweinove@gmail.com">
              <Mail size={18} />
              bweinove@gmail.com
            </a>
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGrid}>
            <label>
              <span>Nome</span>
              <input name="nome" type="text" placeholder="Seu nome" required />
            </label>
            <label>
              <span>Telefone / WhatsApp</span>
              <input name="telefone" type="tel" placeholder="(11) 99999-9999" required />
            </label>
            <label>
              <span>E-mail</span>
              <input name="email" type="email" placeholder="seuemail@exemplo.com" />
            </label>
            <label>
              <span>Tipo de solução</span>
              <select name="solucao" defaultValue="">
                <option value="" disabled>Selecione uma opção</option>
                <option value="alarmes">Alarmes</option>
                <option value="cameras">Câmeras / CFTV</option>
                <option value="biometria">Biometria e controle de acesso</option>
                <option value="portaria">Portaria remota</option>
                <option value="tecnologia">Tecnologia</option>
              </select>
            </label>
          </div>
          <label>
            <span>Mensagem</span>
            <textarea
              name="mensagem"
              rows={5}
              placeholder="Conte rapidamente sobre seu imóvel, necessidade ou projeto."
              required
            />
          </label>
          {status && <p className={styles.status}>{status}</p>}
          <button className="btn btn-primary btn-lg" type="submit" id="cta-final-orcamento">
            <Send size={18} />
            Enviar informações
          </button>
        </form>
      </div>
    </section>
  )
}

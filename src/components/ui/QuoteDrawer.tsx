import { FormEvent, useEffect, useState } from 'react'
import { Phone, X } from 'lucide-react'
import styles from './QuoteDrawer.module.css'

export default function QuoteDrawer() {
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState('')

  useEffect(() => {
    const openDrawer = () => setOpen(true)
    window.addEventListener('open-quote-drawer', openDrawer)
    return () => window.removeEventListener('open-quote-drawer', openDrawer)
  }, [])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('Solicitação pronta. O destino do formulário será configurado na próxima etapa.')
  }

  return (
    <>
      <div
        className={`${styles.overlay} ${open ? styles.overlayOpen : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <aside className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`} aria-label="Fale com um especialista">
        <header className={styles.header}>
          <h2>Fale com um Especialista</h2>
          <button type="button" onClick={() => setOpen(false)} aria-label="Fechar formulário">
            <X size={19} />
          </button>
        </header>

        <div className={styles.body}>
          <p>Preencha o formulário e a equipe BWE entrará em contato para entender sua necessidade.</p>

          <div className={styles.badges}>
            <a href="tel:+5511954744900">
              <Phone size={14} />
              (11) 95474-4900
            </a>
            <span>Atendimento: seg. a sex.</span>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <input name="nome" placeholder="Nome" required />
            <input name="telefone" placeholder="Telefone" required />
            <input name="email" type="email" placeholder="E-mail" />
            <select name="imovel" defaultValue="">
              <option value="" disabled>Selecione o imóvel</option>
              <option value="residencial">Residencial</option>
              <option value="comercial">Comercial</option>
              <option value="condominio">Condomínio</option>
              <option value="empresa">Empresa</option>
            </select>
            <select name="servico" defaultValue="">
              <option value="" disabled>Selecione o serviço</option>
              <option value="alarmes">Alarmes</option>
              <option value="cameras">Câmeras / CFTV</option>
              <option value="acesso">Controle de acesso</option>
              <option value="portaria">Portaria remota</option>
              <option value="tecnologia">Tecnologia</option>
            </select>
            <textarea name="mensagem" placeholder="Mensagem" rows={4} />
            {status && <span className={styles.status}>{status}</span>}
            <button type="submit">Enviar</button>
          </form>

          <div className={styles.hintBox}>
            <strong>Precisa de orientação?</strong>
            <span>Envie sua necessidade e a BWE indica o melhor caminho.</span>
          </div>
        </div>
      </aside>
    </>
  )
}

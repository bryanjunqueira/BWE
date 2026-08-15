import { Link } from 'react-router-dom'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import styles from './LegalPage.module.css'

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className="container">

          <div className={styles.breadcrumb}>
            <Link to="/" className={styles.breadcrumbLink}>Início</Link>
            <span className={styles.breadcrumbSep}>›</span>
            <span>Política de Privacidade</span>
          </div>

          <header className={styles.header}>
            <h1 className={styles.title}>Política de Privacidade</h1>
            <p className={styles.meta}>
              Última atualização: <time dateTime="2024-01">Janeiro de 2024</time>
            </p>
          </header>

          {/* =====================================================
              AVISO IMPORTANTE — CONTEÚDO JURÍDICO
              Este conteúdo é um modelo estrutural provisório.
              Deve ser revisado e substituído por um texto
              elaborado ou aprovado pela empresa ou por
              profissional jurídico responsável antes da
              publicação definitiva.
              ===================================================== */}

          <div className={styles.notice}>
            <p>
              <strong>⚠ Conteúdo provisório:</strong> Esta página apresenta
              uma estrutura de Política de Privacidade que deve ser revisada
              e substituída por texto jurídico aprovado pela BWE Monitoramento
              ou por profissional responsável.
            </p>
          </div>

          <div className={styles.body}>

            <section className={styles.section}>
              <h2>1. Introdução</h2>
              <p>
                {/* [CONTEÚDO JURÍDICO A SER INSERIDO] */}
                A BWE Monitoramento ("nós", "nosso") está comprometida em proteger
                sua privacidade. Esta Política de Privacidade explica como coletamos,
                usamos, divulgamos e protegemos suas informações pessoais quando você
                utiliza nosso site e serviços.
              </p>
            </section>

            <section className={styles.section}>
              <h2>2. Dados coletados</h2>
              <p>
                {/* [CONTEÚDO JURÍDICO A SER INSERIDO] */}
                Podemos coletar as seguintes categorias de informações:
              </p>
              <ul className={styles.list}>
                <li>Nome completo e dados de contato (e-mail, telefone)</li>
                <li>Endereço para fins de visita técnica e instalação</li>
                <li>Dados de navegação no site (cookies, endereço IP)</li>
                <li>Mensagens enviadas via formulário ou WhatsApp</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>3. Finalidade do tratamento</h2>
              <p>
                {/* [CONTEÚDO JURÍDICO A SER INSERIDO] */}
                Os dados coletados são utilizados exclusivamente para:
              </p>
              <ul className={styles.list}>
                <li>Responder às suas solicitações de orçamento ou contato</li>
                <li>Executar os serviços contratados</li>
                <li>Enviar comunicações relacionadas aos nossos serviços</li>
                <li>Cumprir obrigações legais e regulatórias</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>4. Compartilhamento de dados</h2>
              <p>
                {/* [CONTEÚDO JURÍDICO A SER INSERIDO] */}
                Seus dados pessoais não serão vendidos ou compartilhados com
                terceiros, exceto quando necessário para a prestação dos serviços
                ou por exigência legal.
              </p>
            </section>

            <section className={styles.section}>
              <h2>5. Cookies</h2>
              <p>
                {/* [CONTEÚDO JURÍDICO A SER INSERIDO] */}
                Nosso site pode utilizar cookies para melhorar a experiência de
                navegação. Você pode configurar seu navegador para recusar cookies,
                embora isso possa afetar algumas funcionalidades do site.
              </p>
            </section>

            <section className={styles.section}>
              <h2>6. Seus direitos (LGPD)</h2>
              <p>
                {/* [CONTEÚDO JURÍDICO A SER INSERIDO] */}
                Em conformidade com a Lei Geral de Proteção de Dados (Lei nº
                13.709/2018), você tem o direito de:
              </p>
              <ul className={styles.list}>
                <li>Acessar seus dados pessoais mantidos por nós</li>
                <li>Corrigir dados incompletos ou desatualizados</li>
                <li>Solicitar a exclusão dos seus dados</li>
                <li>Revogar o consentimento a qualquer momento</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>7. Segurança</h2>
              <p>
                {/* [CONTEÚDO JURÍDICO A SER INSERIDO] */}
                Adotamos medidas técnicas e organizacionais adequadas para proteger
                seus dados pessoais contra acesso não autorizado, perda ou destruição.
              </p>
            </section>

            <section className={styles.section}>
              <h2>8. Contato</h2>
              <p>
                {/* [CONTEÚDO JURÍDICO A SER INSERIDO] */}
                Em caso de dúvidas sobre esta Política ou sobre o tratamento dos
                seus dados, entre em contato:
              </p>
              <ul className={styles.list}>
                <li>E-mail: bweinove@gmail.com</li>
                <li>WhatsApp: (11) 95474-4900</li>
                <li>Endereço: Est. Presidente JK de Oliveira, 2615, Lj 28 — Guarulhos, SP</li>
              </ul>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

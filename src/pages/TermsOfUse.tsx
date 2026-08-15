import { Link } from 'react-router-dom'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import styles from './LegalPage.module.css'

export default function TermsOfUse() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className="container">

          <div className={styles.breadcrumb}>
            <Link to="/" className={styles.breadcrumbLink}>Início</Link>
            <span className={styles.breadcrumbSep}>›</span>
            <span>Termos de Uso</span>
          </div>

          <header className={styles.header}>
            <h1 className={styles.title}>Termos de Uso</h1>
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
              uma estrutura de Termos de Uso que deve ser revisada e substituída
              por texto jurídico aprovado pela BWE Monitoramento ou por
              profissional responsável.
            </p>
          </div>

          <div className={styles.body}>

            <section className={styles.section}>
              <h2>1. Aceitação dos termos</h2>
              <p>
                {/* [CONTEÚDO JURÍDICO A SER INSERIDO] */}
                Ao acessar e utilizar o site da BWE Monitoramento, você concorda
                com os presentes Termos de Uso. Caso não concorde com qualquer
                disposição, recomendamos que não utilize o site.
              </p>
            </section>

            <section className={styles.section}>
              <h2>2. Uso do site</h2>
              <p>
                {/* [CONTEÚDO JURÍDICO A SER INSERIDO] */}
                O conteúdo deste site é disponibilizado exclusivamente para fins
                informativos sobre os serviços da BWE Monitoramento. É vedado:
              </p>
              <ul className={styles.list}>
                <li>Reproduzir o conteúdo sem autorização prévia e expressa</li>
                <li>Utilizar o site para fins ilícitos ou que violem direitos de terceiros</li>
                <li>Tentar acessar áreas restritas ou comprometer a segurança do site</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>3. Propriedade intelectual</h2>
              <p>
                {/* [CONTEÚDO JURÍDICO A SER INSERIDO] */}
                Todos os conteúdos presentes neste site — incluindo textos, imagens,
                logotipos, marca e layout — são propriedade da BWE Monitoramento e
                estão protegidos pela legislação de propriedade intelectual vigente.
              </p>
            </section>

            <section className={styles.section}>
              <h2>4. Limitação de responsabilidade</h2>
              <p>
                {/* [CONTEÚDO JURÍDICO A SER INSERIDO] */}
                A BWE Monitoramento não se responsabiliza por danos decorrentes do
                uso ou impossibilidade de uso deste site, nem pela indisponibilidade
                temporária dos serviços online.
              </p>
            </section>

            <section className={styles.section}>
              <h2>5. Links externos</h2>
              <p>
                {/* [CONTEÚDO JURÍDICO A SER INSERIDO] */}
                Este site pode conter links para sites externos. A BWE Monitoramento
                não tem controle sobre o conteúdo desses sites e não se responsabiliza
                pelas informações neles disponibilizadas.
              </p>
            </section>

            <section className={styles.section}>
              <h2>6. Modificações</h2>
              <p>
                {/* [CONTEÚDO JURÍDICO A SER INSERIDO] */}
                A BWE Monitoramento reserva-se o direito de alterar estes Termos de
                Uso a qualquer momento, sem aviso prévio. Recomendamos a consulta
                periódica desta página.
              </p>
            </section>

            <section className={styles.section}>
              <h2>7. Legislação aplicável</h2>
              <p>
                {/* [CONTEÚDO JURÍDICO A SER INSERIDO] */}
                Estes Termos de Uso são regidos pela legislação brasileira. Eventuais
                litígios serão submetidos ao foro da comarca de Guarulhos, Estado
                de São Paulo.
              </p>
            </section>

            <section className={styles.section}>
              <h2>8. Contato</h2>
              <p>
                {/* [CONTEÚDO JURÍDICO A SER INSERIDO] */}
                Para esclarecimentos sobre estes Termos, entre em contato:
              </p>
              <ul className={styles.list}>
                <li>E-mail: bweinove@gmail.com</li>
                <li>Telefone: (11) 5198-7450</li>
              </ul>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

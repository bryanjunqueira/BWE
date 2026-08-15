import { Link } from 'react-router-dom'
import { Instagram, Facebook, MessageCircle, Phone, Mail, MapPin } from 'lucide-react'
import styles from './Footer.module.css'
import logoWhite from '../../assets/logo-white.png'

const SERVICES_LINKS = [
  'Monitoramento de alarmes',
  'CFTV — Sistema de câmeras',
  'Controle de acesso',
  'Portaria remota',
  'Soluções em tecnologia',
]

const QUICK_LINKS = [
  { label: 'Início',        href: '#inicio'       },
  { label: 'Sobre',         href: '#sobre'         },
  { label: 'Serviços',      href: '#servicos'      },
  { label: 'Diferenciais',  href: '#diferenciais'  },
  { label: 'Parceiros',     href: '#parceiros'     },
  { label: 'Depoimentos',   href: '#depoimentos'   },
  { label: 'FAQ',           href: '#faq'           },
  { label: 'Contato',       href: '#contato'       },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container">

        {/* Main grid */}
        <div className={styles.grid}>

          {/* Brand */}
          <div className={styles.brand}>
            <Link to="/" aria-label="BWE Monitoramento — página inicial">
              <img
                src={logoWhite}
                alt="BWE Monitoramento"
                className={styles.logo}
              />
            </Link>
            <p className={styles.brandDesc}>
              Segurança eletrônica para residências e empresas em Guarulhos–SP.
              Monitoramento, CFTV, controle de acesso e soluções sob medida desde 2018.
            </p>
            <div className={styles.socials}>
              <a
                href="https://www.instagram.com/we_monitoramento"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/BWEInove"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://wa.me/5511954744900"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Serviços</h3>
            <ul className={styles.colList}>
              {SERVICES_LINKS.map(s => (
                <li key={s}>
                  <a href="#servicos" className={styles.colLink}>{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Links rápidos</h3>
            <ul className={styles.colList}>
              {QUICK_LINKS.map(l => (
                <li key={l.href}>
                  <a href={l.href} className={styles.colLink}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Contato</h3>
            <ul className={styles.contactList}>
              <li>
                <a href="https://wa.me/5511954744900" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                  <MessageCircle size={15} />
                  (11) 95474-4900
                </a>
              </li>
              <li>
                <a href="https://wa.me/5511940066815" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                  <MessageCircle size={15} />
                  (11) 94006-6815
                </a>
              </li>
              <li>
                <a href="tel:+551151987450" className={styles.contactLink}>
                  <Phone size={15} />
                  (11) 5198-7450
                </a>
              </li>
              <li>
                <a href="mailto:bweinove@gmail.com" className={styles.contactLink}>
                  <Mail size={15} />
                  bweinove@gmail.com
                </a>
              </li>
              <li className={styles.addressItem}>
                <MapPin size={15} className={styles.addressIcon} />
                <span>
                  Est. Presidente JK de Oliveira, 2615, Lj 28<br />
                  Guarulhos — SP, 07260-000
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {year} BWE Monitoramento. Todos os direitos reservados.
          </p>
          <div className={styles.legalLinks}>
            <Link to="/politica-de-privacidade" className={styles.legalLink}>
              Política de Privacidade
            </Link>
            <span className={styles.legalDivider}>·</span>
            <Link to="/termos-de-uso" className={styles.legalLink}>
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

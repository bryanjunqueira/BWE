import { useEffect, useState, useCallback, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Menu, X, Phone, Mail, MapPin, ChevronDown,
  Shield, Camera, Fingerprint, MonitorSmartphone, Cpu,
  Instagram, Facebook
} from 'lucide-react'
import styles from './Header.module.css'
import logoBwe from '../../assets/logo-bwe-transparent.png'

const SOLUCOES_ITEMS = [
  {
    title: 'Monitoramento de Alarmes',
    desc: 'Proteção 24h com resposta rápida e central especializada.',
    icon: <Shield size={18} />,
    href: '#servicos',
  },
  {
    title: 'CFTV / Sistema de Câmeras',
    desc: 'Gravação HD, visão noturna e acesso remoto no celular.',
    icon: <Camera size={18} />,
    href: '#servicos',
  },
  {
    title: 'Controle de Acesso',
    desc: 'Biometria, leitores faciais e gestão de entradas/saídas.',
    icon: <Fingerprint size={18} />,
    href: '#servicos',
  },
  {
    title: 'Portaria Remota',
    desc: 'Eficiência operacional com atendimento remoto 24/7.',
    icon: <MonitorSmartphone size={18} />,
    href: '#servicos',
  },
  {
    title: 'Soluções em Tecnologia',
    desc: 'Projetos sob medida e integração de sistemas inteligentes.',
    icon: <Cpu size={18} />,
    href: '#servicos',
  },
]

const NAV_LINKS = [
  { label: 'Sobre',    href: '#sobre' },
  { label: 'Soluções', href: '#servicos', hasDropdown: true },
  { label: 'Parceiros',href: '#parceiros' },
  { label: 'Contato',  href: '#contato' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [headerVisible, setHeaderVisible] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')
  const lastScrollY = useRef(0)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const isHome = location.pathname === '/'

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY
    setScrolled(currentScrollY > 40)

    if (currentScrollY <= 60) {
      setHeaderVisible(true)
    } else if (currentScrollY > lastScrollY.current + 8) {
      // Rolando para baixo: recolhe o header
      setHeaderVisible(false)
      setDropdownOpen(false)
    } else if (currentScrollY < lastScrollY.current - 8) {
      // Rolando para cima: mostra o header
      setHeaderVisible(true)
    }

    lastScrollY.current = currentScrollY
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // Active section tracking
  useEffect(() => {
    const ids = NAV_LINKS.map(l => l.href.replace('#', ''))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    ids.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
    setDropdownOpen(false)
  }, [location])

  const scrollToSection = (href: string) => {
    setMenuOpen(false)
    setDropdownOpen(false)
    if (!isHome) return
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 110
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  const isHidden = !headerVisible && !menuOpen

  return (
    <header className={`${styles.headerWrapper} ${isHidden ? styles.headerHidden : ''}`}>
      {/* Top Bar with Stylized Cut Accent */}
      <div className={styles.topBar}>
        <div className={`container ${styles.topBarInner}`}>

          {/* Left contact info */}
          <div className={styles.topBarInfo}>
            <a href="mailto:bweinove@gmail.com" className={styles.topBarItem}>
              <Mail size={13} />
              <span>bweinove@gmail.com</span>
            </a>
            <span className={styles.topBarDivider} />
            <a href="tel:+5511954744900" className={styles.topBarItem}>
              <Phone size={13} />
              <span>(11) 95474-4900</span>
            </a>
            <span className={styles.topBarDivider} />
            <a href="tel:+551151987450" className={styles.topBarItem}>
              <Phone size={13} />
              <span>(11) 5198-7450</span>
            </a>
            <span className={styles.topBarDivider} />
            <div className={styles.topBarItem}>
              <MapPin size={13} />
              <span>Guarulhos - SP</span>
            </div>
          </div>

          {/* Right accent badge + social */}
          <div className={styles.topBarRight}>
            <div className={styles.topBarRedBadge}>
              <span>SEGURANÇA E TECNOLOGIA 24H</span>
            </div>
            <div className={styles.topBarSocials}>
              <a
                href="https://www.instagram.com/we_monitoramento"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={styles.topSocialIcon}
              >
                <Instagram size={14} />
              </a>
              <a
                href="https://www.facebook.com/BWEInove"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={styles.topSocialIcon}
              >
                <Facebook size={14} />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Main Navbar — White Background with Envelope Edge */}
      <div className={`${styles.mainNav} ${scrolled ? styles.mainNavScrolled : ''}`}>
        <div className={`container ${styles.navInner}`}>

          {/* Prominent Logo on the left without dark container box */}
          <Link to="/" className={styles.logoLink} aria-label="BWE Monitoramento — Página Inicial">
            <img
              src={logoBwe}
              alt="BWE Monitoramento"
              className={styles.logoImg}
            />
          </Link>

          {/* Desktop Navigation — Only "Sobre", "Soluções", "Parceiros", "Contato" */}
          <nav className={styles.desktopNav} aria-label="Navegação principal">
            {NAV_LINKS.map(link => {
              const isSolucoes = link.hasDropdown
              const isActive = activeSection === link.href.replace('#', '')

              if (isSolucoes) {
                return (
                  <div
                    key={link.href}
                    className={styles.dropdownContainer}
                    ref={dropdownRef}
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''} ${dropdownOpen ? styles.navLinkOpen : ''}`}
                      onClick={() => setDropdownOpen(prev => !prev)}
                      aria-expanded={dropdownOpen}
                    >
                      {link.label}
                      <ChevronDown size={14} className={`${styles.chevron} ${dropdownOpen ? styles.chevronRotated : ''}`} />
                    </button>

                    {/* Soluções Dropdown Menu (Reference Image 3) */}
                    <div className={`${styles.dropdownMenu} ${dropdownOpen ? styles.dropdownMenuVisible : ''}`}>
                      <div className={styles.dropdownHeader}>
                        <span>NOSSAS SOLUÇÕES</span>
                      </div>
                      <div className={styles.dropdownList}>
                        {SOLUCOES_ITEMS.map(item => (
                          <a
                            key={item.title}
                            href={isHome ? item.href : `/${item.href}`}
                            className={styles.dropdownItem}
                            onClick={e => {
                              if (isHome) {
                                e.preventDefault()
                                scrollToSection(item.href)
                              }
                            }}
                          >
                            <div className={styles.dropdownItemIcon}>
                              {item.icon}
                            </div>
                            <div className={styles.dropdownItemText}>
                              <span className={styles.dropdownItemTitle}>{item.title}</span>
                              <span className={styles.dropdownItemDesc}>{item.desc}</span>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              }

              return (
                <a
                  key={link.href}
                  href={isHome ? link.href : `/${link.href}`}
                  className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                  onClick={e => {
                    if (isHome) {
                      e.preventDefault()
                      scrollToSection(link.href)
                    }
                  }}
                >
                  {link.label}
                </a>
              )
            })}
          </nav>

          {/* Budget CTA */}
          <a
            href="#contato"
            className={`btn btn-primary ${styles.ctaBtn}`}
            onClick={e => {
              if (isHome) {
                e.preventDefault()
                scrollToSection('#contato')
              }
            }}
          >
            Solicitar orçamento
          </a>

          {/* Hamburger Mobile */}
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Stylized Envelope Cut Edge at bottom of header */}
        <div className={styles.envelopeBottomEdge} aria-hidden="true">
          <svg
            viewBox="0 0 1440 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.envelopeSvg}
            preserveAspectRatio="none"
          >
            <path
              d="M0 0 L680 0 L720 18 L760 0 L1440 0 L1440 24 L0 24 Z"
              fill="#060f1e"
              opacity="0.15"
            />
            <path
              d="M0 0 L700 0 L720 12 L740 0 L1440 0 L1440 3 L0 3 Z"
              fill="#1a4290"
            />
          </svg>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`${styles.mobileOverlay} ${menuOpen ? styles.mobileOverlayOpen : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
      <nav className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        <div className={styles.mobileMenuHeader}>
          <img src={logoBwe} alt="BWE Monitoramento" className={styles.mobileLogoImg} />
          <button className={styles.mobileClose} onClick={() => setMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <ul className={styles.mobileLinks}>
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a
                href={isHome ? link.href : `/${link.href}`}
                className={styles.mobileLink}
                onClick={e => {
                  if (isHome) {
                    e.preventDefault()
                    scrollToSection(link.href)
                  }
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.mobileCta}>
          <a
            href="#contato"
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={e => {
              if (isHome) {
                e.preventDefault()
                scrollToSection('#contato')
                setMenuOpen(false)
              }
            }}
          >
            Solicitar orçamento
          </a>
        </div>
      </nav>
    </header>
  )
}

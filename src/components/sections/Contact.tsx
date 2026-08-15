import { MessageCircle, Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contato" className={`section ${styles.section}`}>
      <div className="container">

        <AnimatedSection className={styles.header}>
          <span className="section-label">Entre em contato</span>
          <div className="accent-line" />
          <h2 className={styles.heading}>
            Fale com a BWE<br />Monitoramento
          </h2>
          <p className={styles.subheading}>
            Estamos prontos para entender a necessidade do seu imóvel e apresentar
            a melhor solução em segurança eletrônica.
          </p>
        </AnimatedSection>

        <div className={styles.layout}>

          {/* Contact info */}
          <AnimatedSection className={styles.infoCol} delay={100}>

            {/* WhatsApp */}
            <div className={styles.contactGroup}>
              <p className={styles.groupLabel}>WhatsApp</p>
              <div className={styles.contactItems}>
                <a
                  href="https://wa.me/5511954744900"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactItem}
                  id="contact-whatsapp-1"
                >
                  <MessageCircle size={18} className={styles.contactIcon} />
                  (11) 95474-4900
                </a>
                <a
                  href="https://wa.me/5511940066815"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactItem}
                  id="contact-whatsapp-2"
                >
                  <MessageCircle size={18} className={styles.contactIcon} />
                  (11) 94006-6815
                </a>
              </div>
            </div>

            {/* Telefone */}
            <div className={styles.contactGroup}>
              <p className={styles.groupLabel}>Telefone fixo</p>
              <a
                href="tel:+551151987450"
                className={styles.contactItem}
                id="contact-phone"
              >
                <Phone size={18} className={styles.contactIcon} />
                (11) 5198-7450
              </a>
            </div>

            {/* E-mail */}
            <div className={styles.contactGroup}>
              <p className={styles.groupLabel}>E-mail</p>
              <a
                href="mailto:bweinove@gmail.com"
                className={styles.contactItem}
                id="contact-email"
              >
                <Mail size={18} className={styles.contactIcon} />
                bweinove@gmail.com
              </a>
            </div>

            {/* Endereço */}
            <div className={styles.contactGroup}>
              <p className={styles.groupLabel}>Endereço</p>
              <div className={`${styles.contactItem} ${styles.contactAddress}`}>
                <MapPin size={18} className={styles.contactIcon} />
                <span>
                  Estrada Presidente Juscelino Kubitschek de Oliveira, 2615,
                  Loja 28 — Guarulhos, SP · CEP 07260-000
                </span>
              </div>
            </div>

            {/* Redes sociais */}
            <div className={styles.contactGroup}>
              <p className={styles.groupLabel}>Redes sociais</p>
              <div className={styles.socialLinks}>
                <a
                  href="https://www.instagram.com/we_monitoramento"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="Instagram da BWE Monitoramento"
                  id="contact-instagram"
                >
                  <Instagram size={20} />
                  <span>@we_monitoramento</span>
                </a>
                <a
                  href="https://www.facebook.com/BWEInove"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="Facebook da BWE Monitoramento"
                  id="contact-facebook"
                >
                  <Facebook size={20} />
                  <span>BWE Inove</span>
                </a>
              </div>
            </div>

            {/* Action buttons */}
            <div className={styles.actions}>
              <a
                href="https://wa.me/5511954744900?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                id="contact-btn-whatsapp"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
              <a
                href="tel:+551151987450"
                className="btn btn-ghost-blue"
                id="contact-btn-phone"
              >
                <Phone size={18} />
                Ligar
              </a>
              <a
                href="mailto:bweinove@gmail.com"
                className="btn btn-ghost-blue"
                id="contact-btn-email"
              >
                <Mail size={18} />
                E-mail
              </a>
            </div>
          </AnimatedSection>

          {/* Map */}
          <AnimatedSection className={styles.mapCol} delay={200}>
            <div className={styles.mapWrapper}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.0!2d-46.5!3d-23.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDI0JzAwLjAiUyA0NsKwMzAnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1000000000000!5m2!1spt-BR!2sbr&q=Estrada+Presidente+Juscelino+Kubitschek+de+Oliveira+2615+Guarulhos+SP"
                className={styles.map}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da BWE Monitoramento em Guarulhos-SP"
              />
            </div>
            <a
              href="https://maps.google.com/?q=Estrada+Presidente+Juscelino+Kubitschek+de+Oliveira+2615+Guarulhos+SP"
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn-ghost-blue btn-sm ${styles.mapCta}`}
              id="contact-btn-directions"
            >
              <MapPin size={16} />
              Como chegar
            </a>
          </AnimatedSection>

        </div>
      </div>
    </section>
  )
}

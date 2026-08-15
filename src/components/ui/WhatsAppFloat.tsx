import { MessageCircle } from 'lucide-react'

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5511954744900?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20um%20orçamento."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Falar pelo WhatsApp com a BWE Monitoramento"
      id="whatsapp-float-btn"
    >
      <MessageCircle size={26} color="white" />
    </a>
  )
}

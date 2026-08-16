export default function WhatsAppFloat() {
  return (
    <div className="whatsapp-float-wrap">
      <div className="whatsapp-bubble" aria-hidden="true">
        Precisa de ajuda? Fale agora pelo WhatsApp
      </div>
      <a
        href="https://wa.me/5511954744900?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20um%20orçamento."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Falar pelo WhatsApp com a BWE Monitoramento"
        id="whatsapp-float-btn"
      >
        <svg viewBox="0 0 32 32" aria-hidden="true" className="whatsapp-logo">
          <path
            fill="currentColor"
            d="M16.02 3.2A12.73 12.73 0 0 0 5.2 22.64L3.64 28.8l6.32-1.49A12.74 12.74 0 1 0 16.02 3.2Zm0 23.08c-2.05 0-3.96-.6-5.58-1.64l-.4-.25-3.74.88 1-3.64-.27-.42a10.33 10.33 0 1 1 8.99 5.07Zm5.82-7.74c-.32-.16-1.88-.93-2.17-1.03-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.36-.26-.62-.52-.53-.71-.54h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65 0 1.56 1.14 3.07 1.3 3.28.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.46.21 2.01.13.61-.09 1.88-.77 2.15-1.51.27-.74.27-1.38.19-1.51-.08-.13-.29-.21-.61-.37Z"
          />
        </svg>
      </a>
    </div>
  )
}

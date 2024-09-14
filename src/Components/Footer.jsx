import { useContext } from 'react'
import { ContextGlobal } from './utils/global.context';

const Footer = () => {

  const { state } = useContext(ContextGlobal);

  return (
    <footer className={state.theme}>
        <div className="footer-logo">
        <img src="/images/DH.png" alt='DH-logo' />
      </div>
      <div className="footer-icons">
        <img src="/images/ico-facebook.png" alt="Facebook" />
        <img src="/images/ico-instagram.png" alt="Instagram" />
        <img src="/images/ico-tiktok.png" alt="TikTok" />
        <img src="/images/ico-whatsapp.png" alt="WhatsApp" />
      </div>
    </footer>
  )
}

export default Footer

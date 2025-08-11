import logoFooter from '../assets/logo-footer.png';

export default function Footer() {
  return (
    <footer>
      <img src={logoFooter} alt="Logo Kasa" className="logo-footer" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

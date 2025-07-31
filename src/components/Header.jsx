import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <img src="/LOGO.png" alt="Logo Kasa" className="logo-image" />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </nav>
    </header>
  );
}

import { NavLink, Link } from 'react-router-dom';
import logoHeader from '@assets/logo-header.png';

export default function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logoHeader} alt="Logo Kasa" className="logo-image" />
      </Link>
      <nav>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          A propos
        </NavLink>
      </nav>
    </header>
  );
}

import { Link } from 'react-router-dom';
import '@styles/Notfound.scss';

export default function NotFound() {
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </div>
  );
}

import { useParams, Navigate } from 'react-router-dom';
import logements from '../data/logements.json';
import Slideshow from '../components/Slideshow';
import Collapse from '../components/Collapse';
import '../styles/housing.scss';


export default function Housing() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);

  if (!logement) return <Navigate to="/404" />;

  // Fonction pour afficher les étoiles selon la note
  const renderStars = () => {
    const stars = [];
    for(let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= logement.rating ? 'star filled' : 'star'}>★</span>
      );
    }
    return stars;
  };

  return (
    <div className="housing-container">
      <Slideshow pictures={logement.pictures} />

      <div className="housing-header">
        <div>
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <div className="tags">
            {logement.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="host-rating">
          <div className="host">
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>
          <div className="rating">{renderStars()}</div>
        </div>
      </div>

      <div className="housing-collapses">
        <Collapse title="Description" className="housing-collapse">
          <p>{logement.description}</p>
        </Collapse>
        <Collapse title="Équipements" className="housing-collapse">
          <ul>
            {logement.equipments.map((eq) => (
              <li key={eq}>{eq}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}
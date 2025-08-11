import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import Card from '../components/Card';
import logements from '../data/logements.json';
import bannerHome from '../assets/banner-home.png';

export default function Home() {
  return (
    <>
      <Banner
        image={bannerHome}
        text="Chez vous, partout et ailleurs"
        overlayOpacity={0.4}
      />

      <div className="cards-container">
        {logements.map((logement) => (
          <Link
            key={logement.id}
            to={`/housing/${logement.id}`}
            style={{ textDecoration: 'none' }}
          >
            <Card title={logement.title} cover={logement.cover} />
          </Link>
        ))}
      </div>
    </>
  );
}

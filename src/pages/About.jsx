import BannerCollapse from '../components/BannerCollapse';
import Collapse from '../components/Collapse';

export default function About() {
  return (
    <>
      <BannerCollapse />
    <div className="about-page">
      <Collapse title="Fiabilité" className="about-collapse">
        <p>Les annonces postées sur Kasa garantissent une fiabilité totale...</p>
      </Collapse>
      <Collapse title="Respect" className="about-collapse">
        <p>La bienveillance fait partie des valeurs fondatrices de Kasa...</p>
      </Collapse>
      <Collapse title="Service" className="about-collapse">
        <p>Nos équipes se tiennent à votre disposition pour vous fournir...</p>
      </Collapse>
      <Collapse title="Sécurité" className="about-collapse">
        <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs...</p>
      </Collapse>
    </div>
    </>
  );
}
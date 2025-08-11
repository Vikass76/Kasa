import '../styles/Banner.scss';

export default function Banner({
  image,
  text = '',
  overlayOpacity = 0.4,
  align = 'center',
  height = 223,
  className = '',
}) {
  return (
    <section
      className={`banner ${align === 'left' ? 'banner--left' : 'banner--center'} ${className}`}
      style={{ '--banner-h': `${height}px`, '--overlay-o': overlayOpacity }}
    >
      <img src={image} alt="" className="banner__img" />
      <div className="banner__overlay" aria-hidden="true" />
      {text && <h2 className="banner__text">{text}</h2>}
    </section>
  );
}

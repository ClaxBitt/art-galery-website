import "./DayGalerySection.css";
import symbolsPaintsDesktop from "../assets/desktop/image-grid-1.jpg";
import symbolsPaintsTablet from "../assets/tablet/image-grid-1.jpg";
import symbolsPaintsMobile from "../assets/mobile/image-grid-1.jpg";

function DayGalerySection() {
  return (
    <section className="day-galery-section">
      <picture>
        <source srcSet={symbolsPaintsDesktop} media="(min-width: (1024px)" />
        <source srcSet={symbolsPaintsTablet} media="(min-width: (768px)" />
        <source srcSet={symbolsPaintsMobile} />
        <img src={symbolsPaintsDesktop} alt="Paints about symbols and colors" />
      </picture>

      <div className="day-galery__info">
        <h2>
          Your day {window.screen.availWidth < 768 && <br />} at the gallery
        </h2>

        <p className="p--gr">
          Wander through our distinct collections and find new insights about
          our artists. Dive into the details of their creative process.
        </p>
      </div>
    </section>
  );
}

export default DayGalerySection;

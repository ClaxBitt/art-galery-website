import Button from "../../components/Button";
import imageMapDesktop from "../../assets/desktop/image-map.png";
import imageMapTablet from "../../assets/tablet/image-map.png";
import imageMapMobile from "../../assets/mobile/image-map.png";

import "./MapSection.css";

function MapSection() {
  return (
    <section className="map-container">
      <div className="button-container">
        <Button text="Back to home" target="left" url="/" />
      </div>

      <picture className="map-container__map">
        <source srcSet={imageMapDesktop} media="(min-width: 1024px)" />
        <source srcSet={imageMapTablet} media="(min-width: 560px)" />
        <source srcSet={imageMapMobile} />
        <img
          src={imageMapDesktop}
          alt="Our location"
          className="img--max-size"
        />
      </picture>
    </section>
  );
}

export default MapSection;

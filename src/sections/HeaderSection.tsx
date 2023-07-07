import Button from "../components/Button";

import "./HeaderSection.css";
import imageHeroDesktop from "../assets/desktop/image-hero.jpg";
import imageHeroTablet from "../assets/tablet/image-hero.jpg";
import imageHeroMobile from "../assets/mobile/image-hero.jpg";
import logoDark from "../assets/logo-dark.svg";
import logoLight from "../assets/logo-light.svg";

function HeaderSection() {
  return (
    <header className="eName">
      <div className="eName__bg eName__bg--first-layer">
        <picture className="eName__picture">
          <source srcSet={imageHeroDesktop} media="(min-width: 1024px)" />
          <source srcSet={imageHeroTablet} media="(min-width: 768px)" />
          <source srcSet={imageHeroMobile} />
          <img
            src={imageHeroDesktop}
            alt="desktop background about a grandmother"
            loading="lazy"
          />
        </picture>
      </div>

      <div className="eName__bg eName__bg--second-layer">
        <div className="eName__container--second-layer">
          <picture className="logo">
            <img
              src={logoDark}
              alt="Modern Art Galery dark logo"
              className="img--max-size"
              loading="lazy"
            />
          </picture>

          <div className="eName__info">
            <p className="p--gr">
              The arts in the collection of the Modern Art Gallery all started
              from a spark of inspiration. Will these pieces inspire you? Visit
              us and find out.
            </p>

            <Button text="Our Location" target="right" url="/location" />
          </div>
        </div>
      </div>

      <div className="eName__bg eName__bg--third-layer">
        <div className="hide__image__container">
          <img
            src={logoLight}
            alt="Modern Art Galery light logo"
            className="logo__third-layer"
            loading="lazy"
          />
        </div>
      </div>
    </header>
  );
}

export default HeaderSection;

import "./ImagesSection.css";
import tableCenterDesktop from "../assets/desktop/image-grid-2.jpg";
import tableCenterTablet from "../assets/tablet/image-grid-2.jpg";
import tableCenterMobile from "../assets/mobile/image-grid-2.jpg";
import peopleHallDesktop from "../assets/desktop/image-grid-3.jpg";
import peopleHallTablet from "../assets/tablet/image-grid-3.jpg";
import peopleHallMobile from "../assets/mobile/image-grid-3.jpg";

function ImagesSection() {
  return (
    <div className="images__container">
      <picture className="container__grid1">
        <source srcSet={tableCenterDesktop} media="(min-width: 1024px)" />
        <source srcSet={tableCenterTablet} media="(min-width: 768px)" />
        <source srcSet={tableCenterMobile} />
        <img
          src={tableCenterDesktop}
          alt="A yellow table in the center in white room"
          className="img--max-size"
          loading="lazy"
        />
      </picture>

      <div className="images__info-container">
        <picture className="info-container__grid2">
          <source srcSet={peopleHallDesktop} media="(min-width: 1024px)" />
          <source srcSet={peopleHallTablet} media="(min-width: 768px)" />
          <source srcSet={peopleHallMobile} />
          <img
            src={peopleHallDesktop}
            alt="People in hall watching paints"
            className="img--max-size"
            loading="lazy"
          />
        </picture>

        <div className="images__info">
          <h1>Come & Be Inspired</h1>
          <p>
            We’re excited to welcome you to our gallery and see how our
            collections influence you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ImagesSection;

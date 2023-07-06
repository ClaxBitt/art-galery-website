import "./LocationInfoSection.css";

function LocationInfoSection() {
  return (
    <section className="location">
      <h1 className="location__title">Our Location</h1>

      <div className="location__info">
        <h2 className="info__title">99 King Street</h2>

        <p className="info__ubication">
          Newport <br />
          RI 02840 <br />
          United States of America <br />
        </p>

        <p className="info__description">
          Our newly opened gallery is located near the Edward King House on 99
          King Street, the Modern Art Gallery is free to all visitors and open
          seven days a week from 8am to 9pm.
        </p>
      </div>
    </section>
  );
}

export default LocationInfoSection;

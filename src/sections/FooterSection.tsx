import "./FooterSection.css";
import logoLight from "../assets/logo-light.svg";
import iconFacebook from "../assets/icon-facebook.svg";
import iconInstagran from "../assets/icon-instagram.svg";
import iconTwitter from "../assets/icon-twitter.svg";

interface FooterProps {
  bgColor: "gold" | "dark";
}

function FooterSection(props: FooterProps) {
  let footerBgColorClass = props.bgColor == "dark" ? "dark" : "gold";

  return (
    <footer className={`bg--${footerBgColorClass}`}>
      <img
        src={logoLight}
        alt="Modern Art Galery light logo"
        className="logo"
      />

      <p>
        The Modern Art Gallery is free to all visitors and open seven days a
        week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
      </p>

      <div className="footer__social">
        <img src={iconFacebook} alt="Icon Facebook" />
        <img src={iconInstagran} alt="Icon Instagram" />
        <img src={iconTwitter} alt="Icon Twitter" />
      </div>
    </footer>
  );
}

export default FooterSection;

import "./Button.css";
import arrowRight from "../assets/icon-arrow-right.svg";
import arrowLeft from "../assets/icon-arrow-left.svg";

import { useNavigate } from "react-router-dom";

interface ButtonProps {
  text: string;
  target: "left" | "right";
  url: string;
}

function Button(props: ButtonProps) {
  let arrowIcon = props.target == "left" ? arrowLeft : arrowRight;

  const navigate = useNavigate();

  const toUrl = (url: string) => {
    navigate(url);
  };

  return (
    <div className="btn-container">
      <button className="btn-action" onClick={() => toUrl(props.url)}>
        {props.text}
      </button>

      <div className={`arrow arrow--${props.target}`}>
        <img src={arrowIcon} alt="arrow icon" />
      </div>
    </div>
  );
}
export default Button;

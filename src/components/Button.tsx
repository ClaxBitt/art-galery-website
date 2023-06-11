import './Button.css';
import arrowRight from '../assets/icon-arrow-right.svg';
import arrowLeft from '../assets/icon-arrow-left.svg';

interface ButtonProps {
  text: string;
  target: "left" | "right";
}

function Button(props: ButtonProps) {
  let arrowIcon = (props.target == "left") ? arrowLeft : arrowRight;

  return (
    <div className="btn-container">
      <button className="btn-action">
        {props.text}
      </button>

      <div className={`arrow arrow--${props.target}`}>
        <img src={arrowIcon} alt="arrow icon" />
      </div>
    </div>
  )
}
export default Button;
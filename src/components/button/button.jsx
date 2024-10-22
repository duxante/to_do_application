import './button.style.css';

const Button = ({ redirect, buttonText, label, onClickHandler }) => {
  return (
    <button className={`buttonstyle $(customClass)`} onClick={redirect}>
      {buttonText}
    </button>
  );
};

export default Button;

import "./button.styles.scss";

const classType = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ type, children, ...buttonProps }) => {
  return (
    <button className={`button-container ${classType[type]}`} {...buttonProps}>
      {children}
    </button>
  );
};

export default Button;

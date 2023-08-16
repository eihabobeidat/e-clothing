import "./button.styles.scss";

const classType = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ buttonType, children, ...buttonProps }) => {
  return (
    <button
      className={`button-container ${classType[buttonType]}`}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;

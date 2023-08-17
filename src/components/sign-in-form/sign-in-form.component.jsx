import { useState } from "react";
import {
  signInWithGoogle,
  signInWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";
import Button from "../button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [{ email, password }, setForm] = useState(defaultFormFields);

  const handleChange = ({ target: { name, value } }) => {
    setForm((state) => ({ ...state, [name]: value }));
  };

  const resetForm = () => setForm(defaultFormFields);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email && password?.length > 5) {
      try {
        await signInWithEmailAndPassword(email, password);
      } catch (error) {
        console.log("Error when Signing up the user", error.message);
      }
      resetForm();
    }
  };

  const logGoogleUser = async () => {
    await signInWithGoogle("popup");
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign In with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Email"}
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          required
        />

        <FormInput
          label={"Password"}
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          required
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={logGoogleUser}>
            Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;

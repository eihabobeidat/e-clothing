import { useState } from "react";
import {
  createAuthUserFromEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-up-form.styles.scss";
import Button from "../button/button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [{ displayName, email, password, confirmPassword }, setForm] =
    useState(defaultFormFields);

  const handleChange = ({ target: { name, value } }) => {
    setForm((state) => ({ ...state, [name]: value }));
  };

  const resetForm = () => setForm(defaultFormFields);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password === confirmPassword && password.length > 5) {
      try {
        const { user } = await createAuthUserFromEmailAndPassword(
          email,
          password
        );
        await createUserDocumentFromAuth({ ...user, displayName });
      } catch (error) {
        console.log("Error when Signing up the user", error.message);
      }
      resetForm();
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Display Name"}
          name="displayName"
          type="text"
          value={displayName}
          onChange={handleChange}
          required
        />

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

        <FormInput
          label={"Confirm Password"}
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={handleChange}
          required
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;

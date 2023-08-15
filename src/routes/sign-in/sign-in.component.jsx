import {
  signInWithGoogle,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGoogle("popup");
    const userDocument = await createUserDocumentFromAuth(user);
    console.log(userDocument);
  };
  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>Google Sign In</button>
    </div>
  );
};

export default SignIn;

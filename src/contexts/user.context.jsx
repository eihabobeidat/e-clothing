import { createContext, useEffect, useReducer } from "react";
import {
  onAuthStateChangeListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const userReducer = (state, { type, paylaod }) => {
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: paylaod };
    default:
      throw new Error(`Unhandled type in userReducer: ${type}`);
  }
};

const INITIAL_STATE = {
  currentUser: null,
};

export const UserProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const setCurrentUser = (payload) =>
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload });

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener(async (user) => {
      await createUserDocumentFromAuth(user);
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

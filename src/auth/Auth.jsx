import { createContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth/web-extension";
import firebaseAuth from "/src/firebase/firebase.config";

export const UserContext = createContext(null);

export default function Auth({ children }) {
  const signupUser = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };
  
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password);
  }

  const userAuth = {
    signupUser,
    loginUser,
  };

  return <UserContext.Provider value={userAuth}>{children}</UserContext.Provider>;
}

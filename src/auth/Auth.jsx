import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth/web-extension";
import firebaseAuth from "/src/firebase/firebase.config";

export const UserContext = createContext(null);

export default function Auth({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signupUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(firebaseAuth, email, password);
  };

  const signoutUser = () => {
    setLoading(true);
    return signOut(firebaseAuth);
  };

  useEffect(() => {
    const subscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      subscribe();
    };
  }, [user, loading]);

  const userAuth = {
    user,
    loading,
    signupUser,
    loginUser,
    signoutUser,
  };

  return (
    <UserContext.Provider value={userAuth}>{children}</UserContext.Provider>
  );
}

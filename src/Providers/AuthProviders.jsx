import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const UserContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
  // user state
  const [user, setUser] = useState(null);

  // loading
  const [loading, setLoading] = useState(true);

  // function for createUser
  const createUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  // function for sign in user
  const signInUser = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  // function user sign out
  const logOut = () => {
    return signOut(auth);
  };

  // ovserbe auth state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("On auth state changed", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const userInfo = {
    user,
    createUser,
    signInUser,
    logOut,
    loading,
  };

  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};

export default AuthProviders;
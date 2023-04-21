import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const UserContext = createContext(null);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

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


  // signin with google
  const singInWithGoogle = () => {
    return signInWithPopup (auth, googleProvider);
  }

  const userInfo = {
    user,
    createUser,
    signInUser,
    logOut,
    loading,
    singInWithGoogle
  };

  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};

export default AuthProviders;
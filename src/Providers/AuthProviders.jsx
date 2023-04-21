import React, { createContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const UserContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState("Rajib Rahman");

  // function for createUser
  const createUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  // function for sign in user
  const signInUser = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const userInfo = {
    user,
    createUser,
    signInUser,
  };

  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};

export default AuthProviders;
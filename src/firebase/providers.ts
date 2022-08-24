import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { FirebaseAuth } from "./config";
import { LoginType } from "../types/Login";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    const credentials = GoogleAuthProvider.credentialFromResult(result);
    console.log(credentials);
  } catch (error) {
    console.log(error);
  }
};

export const signInWithEmailPassword = async ({
  email,
  password,
}: LoginType) => {
  try {
    const { user } = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};

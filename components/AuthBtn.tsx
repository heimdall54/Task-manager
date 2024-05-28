"use client";

import styles from "@/styles/sidebar.module.css";
import { signIn, signOut } from "next-auth/react";

const Login = () => {
  return (
    <button className={styles.authbtn} onClick={() => signIn("google")}>
      Connexion
    </button>
  );
};

const Logout = () => {
  return (
    <button className={styles.authbtn} onClick={() => signOut()}>
      Deconnexion
    </button>
  );
};

export { Login, Logout };

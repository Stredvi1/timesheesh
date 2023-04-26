import styles from '../styles/Home.module.css';
import LoginForm from "../components/loginForm";
import React from "react";

export default function Home() {
  return (
      <div className={styles.wrapper}>
          <LoginForm/>
      </div>
  )
}

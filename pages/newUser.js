import styles from "../styles/Home.module.css";

import React from 'react';
import RegistrationForm from '../components/registrationForm';


export default function newUser() {

    return (
        <div className={styles.wrapper}>
            <RegistrationForm/>
        </div>
    )
}
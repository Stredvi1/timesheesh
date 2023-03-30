import styles from "../styles/Home.module.css";

import React from 'react';
import MyForm from '../components/MyForm'
import RegistrationForm from '../components/Form/registrationForm'


export default function newUser() {

    return (
        <div className={styles.wrapper}>
            <MyForm/>
        </div>
    )
}
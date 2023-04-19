import styles from "../styles/Home.module.css";

import React from 'react';
import RecordForm from '../components/recordForm';


export default function newUser() {

    return (
        <div className={styles.wrapper}>
            <RecordForm/>
        </div>
    )
}
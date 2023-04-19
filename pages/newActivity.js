import styles from "../styles/Home.module.css";

import React from 'react';
import ActivityForm from '../components/activityForm';


export default function newUser() {

    return (
        <div className={styles.wrapper}>
            <ActivityForm/>
        </div>
    )
}
import styles from "../styles/Home.module.css";

import React from 'react';
import ProjectForm from '../components/projectForm';


export default function newUser() {

    return (
        <div className={styles.wrapper}>
            <ProjectForm/>
        </div>
    )
}
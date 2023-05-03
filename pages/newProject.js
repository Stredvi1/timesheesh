import styles from "../styles/Home.module.css";

import React from 'react';
import ProjectForm from '../components/projectForm';
import {getSession} from 'next-auth/react';
import {useRouter} from 'next/navigation';


export default function newProject({notSession}) {
    const router = useRouter()

    if (!notSession) {
        router.push('/')
    } else if (notSession.user.role === 3 || notSession.user.role === 4) {
        router.push('/')
    }



    return (
        <div className={styles.wrapper}>
            <ProjectForm/>
        </div>
    )
}

export async function getServerSideProps(context) {
    return {
        props: {
            notSession: await getSession(context)
        }
    }
}
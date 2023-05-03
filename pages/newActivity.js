import styles from "../styles/Home.module.css";

import React from 'react';
import ActivityForm from '../components/activityForm';
import {getSession} from 'next-auth/react';
import {useRouter} from 'next/navigation';


export default function newActivity({notSession}) {
    const router = useRouter()

    if (!notSession) {
        router.push('/')
    } else if (notSession.user.role === 4) {
        router.push('/')
    }

    return (
        <div className={styles.wrapper}>
            <ActivityForm/>
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
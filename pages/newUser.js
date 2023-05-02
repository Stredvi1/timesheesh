import styles from "../styles/Home.module.css";

import RegistrationForm from '../components/registrationForm';
import { getSession } from 'next-auth/react';
import {redirect} from "next/navigation";

export default function newUser({notSession}) {
    if (!notSession) {
        redirect('/');
    } else if (notSession.user.role === 2) {
        redirect('/');
    }

    if (session.status === 'loading') {
        return '';
    }

    return (
        <div className={styles.wrapper}>
            <RegistrationForm/>
        </div>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {
            notSession: await getSession(context)
        }
    }
}

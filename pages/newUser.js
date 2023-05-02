import styles from "../styles/Home.module.css";

import RegistrationForm from '../components/registrationForm';
import {getSession} from 'next-auth/react';
import {redirect} from "next/navigation";
import {useRouter} from 'next/navigation'


export default function newUser({notSession}) {
    const router = useRouter()

    if (!notSession) {
        redirect('/');
    } else if (notSession.user.role === 1) {
        console.log(notSession.user.id)
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

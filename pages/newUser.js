import styles from "../styles/Home.module.css";

import RegistrationForm from '../components/registrationForm';
import {getSession, useSession} from 'next-auth/react';
import {useRouter} from 'next/navigation';
import {redirect} from "next/navigation";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";


export default function newUser({notSession}) {
    const router = useRouter()

    /*if (!notSession) {
        router.push('/')
    } else if (notSession.user.role === 2 || notSession.user.role === 3 || notSession.user.role === 4) {
        router.push('/')
    } else if(notSession.user.role === 1){
        return (
            <div className={styles.wrapper}>
                <RegistrationForm/>
            </div>
        );
    }*/
}

export async function getServerSideProps(context) {
    return {
        props: {
            notSession: await getSession(context)
        }
    }
}

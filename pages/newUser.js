import styles from "../styles/Home.module.css";

import RegistrationForm from '../components/registrationForm';
import {useSession} from 'next-auth/react';
import {useRouter} from 'next/navigation';
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";


export default function newUser() {
    return '';
    const router = useRouter();

    const {data: session} = useSession();

    //if is session undefined -> that means loading
    if (session === undefined) {
        return '';
    }

    //null is empty session (user is not authenticated)
    if (session === null) {
        router.push('/');
        //there must be a return els it will continue
        return '';
    }

    if (session.user.role !== 1) {
        //todo kick him!
        router.push('/');
        return '';
    }

    return (
        <div className={styles.wrapper}>
            <RegistrationForm/>
        </div>
    );

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

/*export async function getServerSideProps(context) {
    return {
        props: {
            session: await getServerSession(
                context.req,
                context.res,
                authOptions
            ),
        },
    }
}*/

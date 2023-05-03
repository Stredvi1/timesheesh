import styles from "../styles/Home.module.css";

import RegistrationForm from '../components/registrationForm';
import {useSession} from 'next-auth/react';
import {useRouter} from 'next/navigation';
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";


export default function newUser() {

    const router = useRouter();

    const {data: session} = useSession();

    //if is session undefined -> that means loading
    if (session === undefined) {
        return '';
    }else if (session === null) {
        //null is empty session (user is not authenticated)
        router.push('/');
        //there must be a return els it will continue
        return '';
    }else if (session.user.role !== 1) {
        router.push('/');
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
            session: await getServerSession(
                context.req,
                context.res,
                authOptions
            ),
        },
    }
}

import styles from '../styles/Home.module.css';
import LoginForm from "../components/loginForm";
import React from "react";
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";

export default function Home() {

    const session = useSession();
    const router = useRouter();
    if (session.status === 'authenticated') {
        // router.back();
        return '';
    } else if (session.status === 'loading') {
        return'';
    }

    return (
        <div className={styles.wrapper}>
            <LoginForm/>
        </div>
    )
}

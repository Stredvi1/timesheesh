import styles from "../styles/Home.module.css";

import React, {useEffect} from 'react';
import RegistrationForm from '../components/registrationForm';
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";
import prisma from "/lib/prisma";


export default function newUser({sdfs}) {
    console.log('NEW uSER ', sdfs);

    const session = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session.status === 'unauthenticated') {
            router.replace('/').catch();
        }
    }, [session]);

    if (session.status === 'loading') {
        return '';
    }

    return (
        <div className={styles.wrapper}>
            <RegistrationForm/>
        </div>
    );
}

export async function getStaticProps() {
    const a = await prisma.tlogin.findUnique({where:{email: 'xd@email.xy'}});

    return {
      props: {
          sdfs: a
      }
    };
}

import styles from "../styles/Home.module.css";

import React from 'react';
import ProjectForm from '../components/projectForm';
import {useSession} from 'next-auth/react';
import {useRouter} from 'next/navigation';
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";


export default function newProject() {
    const router = useRouter();

    const {data: session} = useSession();

    if (session === undefined) {
        return '';
    }else if (session === null) {
        router.push('/');
        return '';
    }else if (session.user.role !== 1 && session.user.role !== 2) {
        router.push('/');
        return '';
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
            session: await getServerSession(
                context.req,
                context.res,
                authOptions
            ),
        },
    }
}
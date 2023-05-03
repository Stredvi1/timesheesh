import styles from '../styles/Home.module.css';
import LoginForm from "../components/forms/loginForm";
import React from "react";
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";
import {useSearchParams} from "next/navigation";
import addUser from "@/posters/postNewUser";



export default function Home() {

    const session = useSession();
    const router = useRouter();
    const search = useSearchParams();



    if (session.status === 'authenticated') {
        // router.back();
        return '';
    } else if (session.status === 'loading') {
        return '';
    }

    async function add(user) {
        const res = await addUser(user);

        if(res) {
            await router.push('/');
        }
    }

    if(search.get('createAdmin') == 1){
        //todo solve admin creation
        let admin = {};
        admin.name = 'Admin';
        admin.surname = 'Admin';
        admin.birtNumber = '999999/0000';
        admin.email = 'admin@admin.admin';
        admin.password = 'admin1234';
        admin.type = 1;
        admin.bankAccount = '';
        admin.bankCode = '';

        console.log(admin)
        add(admin);
    }


    return (
        <div className={styles.wrapper}>
            <LoginForm/>
        </div>
    )
}


import styles from '../styles/Home.module.css';
import {Typography, Box, Stack} from '@mui/material';


import Projects from "../loaders/loadProjects";
import AddProject from "../components/addButton";
import Payroll from "@/loaders/loadPayroll";
import {useSession} from "next-auth/react";
import {Conditional} from "@/utils/Conditional";
import {useEffect} from "react";
import details1 from "@/loaders/loadProjectDetails1";



export default function Overview() {
    const {data: session, status} = useSession();
    useEffect(() => {


    }, [session]);
    return (
        <>
            <div className={styles.wrapper}>
                <Box className={styles.upperBox}>
                    <Typography variant="h3">Vítejte, {session?.user.name}</Typography>
                </Box>
               <Stack
               direction={"row"}>

                   <Conditional showWhen={status === "authenticated"}>
                        <Projects/>
                   </Conditional>
                   <Conditional showWhen={status === "authenticated" && session?.user.role !== 4}>
                       <Payroll/>
                   </Conditional>
               </Stack>
                {(session?.user.role === 1 || session?.user.role === 2) && <AddProject url={"/newProject"} name={"Projekt"} useId={false}/>}
            </div>
        </>
    )
}


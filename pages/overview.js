
import styles from '../styles/Home.module.css';
import {Typography, Box, Stack} from '@mui/material';


import Projects from "../loaders/loadProjects";
import AddProject from "../components/addButton";
import PayrollCard from "../components/payrollCard";
import {getSession, useSession} from "next-auth/react";



export default function Overview({notSession}) {

    return (
        <>
            <div className={styles.wrapper}>
                <Box className={styles.upperBox}>
                    <Typography variant="h3">Vítejte, {notSession.user.name}</Typography>
                </Box>
                <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
                    <Stack flexWrap spacing={4} sx={{p: 6, width: '100%'}} direction="row">
                        <Projects/>
                    </Stack>
                    <div style={{width: 'fit-content', right: 0, position: "fixed"}}>
                        <PayrollCard/>
                    </div>
                </div>

                <AddProject url={"/newProject"} name={"Projekt"} useId={false}/>
            </div>
        </>
    )
}

export async function getServerSideProps(context) {
    return {
        props: {
            notSession: await getSession(context)
        }
    }
}
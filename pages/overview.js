import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {Typography, Box, Stack} from '@mui/material';


import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Projects from "../loaders/loadProjects";



export default function Overview() {

    return (

        <>
            <div className={styles.wrapper}>

                <Box className={styles.upperBox}>
                    <Typography variant="h3">Vítejte, %Jan Novák%</Typography>
                </Box>

                <Stack flexWrap spacing={4} direction="row">

                    <Projects/>

                </Stack>
            </div>
        </>
    )

}
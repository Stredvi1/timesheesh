import Head from 'next/head';
import styles from '../styles/Home.module.css';
import * as m from '@mui/material';
import {styled} from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2'
import Paper from '@mui/material/Paper';

import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Projects from "../loaders/loadProjects";


const Project = styled(Paper)(({theme}) => ({
    backgroundColor: '#edf4fc',
    ...theme.typography.body1,
    padding: theme.spacing(4),
    color: theme.palette.text.contrastText,
}));


export default function Overview() {

    return (

        <>
            <div className={styles.wrapper}>

                <m.Box className={styles.upperBox}>
                    <m.Typography variant="h3">Vítejte, %Jan Novák%</m.Typography>
                </m.Box>

                <m.Stack flexWrap spacing={4} direction="row">

                    <Projects/>

                </m.Stack>
            </div>
        </>
    )

}
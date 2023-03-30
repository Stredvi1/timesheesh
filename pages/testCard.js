import {useEffect, useState} from "react";
import {Card} from '@mui/material';
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Project = styled(Paper)(({ theme }) => ({
    backgroundColor: '#edf4fc',
    ...theme.typography.body1,
    padding: theme.spacing(4),
    color: theme.palette.text.contrastText,
}));

export default function test() {
    useEffect(() => {
        async function getPageData()
    }, []);
    return (
        <>


        </>
    )
}
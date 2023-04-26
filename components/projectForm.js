"use client"
import {useFormik} from "formik";
import {Button, Stack, TextField, Paper, Box, Alert, AlertTitle, Snackbar, IconButton, Typography} from "@mui/material";
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {ProjectScheme} from "./Schemes/projectScheme";
import React from "react";
import addProject from "../posters/postNewProject";
import {useRouter} from "next/router";
import dayjs from 'dayjs';
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DateField} from "@mui/x-date-pickers";
import {CloseIcon} from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";
import Link from "next/link";


export default function ProjectForm() {

    const [error, setError] = React.useState(false);
    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            projectName: '',
            budget: '',
            deadline: null,
            description: '',
        },
        validationSchema: ProjectScheme,
        onSubmit: async (values) => {
            await handleSubmit(values)
        },
    });

    async function handleSubmit(values) {
        const res = await addProject(values);

        if (res) {
            await router.push("/overview")
        } else {
            setError(true);
        }
    }

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <Stack direction="column"
                    spacing={6}
                    justifyContent="center"
                    alignItems="center"
                    margin={4}>
                    <Paper elevation={3}>
                        <Box padding={4}>
                            <Stack direction="column"
                                   spacing={2}
                                   justifyContent="center"
                                   alignItems="center">
                                <Typography variant="h4">Vytvoření projektu</Typography>
                                <TextField
                                    fullWidth
                                    id="projectName"
                                    label="Název projektu"
                                    required
                                    variant="outlined"
                                    {...formik.getFieldProps('projectName')}
                                    error={formik.touched.projectName && Boolean(formik.errors.projectName)}
                                    helperText={formik.touched.projectName && formik.errors.projectName}
                                />
                                <TextField
                                    fullWidth
                                    id="budget"
                                    label="Rozpočet"
                                    placeholder="0.00"
                                    required
                                    variant="outlined"
                                    {...formik.getFieldProps('budget')}
                                    error={formik.touched.budget && Boolean(formik.errors.budget)}
                                    helperText={formik.touched.budget && formik.errors.budget}
                                />
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DateField
                                        fullWidth
                                        disablePast
                                        id="deadline"
                                        label="Deadline"
                                        required
                                        variant="outlined"
                                        format="DD-MM-YYYY"
                                        onChange={(value) => {
                                            console.log(dayjs(value).format())
                                            formik.setFieldValue('deadline', dayjs(value).format("YYYY-MM-DD"));
                                        }}
                                        error={formik.touched.deadline && Boolean(formik.errors.deadline)}
                                        helperText={formik.touched.deadline && formik.errors.deadline}
                                    />
                                </LocalizationProvider>
                                <TextField
                                    fullWidth
                                    id="description"
                                    label="Popis"
                                    required
                                    variant="outlined"
                                    multiline
                                    rows={6}
                                    {...formik.getFieldProps('description')}
                                    error={formik.touched.description && Boolean(formik.errors.description)}
                                    helperText={formik.touched.description && formik.errors.description}
                                />
                                <Link href="./overview">
                                    <Button variant="text">Zrušit</Button>
                                </Link>
                                <Button type="submit" variant="contained">Vyvořit projekt</Button>
                            </Stack>
                        </Box>
                    </Paper>
                </Stack>
            </form>

            <Snackbar
                open={error}
                autoHideDuration={6000}
                >
                <Alert
                    severity="error"
                    variant="filled"
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setError(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{ mb: 2 }}
                >
                    <AlertTitle>Chyba</AlertTitle>
                    Nastala neočekávaná chyba v databázi
                </Alert>
            </Snackbar>

        </>
    )
}

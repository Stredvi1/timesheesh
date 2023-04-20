"use client"
import {useFormik} from "formik";
import {Button, Stack, TextField, Paper, Box} from "@mui/material";
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {ProjectScheme} from "./Schemes/projectScheme";
import React from "react";
import addProject from "../posters/postNewProject";
import {useRouter} from "next/router";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import dayjs from 'dayjs';
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DateField} from "@mui/x-date-pickers";


export default function ProjectForm() {

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
        }
    }

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <Paper elevation={3}>
                    <Box padding={4}>
                        <Stack direction="column" spacing={6}
                               justifyContent="center"
                               alignItems="center">


                            <TextField
                                id="projectName"
                                label="Název projektu"
                                required
                                variant="outlined"
                                {...formik.getFieldProps('projectName')}
                                error={formik.touched.projectName && Boolean(formik.errors.projectName)}
                                helperText={formik.touched.projectName && formik.errors.projectName}/>

                            <TextField
                                id="budget"
                                label="Rozpočet"
                                placeholder="0.00"
                                required
                                variant="outlined"
                                {...formik.getFieldProps('budget')}
                                error={formik.touched.budget && Boolean(formik.errors.budget)}
                                helperText={formik.touched.budget && formik.errors.budget}/>

                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateField
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
                                id="description"
                                label="Popis"
                                required
                                variant="outlined"
                                multiline
                                rows={6}
                                {...formik.getFieldProps('description')}
                                error={formik.touched.description && Boolean(formik.errors.description)}
                                helperText={formik.touched.description && formik.errors.description}/>

                            <Button
                                variant="text"
                                href="./overview">Zrušit
                            </Button>
                            <Button
                                type="submit"
                                variant="contained"
                            >Vyvořit projekt
                            </Button>
                        </Stack>
                    </Box>
                </Paper>
            </form>
        </>
    )
}

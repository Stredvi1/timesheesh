"use client"
import {useFormik} from "formik";
import {Button, Stack, TextField, Paper, Box} from "@mui/material";
import {ProjectScheme} from "./Schemes/projectScheme";
import React from "react";

export default function ProjectForm() {
    const formik = useFormik({
        initialValues: {
            projectName: '',
            budget: '',
            deadline: '',
            description: '',
        },
        validationSchema: ProjectScheme,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <Stack direction="column" spacing={6}
                       justifyContent="center"
                       alignItems="center">

                    <Paper elevation={3}>
                        <Box padding={4}>
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

                            <TextField
                                id="deadline"
                                label="Deadline"
                                placeholder="rrrr-mm-dd"
                                required
                                variant="outlined"
                                {...formik.getFieldProps('deadline')}
                                error={formik.touched.deadline && Boolean(formik.errors.deadline)}
                                helperText={formik.touched.deadline && formik.errors.deadline}/>

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
                        </Box>
                    </Paper>
                </Stack>
            </form>
        </>
    )
}

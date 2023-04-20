"use client"
import {useFormik} from "formik";
import {
    Stack, Paper, Box, Typography, TextField, InputLabel, Select, MenuItem, Button, FormControl
} from "@mui/material";
import {RecordScheme} from "./Schemes/recordScheme";
import React from "react";

export default function NewProject() {
    const formik = useFormik({
        initialValues: {
            workingTime: '',
            date: '',
            description: '',
        },
        validationSchema: RecordScheme,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <Stack direction="column"
                       spacing={6}
                       justifyContent="center"
                       alignItems="center"
                       margin={4}
                >
                    <Paper elevation={3}>
                        <Box padding={2}>
                            <Stack
                                direction="column"
                                spacing={3}
                                justifyContent="center"
                                alignItems="center"
                                margin={4}
                                sx={{
                                    width: 300,
                                    maxWidth: '100%',
                                }}
                            >
                                <Typography variant="h4">Vytvoření výkazu</Typography>
                                <TextField
                                    fullWidth
                                    id="workingTime"
                                    label="Odpracovaný čas"
                                    placeholder="0.00"
                                    required
                                    variant="outlined"
                                    {...formik.getFieldProps('workingTime')}
                                    error={formik.touched.workingTime && Boolean(formik.errors.workingTime)}
                                    helperText={formik.touched.workingTime && formik.errors.workingTime}/>
                                <TextField
                                    fullWidth
                                    id="date"
                                    label="Datum"
                                    placeholder="rrrr-mm-dd"
                                    required
                                    variant="outlined"
                                    {...formik.getFieldProps('date')}
                                    error={formik.touched.date && Boolean(formik.errors.date)}
                                    helperText={formik.touched.date && formik.errors.date}/>
                                <TextField
                                    fullWidth
                                    id="description"
                                    label="Popis"
                                    required
                                    variant="outlined"
                                    multiline
                                    rows={4}
                                    {...formik.getFieldProps('description')}
                                    error={formik.touched.description && Boolean(formik.errors.description)}
                                    helperText={formik.touched.description && formik.errors.description}/>
                                <Button
                                    variant="contained"
                                    type="submit">Vytvořit výkaz
                                </Button>
                            </Stack>
                        </Box>
                    </Paper>
                </Stack>
            </form>
        </>
    )
}

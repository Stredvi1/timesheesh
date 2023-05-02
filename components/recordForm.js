"use client"
import {useFormik} from "formik";
import {
    Stack, Paper, Box, Typography, TextField, Button, AlertTitle, Snackbar, Alert, IconButton
} from "@mui/material";
import {RecordScheme} from "./Schemes/recordScheme";
import React from "react";
import {useRouter} from "next/router";
import addRecord from "../posters/postNewRecord";
import {CloseIcon} from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DateField} from "@mui/x-date-pickers";
import dayjs from "dayjs";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";


export default function NewRecord() {

    const [error, setError] = React.useState(false);
    const [disabled, setDisabled] = React.useState(false);
    const router = useRouter();
    const {activityId} = router.query;
    const session = useSession();

    const formik = useFormik({
        initialValues: {
            workingTime: '',
            date: '',
            description: '',
        },
        validationSchema: RecordScheme,
        onSubmit: async (values, {resetForm}) => {
            setDisabled(true);
            await handleSubmit(values);
        },
    });

    async function handleSubmit(values) {

        values.activityId = activityId;
        values.userId = session.data.user;
        const res = await addRecord(values);

        if (res) {
            router.reload();
        } else {
            setError(true);
        }
        setDisabled(false);
    }

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

                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DateField
                                        fullWidth
                                        id="date"
                                        label="Datum"
                                        required
                                        variant="outlined"
                                        format="DD-MM-YYYY hh:mm"
                                        onChange={(value) => {
                                            formik.setFieldValue('date', dayjs(value).format("YYYY-MM-DD hh:mm:ss"));
                                        }}
                                        error={formik.touched.date && Boolean(formik.errors.date)}
                                        helperText={formik.touched.date && formik.errors.date}
                                    />
                                </LocalizationProvider>

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
                                    helperText={formik.touched.description && formik.errors.description}
                                />

                                <Button variant="contained" type="submit" disabled={disabled}>Vytvořit výkaz</Button>
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

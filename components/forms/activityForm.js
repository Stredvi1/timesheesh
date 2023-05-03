"use client"
import {useFormik} from "formik";
import {
    Stack,
    Paper,
    Box,
    Typography,
    TextField,
    MenuItem,
    Button,
    Alert,
    IconButton,
    AlertTitle, Snackbar
} from "@mui/material";
import React from "react";
import {ActivityScheme} from "./schemas/activityScheme";
import Workers from "../../loaders/loadWorkers";
import HourRates from "../../loaders/loadHourRates";
import addActivity from "../../posters/postNewActivity";
import {useRouter} from "next/router";
import {CloseIcon} from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";
import {useSearchParams} from "next/navigation";


export default function ActivityForm() {

    const [error, setError] = React.useState(false);
    const router = useRouter();
    const search = useSearchParams();
    const id = search.get('id');

    const formik = useFormik({
        initialValues: {
            activityName: '',
            timeFund: '',
            worker: '',
            hourRate: '',
            note: '',

        },
        validationSchema: ActivityScheme,
        onSubmit: async (values) => {
            await handleSubmit(values);
        },
    });

    async function handleSubmit(values) {

        values.projectID = parseInt(id);
        values.timeFund = parseFloat(values.timeFund);

        const res = await addActivity(values);

        if (res) {
            await router.back();
        } else {
            setError(true);
        }
    }

    const workers = Workers();
    const hourRates = HourRates();

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
                            <Stack
                                direction="column"
                                spacing={2}
                                justifyContent="center"
                                alignItems="center">
                                <Typography variant="h4">Vytvoření aktivity</Typography>
                                <TextField
                                    fullWidth
                                    id="activityName"
                                    label="Název aktivity"
                                    required
                                    variant="outlined"
                                    {...formik.getFieldProps('activityName')}
                                    error={formik.touched.activityName && Boolean(formik.errors.activityName)}
                                    helperText={formik.touched.activityName && formik.errors.activityName}
                                />
                                <Stack direction="row" spacing={2} sx={{width: 500, maxWidth: '100%',}}>
                                    <TextField
                                        fullWidth
                                        id="worker"
                                        select
                                        label="Pracovník"
                                        defaultValue=""
                                        required
                                        {...formik.getFieldProps('worker')}
                                        error={formik.touched.worker && Boolean(formik.errors.worker)}
                                        helperText={formik.touched.worker && formik.errors.worker}
                                    >
                                        {workers.map((worker) => {
                                            return (
                                                <MenuItem id={worker.id}
                                                          key={worker.id}
                                                          value={worker.id}
                                                >{worker.fullName}</MenuItem>
                                            )
                                        })}
                                    </TextField>
                                    <TextField
                                        fullWidth
                                        id="hourRate"
                                        select
                                        label="Hodinovka"
                                        defaultValue=""
                                        required
                                        {...formik.getFieldProps('hourRate')}
                                        error={formik.touched.hourRate && Boolean(formik.errors.hourRate)}
                                        helperText={formik.touched.hourRate && formik.errors.hourRate}
                                    >
                                        {hourRates.map((hourRate) => {
                                            return (
                                                <MenuItem id={hourRate.id} value={hourRate.id}
                                                          key={hourRate.id}>{hourRate.amount}</MenuItem>
                                            )
                                        })}
                                    </TextField>
                                </Stack>
                                <Stack direction="row" spacing={2} sx={{width: '100%'}}>
                                    <TextField
                                        fullWidth
                                        id="timeFund"
                                        label="Časofond"
                                        placeholder="0.00"
                                        required
                                        variant="outlined"
                                        {...formik.getFieldProps('timeFund')}
                                        error={formik.touched.timeFund && Boolean(formik.errors.timeFund)}
                                        helperText={formik.touched.timeFund && formik.errors.timeFund}
                                    />
                                </Stack>
                                <TextField
                                    fullWidth
                                    id="note"
                                    label="Popis"
                                    required
                                    variant="outlined"
                                    multiline
                                    rows={4}
                                    {...formik.getFieldProps('note')}
                                    error={formik.touched.note && Boolean(formik.errors.note)}
                                    helperText={formik.touched.note && formik.errors.note}
                                />
                            </Stack>
                        </Box>
                    </Paper>
                </Stack>
                <Stack direction="column" spacing={2} padding={2} alignItems="center">
                    <Button variant="text" onClick={router.back}>Zrušit</Button>
                    <Button variant="contained" type="submit" >Vytvořit aktivitu</Button>
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
                            <CloseIcon fontSize="inherit"/>
                        </IconButton>
                    }
                    sx={{mb: 2}}
                >
                    <AlertTitle>Chyba</AlertTitle>
                    Nastala neočekávaná chyba v databázi
                </Alert>
            </Snackbar>
        </>
    )
}

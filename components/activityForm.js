"use client"
import {useFormik} from "formik";
import {Inter} from '@next/font/google'
import styles from '../app/page.module.css'
import {Button, Stack, TextField, MenuItem} from "@mui/material";
import {ActivityScheme} from "../app/activityScheme";

const workers = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
];

export default function ActivityForm() {
    const formik = useFormik({
        initialValues: {
            activityName: '',
            worker: '',
            hourRate: '',
            timeFund: '',
            deadline: '',
            description: '',

        },
        validationSchema: ActivityScheme,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <Stack direction="column" spacing={2} sx={{
                    width: 500,
                    maxWidth: '100%',
                }}>
                    <TextField
                        id="activityName"
                        label="Název aktivity"
                        required
                        variant="outlined"
                        {...formik.getFieldProps('activityName')}
                        error={formik.touched.activityName && Boolean(formik.errors.activityName)}
                        helperText={formik.touched.activityName && formik.errors.activityName}/>
                    <TextField
                        id="worker"
                        select
                        label="Pracovník"
                        defaultValue=""
                        required
                        {...formik.getFieldProps('worker')}
                        error={formik.touched.worker && Boolean(formik.errors.worker)}
                        helperText={formik.touched.worker && formik.errors.worker}

                    >
                        {workers.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        id="hourRate"
                        select
                        label="Hodinovka"
                        defaultValue=""
                        required
                        {...formik.getFieldProps('hourRate')}
                        error={formik.touched.hourRate && Boolean(formik.errors.hourRate)}
                        helperText={formik.touched.hourRate && formik.errors.hourRate}
                    >
                        {workers.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        id="timeFund"
                        label="Časofond"
                        placeholder="0.00"
                        required
                        variant="outlined"
                        {...formik.getFieldProps('timeFund')}
                        error={formik.touched.timeFund && Boolean(formik.errors.timeFund)}
                        helperText={formik.touched.timeFund && formik.errors.timeFund}/>
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
                        rows={4}
                        {...formik.getFieldProps('description')}
                        error={formik.touched.description && Boolean(formik.errors.description)}
                        helperText={formik.touched.description && formik.errors.description}/>
                    <Button onClick={() => {
                        alert('clicked');
                    }}
                            variant="outlined"
                            color="success"
                    >Vytvořit aktivitu
                    </Button>
                </Stack>
            </form>
        </>
    )
}

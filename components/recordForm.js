"use client"
import {useFormik} from "formik";
import {Button, Stack, TextField} from "@mui/material";
import {RecordScheme} from "./Schemes/recordScheme";

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
                <Stack direction="column" spacing={2} sx={{
                    width: 500,
                    maxWidth: '100%',
                }}>
                    <TextField
                        id="workingTime"
                        label="Odpracovaný čas"
                        placeholder="0.00"
                        required
                        variant="outlined"
                        {...formik.getFieldProps('workingTime')}
                        error={formik.touched.workingTime && Boolean(formik.errors.workingTime)}
                        helperText={formik.touched.workingTime && formik.errors.workingTime}/>
                    <TextField
                        id="date"
                        label="Datum"
                        placeholder="rrrr-mm-dd"
                        required
                        variant="outlined"
                        {...formik.getFieldProps('date')}
                        error={formik.touched.date && Boolean(formik.errors.date)}
                        helperText={formik.touched.date && formik.errors.date}/>
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
                    >Vytvořit výkaz
                    </Button>
                </Stack>
            </form>
        </>
    )
}

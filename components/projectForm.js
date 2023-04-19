"use client"
import {useFormik} from "formik";
import {Button, Stack, TextField} from "@mui/material";
import {ProjectScheme} from "../app/projectScheme";

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
                <Stack direction="column" spacing={2} sx={{
                    width: 500,
                    maxWidth: '100%',
                }}>
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
                        rows={4}
                        {...formik.getFieldProps('description')}
                        error={formik.touched.description && Boolean(formik.errors.description)}
                        helperText={formik.touched.description && formik.errors.description}/>
                    <Button onClick={() => {
                        alert('clicked');
                    }}
                            variant="outlined"
                            color="success"
                    >Vyvořit projekt
                    </Button>
                </Stack>
            </form>
        </>
    )
}

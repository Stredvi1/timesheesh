'use client';

import {useFormik} from "formik";
import {Stack, Paper, Box, Typography, TextField, InputLabel, Select, MenuItem, Button, FormControl, Alert, IconButton, AlertTitle, Snackbar} from "@mui/material";
import React from "react";
import {useRouter} from "next/router";
import {CloseIcon} from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";
import {LoginScheme} from "./Schemes/loginScheme";
import {signIn} from "next-auth/react";


const initialValues = {
    email: "",
    password: ""
};

export default function LoginForm() {
    const submitForm = async ({email, password}, bag) => {
        bag.resetForm(initialValues);
        bag.setFieldValue('login', email);

        const {ok, status} = await signIn("credentials", {email, password, redirect: false});

        if (ok) {
            router.push("/overview");
        } else {
            errorP.current.innerText = "Login nebo heslo nesprávné!";
        }
    };

    const [error, setError] = React.useState(false);
    const router = useRouter();

    const formik = useFormik({
        initialValues,
        validationSchema: LoginScheme,
        onSubmit: submitForm,
    });

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <Stack direction="column"
                       spacing={2}
                       padding={2}
                       alignItems="center"
                       justifyContent="center"
                       sx={{mt: '10%'}}>
                    <Box padding={4}
                         alignItems="center">
                        <Typography variant="h1">TimeSheet</Typography>
                        <Stack
                            direction="column"
                            spacing={2}
                            padding={2}>
                            <TextField
                                id="email"
                                label="Email"
                                required
                                variant="outlined"
                                {...formik.getFieldProps('email')}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                            />
                            <TextField
                                id="password"
                                label="Heslo"
                                required
                                variant="outlined"
                                type="password"
                                {...formik.getFieldProps('password')}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                            />
                            <Button variant="contained" type="submit">Přihlásit</Button>

                        </Stack>
                    </Box>
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

        </>);
}
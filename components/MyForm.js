'use client';

import {useFormik} from "formik";
import {Stack, Paper, Box, Typography, TextField, InputLabel, Select, MenuItem, Button} from "@mui/material";
import React from "react";
import {RegistrationSchema} from "./Form/registrationSchema";


export default function MyForm() {

    const formik = useFormik({
        initialValues: {
            name: '',
            surname: '',
            birthNumber: '',
            bankAccount: '',
            bankCode: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: RegistrationSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    let permissionID;
    return (
        <>

            <form onSubmit={formik.handleSubmit}>

                <Stack
                    direction="column"
                    spacing={6}
                    justifyContent="center"
                    alignItems="center"
                >

                    <Paper elevation={3}>
                        <Box padding={4}>
                            <Typography variant="h4">Osobní údaje</Typography>
                                <Stack direction="row" spacing={2}>
                                    <TextField
                                        id="name"
                                        label="Jméno"
                                        required
                                        variant="outlined"
                                        {...formik.getFieldProps('name')}
                                        error={formik.touched.name && Boolean(formik.errors.name)}
                                        helperText={formik.touched.name && formik.errors.name}/>

                                    <TextField
                                        id="surname"
                                        label="Příjmení"
                                        required
                                        variant="outlined"
                                        {...formik.getFieldProps('surname')}
                                        error={formik.touched.surname && Boolean(formik.errors.surname)}
                                        helperText={formik.touched.surname && formik.errors.surname}
                                    />

                                    <TextField
                                        id="birthNumber"
                                        label="Rodné číslo"
                                        required
                                        placeholder={'rrmmdd/xxxx'}
                                        variant="outlined"
                                        {...formik.getFieldProps('birthNumber')}
                                        error={formik.touched.birthNumber && Boolean(formik.errors.birthNumber)}
                                        helperText={formik.touched.birthNumber && formik.errors.birthNumber}
                                    />
                                </Stack>



                            <Stack direction="row" spacing={2}>
                                <TextField
                                    id="bankAccount"
                                    label="Číslo účtu"
                                    variant="outlined"
                                    placeholder={'123456-1234567890'}
                                    {...formik.getFieldProps('bankAccount')}
                                    error={formik.touched.bankAccount && Boolean(formik.errors.bankAccount)}
                                    helperText={formik.touched.bankAccount && formik.errors.bankAccount}
                                />


                                <TextField
                                    id="bankCode"
                                    label="Kód banky"
                                    variant="outlined"
                                    type="number"
                                    {...formik.getFieldProps('bankCode')}
                                    error={formik.touched.bankCode && Boolean(formik.errors.bankCode)}
                                    helperText={formik.touched.bankCode && formik.errors.bankCode}/>
                            </Stack>
                        </Box>
                    </Paper>

                    <Paper elevation={3}>
                        <Box padding={4}>
                            <Typography variant="h4">Přihlašovací údaje</Typography>
                            <Stack direction="column" spacing={2}>
                                <TextField
                                    id="email"
                                    label="Email"
                                    required
                                    variant="outlined"
                                    {...formik.getFieldProps('email')}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}/>

                                <TextField
                                    id="password"
                                    label="Heslo"
                                    required
                                    variant="outlined"
                                    margin="normal"
                                    type="password"
                                    {...formik.getFieldProps('password')}
                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                    helperText={formik.touched.password && formik.errors.password}/>

                                <TextField
                                    id="confirmPassword"
                                    label="Heslo znovu"
                                    required
                                    variant="outlined"
                                    type="password"
                                    {...formik.getFieldProps('confirmPassword')}
                                    error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                                    helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}/>

                            </Stack>
                        </Box>
                    </Paper>

                    <Paper elevation={3}>
                        <Box padding={4}>
                            <Typography variant="h4">Úroveň oprávnění</Typography>
                            <Stack direction="column" spacing={2}>

                                <InputLabel id="permissions-label">Práva</InputLabel>
                                <Select
                                    labelId="permissions-label"
                                    id="new-user-permissions"
                                    value={permissionID}
                                    label="Práva">
                                    <MenuItem value={1}>Administrátor</MenuItem>
                                    <MenuItem value={2}>Projektant</MenuItem>
                                    <MenuItem value={3}>Pracovník</MenuItem>
                                    <MenuItem value={4}>Sledující</MenuItem>
                                </Select>


                                <Button
                                    variant="text"
                                    href="./overview">Zrušit
                                </Button>
                                <Button
                                    variant="contained"
                                    type="submit">Vytvořit uživatele
                                </Button>
                            </Stack>
                        </Box>
                    </Paper>
                </Stack>
            </form>

        </>
    )
        ;
}
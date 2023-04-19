'use client';

import {useFormik} from "formik";
import {
    Stack, Paper, Box, Typography, TextField, InputLabel, Select, MenuItem, Button, FormControl
} from "@mui/material";
import React from "react";
import {RegistrationSchema} from "./Schemes/registrationSchema";
import UserTypes from "../loaders/loadUserType";
import addUser from "../posters/postNewUser";
import {useRouter} from "next/router";



async function handleSubmit(values) {
    const copyValues = Object.assign({}, values)

    if(copyValues.bankAccount === "") {
        copyValues.bankAccount = null;
        copyValues.bankCode = null;
    }

    console.log(copyValues);

    const res = await addUser(copyValues);
    console.log(res);

    if(res) {

    }
}

export default function RegistrationForm() {

    const formik = useFormik({
        initialValues: {
            name: '',
            surname: '',
            birthNumber: '',
            bankAccount: '',
            bankCode: '',
            email: '',
            password: '',
            confirmPassword: '',
            type: ''
        },
        validationSchema: RegistrationSchema,
        onSubmit: async (values) => {
          await handleSubmit(values);
        },
    });

    let bankCodeState;

    function getBankCodeState() {

        if (formik.values.bankAccount.toString() === "") {
            formik.values.bankCode = "";
            bankCodeState = true;
        } else {
            bankCodeState = false;
        }
    }


    const userTypes = UserTypes();

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
                                    value={formik.values.name}
                                    error={formik.touched.name && Boolean(formik.errors.name)}
                                    helperText={formik.touched.name && formik.errors.name}/>

                                {/*{...formik.getFieldProps('name')}*/}

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
                                    onChange={getBankCodeState()}
                                    {...formik.getFieldProps('bankAccount')}
                                    error={formik.touched.bankAccount && Boolean(formik.errors.bankAccount)}
                                    helperText={formik.touched.bankAccount && formik.errors.bankAccount}
                                />


                                <TextField
                                    id="bankCode"
                                    label="Kód banky"
                                    variant="outlined"
                                    disabled={bankCodeState}
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
                            <Typography variant="h4">Typ uživatele</Typography>
                            <Stack direction="column" spacing={2}>

                                <FormControl fullWidth>
                                    <InputLabel
                                        id="userTypeLabel"
                                    >Typ</InputLabel>
                                    <Select
                                        labelId="userTypeLabel"
                                        label="Typ"
                                        id="type"
                                        onChange={formik.handleChange}
                                        {...formik.getFieldProps('type')}
                                        error={formik.touched.type && Boolean(formik.errors.type)}
                                    >
                                        {userTypes.map((types) => {
                                            return (
                                                <MenuItem id={types.id} value={types.id} key={types.id}>{types.name}</MenuItem>
                                            )
                                        })}

                                    </Select>
                                </FormControl>


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

        </>);
}
'use client';

import {useFormik} from "formik";
import * as m from "@mui/material";
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

                <m.Stack
                    direction="column"
                    spacing={6}
                    justifyContent="center"
                    alignItems="center"
                >

                    <m.Paper elevation={3}>
                        <m.Box padding={4}>
                            <m.Typography variant="h4">Osobní údaje</m.Typography>
                                <m.Stack direction="row" spacing={2}>
                                    <m.TextField
                                        id="name"
                                        label="Jméno"
                                        required
                                        variant="outlined"
                                        {...formik.getFieldProps('name')}
                                        error={formik.touched.name && Boolean(formik.errors.name)}
                                        helperText={formik.touched.name && formik.errors.name}/>

                                    <m.TextField
                                        id="surname"
                                        label="Příjmení"
                                        required
                                        variant="outlined"
                                        {...formik.getFieldProps('surname')}
                                        error={formik.touched.surname && Boolean(formik.errors.surname)}
                                        helperText={formik.touched.surname && formik.errors.surname}
                                    />

                                    <m.TextField
                                        id="birthNumber"
                                        label="Rodné číslo"
                                        required
                                        placeholder={'rrmmdd/xxxx'}
                                        variant="outlined"
                                        {...formik.getFieldProps('birthNumber')}
                                        error={formik.touched.birthNumber && Boolean(formik.errors.birthNumber)}
                                        helperText={formik.touched.birthNumber && formik.errors.birthNumber}
                                    />
                                </m.Stack>



                            <m.Stack direction="row" spacing={2}>
                                <m.TextField
                                    id="bankAccount"
                                    label="Číslo účtu"
                                    variant="outlined"
                                    placeholder={'123456-1234567890'}
                                    {...formik.getFieldProps('bankAccount')}
                                    error={formik.touched.bankAccount && Boolean(formik.errors.bankAccount)}
                                    helperText={formik.touched.bankAccount && formik.errors.bankAccount}
                                />


                                <m.TextField
                                    id="bankCode"
                                    label="Kód banky"
                                    variant="outlined"
                                    type="number"
                                    {...formik.getFieldProps('bankCode')}
                                    error={formik.touched.bankCode && Boolean(formik.errors.bankCode)}
                                    helperText={formik.touched.bankCode && formik.errors.bankCode}/>
                            </m.Stack>
                        </m.Box>
                    </m.Paper>

                    <m.Paper elevation={3}>
                        <m.Box padding={4}>
                            <m.Typography variant="h4">Přihlašovací údaje</m.Typography>
                            <m.Stack direction="column" spacing={2}>
                                <m.TextField
                                    id="email"
                                    label="Email"
                                    required
                                    variant="outlined"
                                    {...formik.getFieldProps('email')}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}/>

                                <m.TextField
                                    id="password"
                                    label="Heslo"
                                    required
                                    variant="outlined"
                                    margin="normal"
                                    type="password"
                                    {...formik.getFieldProps('password')}
                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                    helperText={formik.touched.password && formik.errors.password}/>

                                <m.TextField
                                    id="confirmPassword"
                                    label="Heslo znovu"
                                    required
                                    variant="outlined"
                                    type="password"
                                    {...formik.getFieldProps('confirmPassword')}
                                    error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                                    helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}/>

                            </m.Stack>
                        </m.Box>
                    </m.Paper>

                    <m.Paper elevation={3}>
                        <m.Box padding={4}>
                            <m.Typography variant="h4">Úroveň oprávnění</m.Typography>
                            <m.Stack direction="column" spacing={2}>

                                <m.InputLabel id="permissions-label">Práva</m.InputLabel>
                                <m.Select
                                    labelId="permissions-label"
                                    id="new-user-permissions"
                                    value={permissionID}
                                    label="Práva">
                                    <m.MenuItem value={10}>Ten</m.MenuItem>
                                    <m.MenuItem value={20}>Twenty</m.MenuItem>
                                    <m.MenuItem value={30}>Thirty</m.MenuItem>
                                </m.Select>


                                <m.Button
                                    variant="text"
                                    href="./overview">Zrušit
                                </m.Button>
                                <m.Button
                                    variant="contained"
                                    type="submit">Vytvořit uživatele
                                </m.Button>
                            </m.Stack>
                        </m.Box>
                    </m.Paper>
                </m.Stack>
            </form>

        </>
    )
        ;
}
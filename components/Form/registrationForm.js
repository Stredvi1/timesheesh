import {Form, Formik} from "formik";
import {RegistrationSchema} from "./registrationSchema";
import * as m from "@mui/material";
import React from "react";

export default function RegistrationForm() {

    function handleSubmit() {

    }

    return (
        <Formik
            initialValues={{
                name: '',
                surname: '',
                email: '',
                password: '',
                confirmPassword: ''
            }}
            validationSchema={RegistrationSchema}
            onSubmit={handleSubmit}
        >
            {({values, handleChange, handleBlur, errors, touched}) => (
                <Form>
                    <m.Typography variant="h4">Osobní údaje</m.Typography>
                    <m.TextField
                        id="name"
                        label="Jméno"
                        margin="normal"
                        required
                        variant="outlined"
                        value={values.name}
                        {...formik.getFieldProps('name')}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}/>

                    <m.TextField
                        id="surname"
                        label="Příjmení"
                        margin="normal"
                        required
                        variant="outlined"
                        value={values.surname}
                        {...formik.getFieldProps('surname')}
                        error={formik.touched.surname && Boolean(formik.errors.surname)}
                        helperText={formik.touched.surname && formik.errors.surname}
                    />


                    <m.TextField
                        id="tfBirthNumber"
                        label="Rodné číslo"
                        required
                        helperText={"s lomítkem"}
                        variant="outlined"
                    />

                    <m.TextField id="outlined-basic" label="Číslo účtu" variant="outlined"/>
                    <m.TextField id="outlined-basic" label="Kód banky" variant="outlined" inputProps={{maxLength: 4}}
                                 type="number"/>

                    <m.Typography variant="h4">Přihlašovací údaje</m.Typography>
                    <m.TextField
                        id="outlined-basic"
                        label="Email"
                        required
                        variant="outlined"
                        value={values.email}/>

                    <m.TextField
                        id="password"
                        label="Heslo"
                        required
                        variant="outlined"
                        margin="normal"
                        type="password"
                        value={values.password}
                        {...formik.getFieldProps('password')}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}/>

                    <m.TextField
                        id="confirmPassword"
                        label="Heslo znovu"
                        required
                        variant="outlined"
                        type="password"
                        value={values.confirmPassword}
                        {...formik.getFieldProps('confirmPassword')}
                        error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                        helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}/>

                    <m.Typography variant="h4">Úroveň oprávnění</m.Typography>
                    <m.InputLabel id="permissions-label">Práva</m.InputLabel>
                    <m.Select
                        labelId="permissions-label"
                        id="new-user-permissions"
                        value={perrmissionID}
                        label="Práva"
                    >
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

                </Form>
            )}
            )
        </Formik>
    )
}
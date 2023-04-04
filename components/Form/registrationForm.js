import {Form, Formik} from "formik";
import {RegistrationSchema} from "./registrationSchema";
import {Typography, TextField, InputLabel, Select, MenuItem, Button} from "@mui/material";

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
                    <Typography variant="h4">Osobní údaje</Typography>
                    <TextField
                        id="name"
                        label="Jméno"
                        margin="normal"
                        required
                        variant="outlined"
                        value={values.name}
                        {...formik.getFieldProps('name')}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}/>

                    <TextField
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


                    <TextField
                        id="tfBirthNumber"
                        label="Rodné číslo"
                        required
                        helperText={"s lomítkem"}
                        variant="outlined"
                    />

                    <TextField id="outlined-basic" label="Číslo účtu" variant="outlined"/>
                    <TextField id="outlined-basic" label="Kód banky" variant="outlined" inputProps={{maxLength: 4}}
                                 type="number"/>

                    <Typography variant="h4">Přihlašovací údaje</Typography>
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        required
                        variant="outlined"
                        value={values.email}/>

                    <TextField
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

                    <TextField
                        id="confirmPassword"
                        label="Heslo znovu"
                        required
                        variant="outlined"
                        type="password"
                        value={values.confirmPassword}
                        {...formik.getFieldProps('confirmPassword')}
                        error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                        helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}/>

                    <Typography variant="h4">Úroveň oprávnění</Typography>

                    <InputLabel id="permissions-label">Práva</InputLabel>
                    <Select
                        labelId="permissions-label"
                        id="new-user-permissions"
                        value={permissionID}
                        label="Oprávnění"
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>


                    <Button
                        variant="text"
                        href="./overview">Zrušit
                    </Button>
                    <Button
                        variant="contained"
                        type="submit">Vytvořit uživatele
                    </Button>

                </Form>
            )}
            )
        </Formik>
    )
}
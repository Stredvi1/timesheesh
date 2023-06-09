'use client';

import {useFormik} from "formik";
import {
    Stack,
    Paper,
    Box,
    Typography,
    TextField,
    InputLabel,
    Select,
    MenuItem,
    Button,
    FormControl,
    Alert,
    IconButton,
    AlertTitle, Snackbar
} from "@mui/material";
import React from "react";
import {RegistrationSchema} from "./schemas/registrationSchema";
import UserTypes from "../../loaders/loadUserType";
import addUser from "../../posters/postNewUser";
import Link from "next/link";
import {useRouter} from "next/router";
import {CloseIcon} from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";


export default function RegistrationForm() {
    const [error, setError] = React.useState(false);
    const router = useRouter();

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

    async function handleSubmit(values) {
        const copyValues = {...values};

        if (copyValues.bankAccount === "") {
            copyValues.bankAccount = null;
            copyValues.bankCode = null;
        }

        const res = await addUser(copyValues);

        if (res) {
            await router.push("/overview");
        } else {
            setError(true);
        }
    }

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
                <Stack direction="column" spacing={2} padding={2} alignItems="center">
                    <Stack direction="row" spacing={6} justifyContent="center" margin={4} sx={{width: '35%'}}>
                        <Paper elevation={3} sx={{width: '100%'}}>
                            <Stack direction="column" spacing={2} padding={2} margin={4} alignItems="center">
                                <Typography variant="h4">Osobní údaje</Typography>
                                <TextField
                                    fullWidth
                                    id="name"
                                    label="Jméno"
                                    required
                                    variant="outlined"
                                    {...formik.getFieldProps('name')}
                                    value={formik.values.name}
                                    error={formik.touched.name && Boolean(formik.errors.name)}
                                    helperText={formik.touched.name && formik.errors.name}
                                />
                                {/*{...formik.getFieldProps('name')}*/}
                                <TextField
                                    fullWidth
                                    id="surname"
                                    label="Příjmení"
                                    required
                                    variant="outlined"
                                    {...formik.getFieldProps('surname')}
                                    error={formik.touched.surname && Boolean(formik.errors.surname)}
                                    helperText={formik.touched.surname && formik.errors.surname}
                                />
                                <TextField
                                    fullWidth
                                    id="birthNumber"
                                    label="Rodné číslo"
                                    required
                                    placeholder={'rrmmdd/xxxx'}
                                    variant="outlined"
                                    {...formik.getFieldProps('birthNumber')}
                                    error={formik.touched.birthNumber && Boolean(formik.errors.birthNumber)}
                                    helperText={formik.touched.birthNumber && formik.errors.birthNumber}
                                />
                                <TextField
                                    fullWidth
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
                                    fullWidth
                                    id="bankCode"
                                    label="Kód banky"
                                    variant="outlined"
                                    disabled={bankCodeState}
                                    type="number"
                                    {...formik.getFieldProps('bankCode')}
                                    error={formik.touched.bankCode && Boolean(formik.errors.bankCode)}
                                    helperText={formik.touched.bankCode && formik.errors.bankCode}/>
                            </Stack>
                        </Paper>
                        <Paper elevation={3} sx={{width: '100%'}}>
                            <Stack direction="column" spacing={2} padding={2} margin={4} alignItems="center">
                                <Typography variant="h4">Přihlašovací údaje</Typography>
                                <TextField
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    required
                                    variant="outlined"
                                    {...formik.getFieldProps('email')}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                />
                                <TextField
                                    fullWidth
                                    id="password"
                                    label="Heslo"
                                    required
                                    variant="outlined"
                                    type="password"
                                    {...formik.getFieldProps('password')}
                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                    helperText={formik.touched.password && formik.errors.password}
                                />
                                <TextField
                                    fullWidth
                                    id="confirmPassword"
                                    label="Heslo znovu"
                                    required
                                    variant="outlined"
                                    type="password"
                                    {...formik.getFieldProps('confirmPassword')}
                                    error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                                    helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                                />
                                <TextField
                                    fullWidth
                                    select
                                    label="Typ"
                                    defaultValue=""
                                    required
                                    {...formik.getFieldProps('type')}
                                    error={formik.touched.type && Boolean(formik.errors.type)}
                                    helperText={formik.touched.type && formik.errors.type}
                                >
                                    {userTypes.map((types) => {
                                        return (
                                            <MenuItem id={types.id} value={types.id}
                                                      key={types.id}>{types.name}</MenuItem>
                                        )
                                    })}
                                </TextField>
                            </Stack>
                        </Paper>
                    </Stack>
                    <Stack direction="column" spacing={2} padding={2} alignItems="center">

                            <Button variant="text" onClick={router.back}>Zrušit</Button>
                        <Button variant="contained" type="submit">Vytvořit uživatele</Button>
                    </Stack>
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
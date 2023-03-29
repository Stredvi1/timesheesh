import {useFormik} from "formik";
import * as Yup from "yup";
import * as m from "@mui/material";
import React from "react";
import {RegistrationSchema} from "./Form/registrationSchema";


export default function MyForm() {

    const formik = useFormik({
        initialValues: {
            name: '',
            surname: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        RegistrationSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });
}
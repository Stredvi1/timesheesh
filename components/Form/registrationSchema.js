import * as Yup from "yup";

export const RegistrationSchema = Yup.object().shape({
    name: Yup.string()
            .required('Jméno je povinný údaj')
            .max(30, 'Jméno je moc dlouhé (30 znaků)'),
    surname: Yup.string()
        .required('Příjmení je povinný údaj')
        .max(30, 'Příjmení je moc dlouhé (30 znaků)'),
    email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters')
        .max(40, 'Password must not exceed 40 characters'),
    confirmPassword: Yup.string()
        .required('Zadejte potvrzení hesla')
        .oneOf([Yup.ref('password'), null], 'Hesla se neshodují'),

});
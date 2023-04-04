import * as Yup from "yup";

export const RegistrationSchema = Yup.object().shape({
    name: Yup.string()
            .required('Jméno je povinný údaj')
            .max(30, 'Jméno je moc dlouhé (30 znaků)'),

    surname: Yup.string()
        .required('Příjmení je povinný údaj')
        .max(30, 'Příjmení je moc dlouhé (30 znaků)'),

    birthNumber: Yup.string()
        .required('Rodné číslo je povinný údaj')
        .length(11,'Špatný formát rodného čísla')
        .matches(/^\d{6}\/\d{4}$/, 'Špatný formát rodného čísla'),

    bankAccount: Yup.string()
        .optional()
        .min(10, 'Číslo účtu je krátké')
        .max(17, 'Číslo účtu je moc dlouhé'),

    bankCode: Yup.string()
        .length(4, 'Neplatná délka'),

    email: Yup.string()
        .required('Email je povinný údaj')
        .email('Špatný formát emailu'),

    password: Yup.string()
        .required('Heslo je povinný údaj')
        .min(6, 'Heslo musí být alespoň 6 znaků dlouhé')
        .max(40, 'Heslo je příliš dlouhé'),

    confirmPassword: Yup.string()
        .required('Zadejte heslo znovu')
        .oneOf([Yup.ref('password'), null], 'Hesla se neshodují'),

    type: Yup.string()
        .required('Vyberte oprávnění'),

});
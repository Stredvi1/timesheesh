import * as Yup from "yup";

export const RecordScheme = Yup.object().shape({
    workingTime: Yup.string()
        .required('Odpracovaný čas je povinný údaj')
        .matches(/^\d{1,8}(\.\d{2})?$/, 'Špatný formát odpracovaného času'),

    date: Yup.date()
        .required('Datum je povinný údaj')
        .typeError("Špatný formát data"),

    description: Yup.string()
        .required('Popis je povinný údaj')
        .max(400, 'Popis je moc dlouhý'),

});
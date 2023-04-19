import * as Yup from "yup";

export const RecordScheme = Yup.object().shape({
    workingTime: Yup.string()
        .required('Odpracovaný čas je povinný údaj')
        .matches(/^\d{1,8}(\.\d{2})?$/, 'Špatný formát odpracovaného času'),

    date: Yup.string()
        .required('Datum je povinný údaj')
        .matches(/^\d{4}-\d{2}-\d{2}$/, 'Špatný formát datumu'),

    description: Yup.string()
        .required('Popis je povinný údaj')
        .max(400, 'Popis je moc dlouhý'),

});
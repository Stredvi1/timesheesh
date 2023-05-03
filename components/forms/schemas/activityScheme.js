import * as Yup from "yup";

export const ActivityScheme = Yup.object().shape({
    activityName: Yup.string()
        .required('Název aktivity je povinný údaj')
        .max(40, 'Název aktivity je moc dlouhý (40 znaků)'),

    timeFund: Yup.string()
        .required('Časofond je povinný údaj')
        .matches(/^\d{1,8}(\.\d{2})?$/, 'Špatný formát časofondu'),

    worker: Yup.string()
        .required('Pracovník je povinný údaj'),

    hourRate: Yup.string()
        .required('Hodinová sazba je povinný údaj'),

    note: Yup.string()
        .required('Popis je povinný údaj')
        .max(400, 'Popis je moc dlouhý'),

});
import * as Yup from "yup";

export const ProjectScheme = Yup.object().shape({
    projectName: Yup.string()
        .required('Název projektu je povinný údaj')
        .max(40, 'Název projektu je moc dlouhý (40 znaků)'),

    budget: Yup.string()
        .required('Budget je povinný údaj')
        .matches(/^\d{1,8}(\.\d{2})?$/, 'Špatný formát budgetu'),

    deadline: Yup.string()
        .required('Deadline je povinný údaj')
        .matches(/^\d{4}-\d{2}-\d{2}$/, 'Špatný formát deadlinu'),

    description: Yup.string()
        .required('Popis je povinný údaj')
        .max(400, 'Popis je moc dlouhý'),

});
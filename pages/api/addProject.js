import { query } from "./db";
import * as Yup from "yup";

export default async function handler(req, res) {

    const ProjectScheme = Yup.object().shape({
        projectName: Yup.string()
            .required('Název projektu je povinný údaj')
            .max(40, 'Název projektu je moc dlouhý (40 znaků)'),

        budget: Yup.string()
            .required('Budget je povinný údaj')
            .matches(/^\d{1,8}(\.\d{2})?$/, 'Špatný formát budgetu'),

        deadline: Yup.date()
            .required('Deadline je povinný údaj')
            .typeError("Špatný formát data"),

        description: Yup.string()
            .required('Popis je povinný údaj')
            .max(400, 'Popis je moc dlouhý'),

        userID: Yup.number()
            .required('ID uživatele je povinný údaj')
            .integer(('ID uživatele musí být integer'))

    });

    let validData;
    try {
        validData = await ProjectScheme.validate(req.body);
    } catch (error) {
        res.status(500).json({error});
    }

    try {
        const querySQL = "CALL `addProject` (?, ?, ?, ?, ?)";

        const valueParams = [
            validData.projectName,
            validData.budget,
            validData.deadline,
            validData.description,
            validData.userID];

        await query({query: querySQL, values: valueParams });

        res.status(201).json({success: true});

    } catch (error) {
        console.log(error)
        res.status(500).json({error: error.message});
    }




}


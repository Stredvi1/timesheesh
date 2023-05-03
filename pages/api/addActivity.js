import { query } from "./db";
import * as yup from "yup";

export default async function handler(req, res) {

    const addActivitySchema = yup.object().shape({
        activityName: yup.string()
            .required('Název aktivity je povinný údaj')
            .max(40, 'Název aktivity je moc dlouhý (40 znaků)'),

        timeFund: yup.string()
            .required('Časofond je povinný údaj')
            .matches(/^\d{1,8}(\.\d{2})?$/, 'Špatný formát časofondu'),

        hourRate: yup.number()
            .required('Hodinová sazba je povinný údaj')
            .integer('ID hodinové sazby není integer'),

        note: yup.string()
            .required('Popis je povinný údaj')
            .max(400, 'Popis je moc dlouhý'),

        userID: yup.number()
            .required('ID uživatele je povinný údaj')
            .integer('ID uživatele musí být integer'),

        projectID: yup.number()
            .required('ID projektu je povinný údaj')
            .integer('ID projektu musí být integer'),

    });

    let validData;
    try {
       validData = await addActivitySchema.validate(req.body);
    } catch (error) {
        return res.status(500).json({error});
    }

    try {
        const querySQL = "CALL `addActivity` (?, ?, ?, ?, ?, ?)";

        const valueParams = [
            validData.activityName,
            validData.timeFund,
            validData.userID,
            validData.hourRate,
            validData.projectID,
            validData.note];

        await query({query: querySQL, values: valueParams });

        res.status(201).json({success: true});

    } catch (error) {
        console.log(error)
        res.status(500).json({success: false, error: error.message});
    }




}


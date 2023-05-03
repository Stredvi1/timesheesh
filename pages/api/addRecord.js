import { query } from "./db";
import * as Yup from "yup";

export default async function handler(req, res) {

    const RecordScheme = Yup.object().shape({
        workingTime: Yup.string()
            .required('Odpracovaný čas je povinný údaj')
            .matches(/^\d{1,8}(\.\d{2})?$/, 'Špatný formát odpracovaného času'),

        date: Yup.date()
            .required('Datum je povinný údaj')
            .typeError("Špatný formát data"),

        description: Yup.string()
            .required('Popis je povinný údaj')
            .max(400, 'Popis je moc dlouhý'),

        userID: Yup.number()
            .required('ID uživatele je povinný údaj')
            .integer('ID uživatele musí být integer'),

        activityID: Yup.number()
            .required('ID aktivity je povinný údaj')
            .integer('ID aktivity musí být integer')

    });

    let validData;
    try {
        validData = await RecordScheme.validate(req.body);
    } catch (error) {
        return res.status(500).json({error});
    }


    try {
        const querySQL = "CALL `addRecord` (?, ?, ?, ?, ?)";

        const valueParams = [
            validData.userId,
            validData.activityID,
            validData.workingTime,
            validData.date,
            validData.description,
            ];

        await query({query: querySQL, values: valueParams });

        res.status(201).json({success: true});

    } catch (error) {
        console.log(error)
        res.status(500).json({error: error.message});
    }




}


import { query } from "./db";
import * as Yup from "yup";

export default async function handler(req, res) {

    const WatcherScheme = Yup.object().shape({
        userID: Yup.number()
            .required('ID uživatele je povinný údaj')
            .integer('ID uživatele musí být integer'),

        projectID: Yup.number()
            .required('ID projektu je povinný údaj')
            .integer('ID projektu musí být integer')

    });

    let validData;
    try {
        validData = await WatcherScheme.validate(req.body);
    } catch (error) {
        return res.status(500).json({error});
    }


    try {
        const querySQL = "CALL assignUser(?, ?)";

        const valueParams = [
            validData.projectID,
            validData.userID,
            ];



        await query({query: querySQL, values: valueParams });

        res.status(201).json({success: true});

    } catch (error) {
        console.log(error)
        res.status(500).json({error: error.message});
    }




}


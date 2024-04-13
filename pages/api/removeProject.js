import { query } from "./db";

export default async function handler(req, res) {

    try {
        const querySQL = "DELETE FROM `tproject` WHERE `tProjectID` = ?";

        const valueParams = [req.body.projectID];

        await query({query: querySQL, values: valueParams });

        res.status(201).json({success: true});

    } catch (error) {
        console.log(error)
        res.status(500).json({error: error.message});
    }




}


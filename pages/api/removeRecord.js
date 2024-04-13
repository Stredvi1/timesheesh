import { query } from "./db";

export default async function handler(req, res) {

    try {
        const querySQL = "DELETE FROM `trecord` WHERE `tRecordID` = ?";

        const valueParams = [req.body.recordID];

        await query({query: querySQL, values: valueParams });

        res.status(201).json({success: true});

    } catch (error) {
        console.log(error)
        res.status(500).json({error: error.message});
    }




}


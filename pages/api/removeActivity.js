import { query } from "./db";

export default async function handler(req, res) {

    try {
        const querySQL = "DELETE FROM `tactivity` WHERE `tActivityID` = ?";

        const valueParams = [req.body.activityID];

        await query({query: querySQL, values: valueParams });

        res.status(201).json({success: true});

    } catch (error) {
        console.log(error)
        res.status(500).json({error: error.message});
    }




}


import { query } from "./db";

export default async function handler(req, res) {

    const activityID = req.body.id;
    try {
        const querySQL = "SELECT * FROM `activitiesdetails` WHERE id = ?";
        const valueParams = [activityID];

        const data = await query({query: querySQL, values: valueParams });

        res.status(200).json({activity: data});

    } catch (error) {
        res.status(500).json({error: error.message});
    }
}


import { query } from "./db";

export default async function handler(req, res) {

    const tProjectID = req.body.id;
    try {
        const querySQL = "SELECT tProjectID, name, budget, deadline, isFinished FROM tproject WHERE tProjectID = ?";
        const valueParams = [tProjectID];

        const data = await query({query: querySQL, values: valueParams });

        res.status(200).json({projects: data});

    } catch (error) {
        res.status(500).json({error: error.message});
    }




}


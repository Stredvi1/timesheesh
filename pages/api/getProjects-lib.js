import { query } from "./db";

export default async function handler(req, res) {
    try {
        const querySQL = "SELECT tProjectID as id, name, budget, deadline, isFinished FROM tproject";
        const valueParams = [];

        const data = await query({query: querySQL, values: valueParams });

        res.status(200).json({projects: data});

    } catch (error) {
        res.status(500).json({error: error.message});
    }




}


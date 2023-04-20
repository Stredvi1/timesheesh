import { query } from "./db";

export default async function handler(req, res) {
    try {
        const querySQL = "SELECT * FROM allworkers";
        const valueParams = [];

        const data = await query({query: querySQL, values: valueParams });

        res.status(200).json({workers: data});

    } catch (error) {
        res.status(500).json({error: error.message});
    }




}


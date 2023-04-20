import { query } from "./db";

export default async function handler(req, res) {
    try {
        const querySQL = "SELECT amount, tHourRateID AS `id` FROM thourrate";
        const valueParams = [];

        const data = await query({query: querySQL, values: valueParams });

        res.status(200).json({hourRates: data});

    } catch (error) {
        res.status(500).json({error: error.message});
    }




}


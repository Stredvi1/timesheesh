import { query } from "./db";

export default async function handler(req, res) {
    try {

        const querySQL = "SELECT * FROM currentpayrols WHERE tUserID = ?";
        const valueParams = [req.body.id];

        const data = await query({query: querySQL, values: valueParams });

        res.status(200).json({payroll: data});


    } catch (error) {
        res.status(500).json({error: error.message});
    }




}


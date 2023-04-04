import { query } from "./db";

export default async function handler(req, res) {
    try {
        const querySQL = "SELECT name, tUserTypeID AS `id` FROM tusertype";
        const valueParams = [];

        const data = await query({query: querySQL, values: valueParams });

        res.status(200).json({types: data});

    } catch (error) {
        res.status(500).json({error: error.message});
    }




}


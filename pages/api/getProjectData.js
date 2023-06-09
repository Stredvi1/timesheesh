import { query } from "./db";

export default async function handler(req, res) {

    const id = req.body.id;
    try {
        const querySQL = "SELECT * FROM `projectsdetails` WHERE id = ?";
        const valueParams = [id];

        const data = await query({query: querySQL, values: valueParams });

        res.status(200).json({projects: data});

    } catch (error) {
        res.status(500).json({error: error.message});
    }
}


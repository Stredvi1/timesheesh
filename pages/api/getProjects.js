import { query } from "./db";

export default async function handler(req, res) {


    try {
        let querySQL;
        if(req.body.role === 1) {
            querySQL = "SELECT * FROM projectsdetails";

        } else {
            querySQL = "SELECT * FROM projectsdetails WHERE JSON_CONTAINS(assignedUsers, CAST(? AS CHAR))";
        }

        const valueParams = [req.body.userID];

        const data = await query({query: querySQL, values: valueParams });

        res.status(200).json({projects: data});

    } catch (error) {
        res.status(500).json({error: error.message});
    }
}


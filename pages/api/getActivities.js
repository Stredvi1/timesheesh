import {query} from "./db";
import {useSession} from "next-auth/react";

export default async function handler(req, res) {

    try {
        const projectID = req.body.id;
        const querySQL = "SELECT * FROM allactivites WHERE projectID = ?";
        const valueParams = [projectID];
        const data = await query({query: querySQL, values: valueParams});

        res.status(200).json({activities: data});

    } catch (error) {
        res.status(500).json({error: error.message});
    }
}



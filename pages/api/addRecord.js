import { query } from "./db";

export default async function handler(props, res) {
    try {
        const querySQL = "CALL `addRecord` (?, ?, ?, ?, ?)";

        const userID = 1;

        const valueParams = [
            userID,
            props.body.activityID,
            props.body.workingTime,
            props.body.date,
            props.body.description,
            ];

        await query({query: querySQL, values: valueParams });

        res.status(201).json({success: true});

    } catch (error) {
        console.log(error)
        res.status(500).json({error: error.message});
    }




}


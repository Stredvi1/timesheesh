import { query } from "./db";

export default async function handler(props, res) {
    try {
        const querySQL = "CALL `addActivity` (?, ?, ?, ?, ?, ?)";

        const valueParams = [
            props.body.activityName,
            props.body.timeFund,
            props.body.userID,
            props.body.hourRate,
            props.body.projectID,
            props.body.note];

        await query({query: querySQL, values: valueParams });

        res.status(201).json({success: true});

    } catch (error) {
        console.log(error)
        res.status(500).json({error: error.message});
    }




}


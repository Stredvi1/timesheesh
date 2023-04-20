import { query } from "./db";

export default async function handler(props, res) {
    try {
        const querySQL = "CALL `addProject` (?, ?, ?, ?, ?)";

        const valueParams = [
            props.body.projectName,
            props.body.budget,
            props.body.deadline,
            props.body.description,
            2];

        await query({query: querySQL, values: valueParams });

        res.status(201).json({success: true});

    } catch (error) {
        console.log(error)
        res.status(500).json({error: error.message});
    }




}


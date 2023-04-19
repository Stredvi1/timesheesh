import { query } from "./db";

export default async function handler(props, res) {
    try {
        const querySQL = "CALL `addUser` (?, ?, ?, ?, ?, ?, ?, ?)";

        const valueParams = [
            props.body.name,
            props.body.surname,
            props.body.birthNumber,
            props.body.email,
            props.body.password,
            props.body.userTypeID,
            props.body.bankAccount,
            props.body.bankCode];

        await query({query: querySQL, values: valueParams });

        res.status(201).json({success: true});

    } catch (error) {
        console.log(error)
        res.status(500).json({error: error.message});
    }




}


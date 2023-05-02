import { query } from "./db";
import {hash} from "bcrypt";

export default async function handler(props, res) {
    //todo validate alllllll inputs

    try {
        const querySQL = "CALL `addUser` (?, ?, ?, ?, ?, ?, ?, ?)";

        const valueParams = [
            props.body.name,
            props.body.surname,
            props.body.birthNumber,
            props.body.email,
            await hash(props.body.password, 10),
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


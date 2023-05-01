import { query } from "./db";

export async function getUser(login, password) {
    const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
    const values = [login, password];
    const [rows] = await query({query: sql, values: values});

    if (rows.length > 0) {
        const user = {
            id: rows[0].id,
            name: rows[0].name,
            email: rows[0].email
        };
        return user;
    } else {
        return null;
    }
}

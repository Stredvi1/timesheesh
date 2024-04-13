"use server"
import mysql from "mysql2/promise"

export async function query({query, values = []}) {

    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: 'root',
        password: '',
        database: 'timeshift',
    });

    try {
        await connection.beginTransaction();
        const [results] = await connection.execute(query, values);
        return results;

    } catch (error) {
        await connection.rollback();
        throw Error(error.message);
    } finally {
        connection.commit();
        connection.end();
    }
}


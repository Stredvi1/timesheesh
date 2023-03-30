import mysql from "mysql2/promise"

export default async function db(req, res) {

    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'timeshift',
    });

    try {

        const query = "SELECT name, budget, deadline, isFinished FROM tproject";
        const values = [];

        const [data] = await connection.execute(query, values);
        connection.end();
        res.status(200).json({results: data});

    } catch (error) {
        res.status(500).json({error: error.message});
    }

    connection.connect(function (err) {
        if (err) {
            console.error('Chyba připojení k MySQL databázi: ' + err.sqlState);
            return;
        }

        console.log('Připojeno k MySQL databázi s ID ' + connection.threadId);
    });


}


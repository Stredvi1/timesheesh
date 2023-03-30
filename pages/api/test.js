import db from "./getProjectData-lib"



db.query('SELECT * FROM tUser', function (error, results) {
    if (error) throw error;
    console.log(results);
})

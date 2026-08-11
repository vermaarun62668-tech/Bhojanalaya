const db = require("./config/db");

db.query("SELECT * FROM admins", (err, results) => {
    if (err) {
        console.error("Error querying admins:", err);
    } else {
        console.log("Admins table:", results);
    }
    process.exit();
});

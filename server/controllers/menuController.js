const db = require("../config/db");

const getTodayMenu = (req, res) => {

    const sql = `
        SELECT *
        FROM menu
        ORDER BY menu_date DESC
        LIMIT 1
    `;

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Database Error",
                error: err
            });
        }

        res.status(200).json(result[0]);

    });

};

module.exports = {
    getTodayMenu
};
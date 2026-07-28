const db = require("../config/db");

const updateMenu = (req, res) => {

    const { breakfast, lunch, snacks, dinner } = req.body;

    const sql = `
        UPDATE menu
        SET breakfast=?,
            lunch=?,
            snacks=?,
            dinner=?
        WHERE menu_id=1
    `;

    db.query(
        sql,
        [breakfast, lunch, snacks, dinner],
        (err) => {

            if (err) {
                return res.status(500).json({
                    message: "Menu Update Failed",
                    error: err
                });
            }

            res.json({
                message: "Menu Updated Successfully"
            });

        }
    );

};

module.exports = {
    updateMenu
};
const db = require("../config/db");

// Student submits a rating
const addRating = (req, res) => {

    const { student_id, menu_id, meal_type, rating } = req.body;

    const sql = `
        INSERT INTO ratings
        (student_id, menu_id, meal_type, rating)
        VALUES (?, ?, ?, ?)
    `;

    db.query(
        sql,
        [student_id, menu_id, meal_type, rating],
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    message: "Rating Failed",
                    error: err
                });
            }

            res.status(201).json({
                message: "Rating Submitted Successfully"
            });

        }
    );

};

// Admin views all ratings
const getRatings = (req, res) => {

    const sql = `
        SELECT
            students.name,
            ratings.meal_type,
            ratings.rating,
            ratings.created_at
        FROM ratings
        JOIN students
        ON ratings.student_id = students.student_id
        ORDER BY ratings.created_at DESC
    `;

    db.query(sql, (err, results) => {

        if (err) {
            return res.status(500).json({
                message: "Failed to fetch ratings",
                error: err
            });
        }

        res.json(results);

    });

};

module.exports = {
    addRating,
    getRatings
};
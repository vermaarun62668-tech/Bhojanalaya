const db = require("../config/db");

// Student submits suggestion
const addSuggestion = (req, res) => {

    const { student_id, suggestion_text } = req.body;

    const sql = `
        INSERT INTO suggestions
        (student_id, suggestion_text)
        VALUES (?, ?)
    `;

    db.query(sql, [student_id, suggestion_text], (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Suggestion Failed",
                error: err
            });
        }

        res.status(201).json({
            message: "Suggestion Submitted Successfully"
        });

    });

};

// Admin views all suggestions
const getSuggestions = (req, res) => {

    const sql = `
        SELECT
            students.name,
            suggestions.suggestion_text,
            suggestions.created_at
        FROM suggestions
        JOIN students
        ON suggestions.student_id = students.student_id
        ORDER BY suggestions.created_at DESC
    `;

    db.query(sql, (err, results) => {

        if (err) {
            return res.status(500).json({
                message: "Failed to fetch suggestions",
                error: err
            });
        }

        res.json(results);

    });

};

module.exports = {
    addSuggestion,
    getSuggestions
};
const db = require("../config/db");

// Student submits complaint
const addComplaint = (req, res) => {

    const { student_id, menu_id, complaint_text, is_anonymous } = req.body;

    const sql = `
        INSERT INTO complaints
        (student_id, menu_id, complaint_text, is_anonymous)
        VALUES (?, ?, ?, ?)
    `;

    db.query(
        sql,
        [student_id, menu_id, complaint_text, is_anonymous],
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    message: "Complaint Failed",
                    error: err
                });
            }

            res.status(201).json({
                message: "Complaint Submitted Successfully"
            });

        }
    );

};

// Admin views all complaints
const getComplaints = (req, res) => {

    const sql = `
        SELECT
            students.name,
            complaints.complaint_text,
            complaints.is_anonymous,
            complaints.status,
            complaints.created_at
        FROM complaints
        JOIN students
        ON complaints.student_id = students.student_id
        ORDER BY complaints.created_at DESC
    `;

    db.query(sql, (err, results) => {

        if (err) {
            return res.status(500).json({
                message: "Failed to fetch complaints",
                error: err
            });
        }

        res.json(results);

    });

};

module.exports = {
    addComplaint,
    getComplaints
};
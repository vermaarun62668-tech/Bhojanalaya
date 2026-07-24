const db = require("../config/db");

// Check if email already exists
const findStudentByEmail = (email, callback) => {
    const sql = "SELECT * FROM students WHERE email = ?";

    db.query(sql, [email], callback);
};

// Insert new student
const createStudent = (student, callback) => {
    const sql = `
        INSERT INTO students
        (name, email, password, hostel_block, room_number)
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            student.name,
            student.email,
            student.password,
            student.hostel_block,
            student.room_number
        ],
        callback
    );
};

module.exports = {
    createStudent,
    findStudentByEmail
};
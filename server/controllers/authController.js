const bcrypt = require("bcryptjs");
const db = require("../config/db");
const {
    createStudent,
    findStudentByEmail
} = require("../models/userModel");

const registerStudent = (req, res) => {

    const { name, email, password, hostel_block, room_number } = req.body;

    // Check all fields
    if (!name || !email || !password || !hostel_block || !room_number) {
        return res.status(400).json({
            message: "Please fill all fields"
        });
    }

    // Check if email already exists
    findStudentByEmail(email, async (err, results) => {

        if (err) {
            return res.status(500).json({
                message: "Database Error"
            });
        }

        if (results.length > 0) {
            return res.status(400).json({
                message: "Email already registered"
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        const student = {
            name,
            email,
            password: hashedPassword,
            hostel_block,
            room_number
        };

        // Save student
        createStudent(student, (err) => {

            if (err) {
                return res.status(500).json({
                    message: "Registration Failed"
                });
            }

            res.status(201).json({
                message: "Student Registered Successfully"
            });

        });

    });

};
const jwt = require("jsonwebtoken");

const loginStudent = (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: "Please enter email and password"
        });
    }

    findStudentByEmail(email, async (err, results) => {

        if (err) {
            return res.status(500).json({
                message: "Database Error"
            });
        }

        if (results.length === 0) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        const student = results[0];

        const isMatch = await bcrypt.compare(password, student.password);

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid Password"
            });
        }

        const token = jwt.sign(
            {
                id: student.student_id,
                email: student.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );

        res.status(200).json({
            message: "Login Successful",
            token
        });

    });

};

const adminLogin = (req, res) => {

    const { username, password } = req.body;

    const sql = `
        SELECT * FROM admins
        WHERE username = ?
    `;

    db.query(sql, [username], (err, results) => {

        if (err) {
            return res.status(500).json({
                message: "Database Error"
            });
        }

        if (results.length === 0) {
            return res.status(401).json({
                message: "Invalid Username"
            });
        }

        const admin = results[0];

        // Since your admin password is stored as plain text
        if (admin.password !== password) {
            return res.status(401).json({
                message: "Invalid Password"
            });
        }

        res.json({
            message: "Admin Login Successful"
        });

    });

};
module.exports = {
    registerStudent,
    loginStudent,
    adminLogin
};
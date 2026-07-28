# 🍽️ Bhojanalaya – Smart Mess Feedback & Analytics System

A full-stack web application that enables hostel students to rate daily meals, submit anonymous complaints, provide food suggestions, and helps administrators analyze feedback to improve mess quality.

---

## 📌 Overview

Bhojanalaya is designed to digitize the hostel mess feedback process. Students can share their opinions about meals while administrators can manage menus and review analytics to improve food quality.

---

## ✨ Features

### 👨‍🎓 Student Module
- Student Registration & Login
- Daily Meal Rating (1–5 Stars)
- Anonymous Complaint Submission
- Food Suggestions
- View Daily Menu

### 👨‍💼 Admin Module
- Secure Admin Login
- Add/Edit/Delete Daily Menu
- View Student Ratings
- View Complaints
- View Suggestions
- Dashboard for Feedback Management

---

## 🛠 Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MySQL

### Tools
- Git
- GitHub
- VS Code
- Postman

---

## 📂 Project Structure

```
Bhojanalaya/
│
├── client/
│   ├── css/
│   ├── js/
│   ├── index.html
│   ├── rating.html
│   ├── complaint.html
│   ├── suggestion.html
│   ├── adminLogin.html
│   ├── adminDashboard.html
│   └── ...
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── config/
│   ├── models/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/vermaarun62668-tech/Bhojanalaya.git
```

### Go to the project

```bash
cd Bhojanalaya
```

### Install backend dependencies

```bash
cd server
npm install
```

### Configure MySQL

Create a database:

```sql
CREATE DATABASE bhojanalaya;
```

Update your database credentials in the backend configuration file.

### Start the backend server

```bash
npm start
```

or

```bash
node server.js
```

### Open the frontend

Open `client/index.html` using Live Server or any web server.

---

## 📸 Screenshots

Add screenshots here:

- Home Page
- Student Dashboard
- Rating Page
- Complaint Page
- Suggestion Page
- Admin Dashboard
- Menu Management

---

## 🔒 Authentication

- Student Login
- Admin Login
- Protected Admin Routes

---

## 🚀 Future Enhancements

- JWT Authentication
- Password Encryption
- Email Notifications
- Analytics Dashboard
- Charts & Reports
- Mobile Responsive UI
- QR Code Attendance
- AI-Based Feedback Sentiment Analysis

---

## 🎯 Learning Outcomes

- Full Stack Web Development
- REST API Development
- CRUD Operations
- MySQL Database Design
- Authentication & Authorization
- Client–Server Architecture
- Git & GitHub Workflow

---

## 👨‍💻 Author

**Arun Kumar**

- GitHub: https://github.com/vermaarun62668-tech

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.

document.getElementById("adminLoginForm").addEventListener("submit", async (e) => {

    e.preventDefault();

    const admin = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    };

    try {

        const response = await axios.post(
            "http://localhost:5000/api/auth/admin/login",
            admin
        );

        alert(response.data.message);

        window.location.href = "adminDashboard.html";

    } catch (error) {

        alert("Invalid Username or Password");

    }

});
const form = document.getElementById("loginForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const student = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    try {

        const response = await axios.post(
            "http://localhost:5000/api/auth/login",
            student
        );

        alert(response.data.message);

        localStorage.setItem("token", response.data.token);

        window.location.href = "dashboard.html";

    } catch (error) {

        if (error.response) {
            alert(error.response.data.message);
        } else {
            alert("Server not running.");
        }

    }

});
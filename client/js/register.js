const form = document.getElementById("registerForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const student = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        hostel_block: document.getElementById("hostel_block").value,
        room_number: document.getElementById("room_number").value
    };

    try {

        const response = await axios.post(
            "http://localhost:5000/api/auth/register",
            student
        );

        alert(response.data.message);

        window.location.href = "login.html";

    } catch (error) {

        if (error.response) {
            alert(error.response.data.message);
        } else {
            alert("Server not running.");
        }

    }

});
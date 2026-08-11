const form = document.getElementById("loginForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const btn = document.getElementById('loginBtn');

    UI.clearFieldError(email);
    UI.clearFieldError(password);

    if(!email.value.trim()){ UI.showFieldError(email, 'Email is required'); return; }
    if(!password.value.trim()){ UI.showFieldError(password, 'Password is required'); return; }

    const student = { email: email.value, password: password.value };

    try {
        UI.setLoading(btn, true, 'Logging in...');

        const response = await axios.post(
            "/api/auth/login",
            student
        );

        UI.showToast('success', response.data.message);

        localStorage.setItem("token", response.data.token);

        setTimeout(()=> window.location.href = "dashboard.html", 700);

    } catch (error) {
        if (error.response) {
            UI.showToast('error', error.response.data.message || 'Login failed');
        } else {
            UI.showToast('error', 'Server not running.');
        }
    } finally {
        UI.setLoading(btn, false);
    }

});

const _adminLoginForm = document.getElementById("adminLoginForm");
if(_adminLoginForm){
    _adminLoginForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        const username = document.getElementById('username');
        const password = document.getElementById('password');
        const btn = document.getElementById('adminLoginBtn');

        try {
            UI.setLoading(btn, true, 'Logging in...');

            const admin = { username: username.value, password: password.value };

            const response = await axios.post(
                "/api/auth/admin/login",
                admin
            );

            UI.showToast('success', response.data.message);

            setTimeout(()=> window.location.href = "adminDashboard.html", 700);

        } catch (error) {

            UI.showToast('error', 'Invalid Username or Password');

        } finally {
            UI.setLoading(btn, false);
        }

    });
}

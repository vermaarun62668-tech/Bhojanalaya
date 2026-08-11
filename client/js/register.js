const form = document.getElementById("registerForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const hostel_block = document.getElementById('hostel_block');
    const room_number = document.getElementById('room_number');
    const btn = document.getElementById('registerBtn');

    [name,email,password,hostel_block,room_number].forEach(f=>UI.clearFieldError(f));

    if(!name.value.trim()){ UI.showFieldError(name,'Name is required'); return; }
    if(!email.value.trim()){ UI.showFieldError(email,'Email is required'); return; }
    if(!password.value.trim()){ UI.showFieldError(password,'Password is required'); return; }
    if(!hostel_block.value.trim()){ UI.showFieldError(hostel_block,'Hostel block is required'); return; }
    if(!room_number.value.trim()){ UI.showFieldError(room_number,'Room number is required'); return; }

    const student = {
        name: name.value,
        email: email.value,
        password: password.value,
        hostel_block: hostel_block.value,
        room_number: room_number.value
    };

    try {
        UI.setLoading(btn, true, 'Registering...');

        const response = await axios.post(
            "/api/auth/register",
            student
        );

        UI.showToast('success', response.data.message);

        setTimeout(()=> window.location.href = "login.html", 700);

    } catch (error) {

        if (error.response) {
            UI.showToast('error', error.response.data.message || 'Registration failed');
        } else {
            UI.showToast('error', 'Server not running.');
        }

    } finally {
        UI.setLoading(btn, false);
    }

});

const _menuForm = document.getElementById("menuForm");
if(_menuForm){
    _menuForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        const menu = {
            breakfast: document.getElementById("breakfast").value,
            lunch: document.getElementById("lunch").value,
            snacks: document.getElementById("snacks").value,
            dinner: document.getElementById("dinner").value
        };

        try {

            const response = await axios.put(
                "/api/admin/menu",
                menu
            );

            UI.showToast('success', response.data.message);

            document.getElementById("menuForm").reset();

        } catch (error) {

            console.log(error);

            UI.showToast('error', 'Menu update failed.');

        }

    });
}

async function loadMenu() {

    try {

        const response = await axios.get(
            "/api/menu/today"
        );

        const menu = response.data;

        document.getElementById("breakfast").innerText = menu.breakfast;
        document.getElementById("lunch").innerText = menu.lunch;
        document.getElementById("snacks").innerText = menu.snacks;
        document.getElementById("dinner").innerText = menu.dinner;

    } catch (error) {

        console.log(error);

        UI.showToast('error', "Unable to load today's menu.");

    }

}

loadMenu();

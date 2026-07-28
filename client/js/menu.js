document.getElementById("menuForm").addEventListener("submit", async (e) => {

    e.preventDefault();

    const menu = {

        breakfast: document.getElementById("breakfast").value,
        lunch: document.getElementById("lunch").value,
        snacks: document.getElementById("snacks").value,
        dinner: document.getElementById("dinner").value

    };

    try {

        const response = await axios.put(
            "http://localhost:5000/api/admin/menu",
            menu
        );

        alert(response.data.message);

        document.getElementById("menuForm").reset();

    } catch (error) {

        console.log(error);

        alert("Menu update failed.");

    }

});
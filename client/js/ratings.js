async function loadRatings() {

    try {

        const response = await axios.get(
    "http://localhost:5000/api/ratings"
);
        const ratings = response.data;

        const tbody = document.querySelector("#ratingTable tbody");

        ratings.forEach(rating => {

            tbody.innerHTML += `
                <tr>
                    <td>${rating.name}</td>
                    <td>${rating.meal_type}</td>
                    <td>${rating.rating} ⭐</td>
                    <td>${new Date(rating.created_at).toLocaleDateString()}</td>
                </tr>
            `;

        });

    } catch (error) {

        console.log(error);

        alert("Unable to load ratings.");

    }

}

loadRatings();
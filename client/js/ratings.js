async function loadRatings() {

    try {

        const response = await axios.get(
    "/api/ratings"
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

        UI.showToast('error', 'Unable to load ratings.');

    }

}

loadRatings();

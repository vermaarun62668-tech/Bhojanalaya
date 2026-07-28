document.getElementById("ratingForm").addEventListener("submit", async (e) => {

    e.preventDefault();

    const meal_type = document.getElementById("meal_type").value;
    const rating = document.getElementById("rating").value;

    try {

        const response = await axios.post(
            "http://localhost:5000/api/ratings",
            {
                student_id: 1,
                menu_id: 1,
                meal_type,
                rating
            }
        );

        alert(response.data.message);

        document.getElementById("ratingForm").reset();

    } catch (error) {

        console.log(error);

        alert("Rating submission failed.");

    }

});
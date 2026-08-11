const _ratingForm = document.getElementById("ratingForm");
if(_ratingForm){
    _ratingForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        const meal_type = document.getElementById("meal_type");
        const rating = document.getElementById("rating");
        const btn = document.getElementById('ratingBtn');

        UI.clearFieldError(meal_type);
        UI.clearFieldError(rating);

        if(!meal_type.value){ UI.showFieldError(meal_type, 'Please select a meal type'); return; }
        if(!rating.value){ UI.showFieldError(rating, 'Please select a rating'); return; }

        try {
            UI.setLoading(btn, true, 'Submitting...');

            const response = await axios.post(
                "/api/ratings",
                {
                    student_id: 1,
                    menu_id: 1,
                    meal_type: meal_type.value,
                    rating: rating.value
                }
            );

            UI.showToast('success', response.data.message);

            document.getElementById("ratingForm").reset();

        } catch (error) {

            console.log(error);

            UI.showToast('error', 'Rating submission failed.');

        } finally {
            UI.setLoading(btn, false);
        }

    });
}

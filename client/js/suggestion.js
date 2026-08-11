document.getElementById("suggestionForm").addEventListener("submit", async (e) => {

    e.preventDefault();

    const text = document.getElementById('suggestion_text');
    const btn = document.getElementById('suggestionBtn');

    UI.clearFieldError(text);

    if(!text.value.trim()){ UI.showFieldError(text, 'Please enter a suggestion'); return; }

    const suggestion = { student_id: 1, suggestion_text: text.value };

    try {
        UI.setLoading(btn, true, 'Submitting...');

        const response = await axios.post(
            "/api/suggestions",
            suggestion
        );

        UI.showToast('success', response.data.message);

        document.getElementById("suggestionForm").reset();

    } catch (error) {

        console.log(error);

        UI.showToast('error', 'Suggestion submission failed.');

    } finally {
        UI.setLoading(btn, false);
    }

});

document.getElementById("suggestionForm").addEventListener("submit", async (e) => {

    e.preventDefault();

    const suggestion = {
        student_id: 1,
        suggestion_text: document.getElementById("suggestion_text").value
    };

    try {

        const response = await axios.post(
            "http://localhost:5000/api/suggestions",
            suggestion
        );

        alert(response.data.message);

        document.getElementById("suggestionForm").reset();

    } catch (error) {

        console.log(error);

        alert("Suggestion submission failed.");

    }

});
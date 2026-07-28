async function loadSuggestions() {

    try {

        const response = await axios.get(
            "http://localhost:5000/api/suggestions"
        );

        const suggestions = response.data;

        const tbody = document.querySelector("#suggestionTable tbody");

        suggestions.forEach(s => {

            tbody.innerHTML += `
                <tr>
                    <td>${s.name}</td>
                    <td>${s.suggestion_text}</td>
                    <td>${new Date(s.created_at).toLocaleDateString()}</td>
                </tr>
            `;

        });

    } catch (error) {

        console.log(error);

        alert("Unable to load suggestions.");

    }

}

loadSuggestions();
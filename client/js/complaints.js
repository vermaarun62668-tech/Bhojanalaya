async function loadComplaints() {

    try {

        const response = await axios.get(
            "/api/complaints"
        );

        const complaints = response.data;

        const tbody = document.querySelector("#complaintTable tbody");

        complaints.forEach(c => {

            tbody.innerHTML += `
                <tr>
                    <td>${c.is_anonymous ? "Anonymous" : c.name}</td>
                    <td>${c.complaint_text}</td>
                    <td>${c.is_anonymous ? "Yes" : "No"}</td>
                    <td>${c.status}</td>
                    <td>${new Date(c.created_at).toLocaleDateString()}</td>
                </tr>
            `;

        });

    } catch (error) {

        console.log(error);

        UI.showToast('error', 'Unable to load complaints.');

    }

}

loadComplaints();

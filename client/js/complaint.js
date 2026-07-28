document.getElementById("complaintForm").addEventListener("submit", async (e) => {

    e.preventDefault();

    const complaint = {
        student_id: 1,
        menu_id: 1,
        complaint_text: document.getElementById("complaint_text").value,
        is_anonymous: document.getElementById("anonymous").checked
    };

    try {

        const response = await axios.post(
            "http://localhost:5000/api/complaints",
            complaint
        );

        alert(response.data.message);

        document.getElementById("complaintForm").reset();

    } catch (error) {

        console.log(error);

        alert("Complaint submission failed.");

    }

});
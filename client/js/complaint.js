const _complaintForm = document.getElementById("complaintForm");
if(_complaintForm){
    _complaintForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        const text = document.getElementById("complaint_text");
        const anon = document.getElementById("anonymous");
        const btn = document.getElementById('complaintBtn');

        UI.clearFieldError(text);

        if(!text.value.trim()){ UI.showFieldError(text, 'Please enter your complaint'); return; }

        const complaint = {
            student_id: 1,
            menu_id: 1,
            complaint_text: text.value,
            is_anonymous: anon.checked
        };

        try {
            UI.setLoading(btn, true, 'Submitting...');

            const response = await axios.post(
                "/api/complaints",
                complaint
            );

            UI.showToast('success', response.data.message);

            document.getElementById("complaintForm").reset();

        } catch (error) {

            console.log(error);

            UI.showToast('error', 'Complaint submission failed.');

        } finally {
            UI.setLoading(btn, false);
        }

    });
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('courseForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        const formData = new FormData(form);

        fetch('http://localhost:8081/api/courses/', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to add course');
            }
            return response.json();
        })
        .then(data => {
            console.log('Course added successfully:', data);
            // Optionally, display a success message or perform any other action
            form.reset(); // Clear the form after successful submission
        })
        .catch(error => {
            console.error('Error adding course:', error.message);
            // Optionally, display an error message to the user
        });
    });
});

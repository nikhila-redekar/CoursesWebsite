document.getElementById('addCourse').addEventListener('submit', function(event) {
    event.preventDefault();
    const courseName = document.getElementById('courseName').value;
    const instructor = document.getElementById('instructor').value;
    const department = document.getElementById('dept').value;
    const courseNum = document.getElementById('courseNum').value;
    const date = document.getElementById('startDate').value;
    const Days = document.getElementById('numdays').value;

    console.log(Days);
    if (title.trim() === '' || instructor.trim() === '' || department.trim() === '') {
        alert('Please enter data in all fields.');
        return;
    }
    
    fetch('http://localhost:8081/api/courses', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            
            dept: dept,
            courseNum: courseNum,
            courseName: courseName,
            instructor: instructor,
            startDate: date,
            numDays: Days

        

        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to add new course.');
        }
        return response.json();
    })
    .then(() => {
        alert('New course added successfully.');
        window.location.href = '/index.html';
    })
    .catch(error => console.error('Error adding new course:', error));
});

"use strict";

window.onload = function() {
    // Get reference to the courses table body
    let coursesTableBody = document.querySelector("#coursesTable tbody");

    // Send HTTP GET request to fetch course data
    fetch("http://localhost:8081/api/courses/")
        .then(response => {
            // Check if response is successful
            if (!response.ok) {
                throw new Error("Failed to fetch course data.");
            }
            return response.json();
        })
        .then(courses => {
            // Loop through each course and add data to the table
            courses.forEach(course => {
                let row = coursesTableBody.insertRow();
                row.innerHTML = `
                    <td>${course.dept}</td>
                    <td>${course.courseNum}</td>
                    <td>${course.courseName}</td>
                    <td>
                        <a href="details.html?cid=${course.id}">See details</a>
                    </td>
                `;
            });
        })
        .catch(error => {
            // Display error message if fetching course data fails
            console.error("Error:", error);
        });
        

};

"use strict";

window.onload = function(){
    const urlParams = new URLSearchParams(location.search);
    let cid = -1;
    if (urlParams.has("cid") === true)
    {
    cid = urlParams.get("cid")
    // call a method that fetches this course
    getCourse(cid);
    }

}

function getCourse(cid) {
    fetch('http://localhost:8081/api/courses/' + cid)
    .then(response => response.json())
    .then(course => {
    // this returns a single course!
    const container = 
        document.getElementById('courseList');

    // display one course property in a <p>
    const deptP = document.createElement('li');
    deptP.textContent = `Name: ${course.dept}`;
    container.appendChild(deptP);

    // repeat for each field you want to display
    const deptP1 = document.createElement('li');
    deptP1.textContent = `CourseNum: ${course.courseNum}`;
    container.appendChild(deptP1);

    const deptP2 = document.createElement('li');
    deptP2.textContent = `CourseName: ${course.courseName}`;
    container.appendChild(deptP2);

    const deptP3 = document.createElement('li');
    deptP3.textContent = `Instructor: ${course.instructor}`;
    container.appendChild(deptP3);

    const deptP4 = document.createElement('li');
    deptP4.textContent = `StartDate: ${course.startDate}`;
    container.appendChild(deptP4);

    const deptP5 = document.createElement('li');
    deptP5.textContent = `NumDays: ${course.numDays}`;
    container.appendChild(deptP5);

    })
    .catch(error => {
        // handle errors that occurred during the fetch request
    });
}
  

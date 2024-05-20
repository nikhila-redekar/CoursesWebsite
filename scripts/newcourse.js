"use strict";

let user = {};
let flag = 0;
window.onload = function(){
    let btn = document.getElementById("submitBtn");
    btn.addEventListener("click", validateUser);
}

function validateUser(){

    validateFields("courseNum","courseNumError");
    validateFields("courseName","courseNameError");
    validateFields("instructor","instructorError");
    validateFields("startDate","startDateError");
    validateFields("numDays","numDaysError");
    validateFields("dept","deptError");
    console.log(user);
    
}

function validateFields(id ,errorId){
    let courseVal = document.getElementById(`${id}`).value;
    let typeVal = document.getElementById(`${id}`).type;
    console.log(courseVal, typeVal);
    if(courseVal != null && courseVal != undefined && courseVal != '' && courseVal != 0)
    {
        if(typeVal === "number")
        {
            user[`${id}`] = Number(`${courseVal}`);
            flag++;
        }
        else if(typeVal === "date")
            {
                let coursedate = new Date(`${courseVal}`);
                let options = {month: 'short', day: 'numeric'};
                let date = coursedate.toLocaleDateString('en-US',options)
                console.log(`date ${date}`);
                user[`${id}`] = `${date}`;
                flag++;
            }
        else{
            user[`${id}`] = `${courseVal}`;
            flag++;
        }
        
    }
    else{
        let error = document.getElementById(`${errorId}`);
        error.innerHTML = `Enter valid ${id}`;
    }
    if(flag===6)
    {
        addUser();
    }
}

function addUser(){
    fetch('http://localhost:8081/api/courses',{
        method:"POST",
        headers:{"content-type":"application/json"},
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then (json => {
        let text = `Course ${json.id} has been added to course list successfully`;
        let message = document.getElementById("newCourseDiv");
        message.innerHTML = text;
    })
    .catch(err => {
        let text = `Error in adding Course`;
        let message = document.getElementById("newCourseDiv");
        message.innerHTML = text;
    });
}
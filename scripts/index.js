"use strict";

window.onload=function(){
    fetchCourse();
    console.log("index")
}

let table = document.getElementById("table");
function fetchCourse(){
    fetch(`http://localhost:8081/api/courses`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            for(let i=0; i<data.length; i++) {
                let row = table.insertRow(-1);
                let cell1 = row.insertCell(0);
                let cell2 = row.insertCell(1);
                let cell3 = row.insertCell(2);
                let cell4 = row.insertCell(3);
                let cell5 = row.insertCell(4);
                cell1.innerHTML = data[i].dept;
                cell2.innerHTML = data[i].courseNum;
                cell3.innerHTML = data[i].courseName;
                let anchor = document.createElement("a");
                anchor.href = `details.html?cid=${data[i].id}`;
                anchor.text = "See details";   
                cell4.appendChild(anchor);
                let anchor1 = document.createElement("a");
                anchor1.href = `confirmdelete.html?cid=${data[i].id}`;
                anchor1.text = "Delete Course";   
                cell5.appendChild(anchor1);

                }
            });
        }
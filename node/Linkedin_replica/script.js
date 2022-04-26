// const { json } = require("body-parser");

const modal = document.querySelector("#my-modal");
const modalBtn = document.querySelector("#modal-btn");
const closeBtn = document.querySelector(".close");
// Events
modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);

// Script for second modal
// Get DOM Elements
const modal2 = document.querySelector('#my-modal-2');
const modalBtn2 = document.querySelector('#modal-btn-2');
const closeBtn2 = document.querySelector('.close-2');

// Events
modalBtn2.addEventListener('click', openModal2);
closeBtn2.addEventListener('click', closeModal2);
window.addEventListener('click', outsideClick);

// script for fourth modal
const modal4 = document.querySelector('#my-modal-4');
const modalBtn4 = document.querySelector('#modal-btn-4');
const closeBtn4 = document.querySelector('.close-4');

// Events
modalBtn4.addEventListener('click', openModal4);
closeBtn4.addEventListener('click', closeModal4);
window.addEventListener('click', outsideClick);

// Open
function openModal2() {
  modal.style.display = 'block';
}

// Close
function closeModal2() {
  modal.style.display = 'none';
}
// script for third modal
const modal3 = document.querySelector('#my-modal-3');
const modalBtn3 = document.querySelector('#modal-btn-3');
const closeBtn3 = document.querySelector('.close-3');

// Events
modalBtn3.addEventListener('click', openModal3);
closeBtn3.addEventListener('click', closeModal3);
window.addEventListener('click', outsideClick);

// Open
function openModal3() {
  modal.style.display = 'block';
}

// Close
function closeModal3() {
  modal.style.display = 'none';
}


// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

// editing the details
function onBtnClick() {

  let x = document.forms["myForm1"]["name-first"].value;
  if (x == "") {
    alert("First Name must be filled out");
    return false;
  }
  let x1 = document.forms["myForm1"]["lname"].value;
  if (x1 == "") {
    alert("Last Name must be filled out");
    return false;
  }
  let x2 = document.forms["myForm1"]["emailname"].value;
  if (x2 == "") {
    alert("Email must be filled out");
    return false;
  }

  document.getElementById("mainName").innerHTML =
    document.getElementById("name-first").value +
    " " +
    document.getElementById("name-last").value;
  // to change email
  document.getElementById("email").innerHTML = "Email- " +
    document.getElementById("emailId").value;



}
function onBtnClick2() {
  let x = document.forms["myForm2"]["nameInsti"].value;
  if (x == "") {
    alert(" Name of Institution must be filled out");
    return false;
  }
  let x1 = document.forms["myForm2"]["nameofdegree"].value;
  if (x1 == "") {
    alert("Name of Degree must be filled out");
    return false;
  }
  let x2 = document.forms["myForm2"]["nameoffield"].value;
  if (x2 == "") {
    alert("Name of field must be filled out");
    return false;
  }
  // to change school name
  document.getElementById("education").innerHTML =
    document.getElementById("name-school").value;
  // to change degree
  document.getElementById("degree_name").innerHTML =
    document.getElementById("degree").value;
  // to change field of study
  document.getElementById("field_of_study").innerHTML =
    document.getElementById("fieldOfStudy").value;

}

// Open
function openModal() {
  modal.style.display = "block";
}
// Close
function closeModal() {
  modal.style.display = "none";
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}

// Open2
function openModal2() {
  modal2.style.display = "block";
}
// Close2
function closeModal2() {
  modal2.style.display = "none";
}

// Open3
function openModal3() {
  modal3.style.display = "block";
}
// Close3
function closeModal3() {
  modal3.style.display = "none";
}

function openModal4() {
  modal4.style.display = "block";
}
// Close3
function closeModal4() {
  modal4.style.display = "none";
}

// script for adding of skills

// let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

// addToDoButton.addEventListener('click');
function editSkills() {

  let x = document.forms["myForm3"]["inputField"].value;
  if (x == "") {
    alert("Skill must be filled out");
    return false;
  }

  var li = document.createElement('li');

  li.classList.add('li-styling');
  li.innerText = inputField.value;
  toDoContainer.appendChild(li);

}


// script for adding college details
// let addToDoButton2 = document.getElementById('addToDo2');

let todocontainer2 = document.getElementById('todocontainer2');
let nmInsti = document.getElementById('nameInsti');
let nameofdegree = document.getElementById('nameofdegree')
let nameoffield = document.getElementById('nameoffield');

function editEducation() {
  var h4 = document.createElement('h4');
  var p = document.createElement('p');
  var p2 = document.createElement('p');
  var br = document.createElement('br');

  // To give alert when empty string is passed
  let x = document.forms["myForm2"]["nameInsti"].value;
  if (x == "") {
    alert(" Name of Institution must be filled out");
    return false;
  }
  let x1 = document.forms["myForm2"]["nameofdegree"].value;
  if (x1 == "") {
    alert("Name of Degree must be filled out");
    return false;
  }
  let x2 = document.forms["myForm2"]["nameoffield"].value;
  if (x2 == "") {
    alert("Name of field must be filled out");
    return false;
  }

  h4.innerText = nmInsti.value;
  todocontainer2.appendChild(h4);

  p.innerText = nameofdegree.value;
  todocontainer2.appendChild(p);

  p2.innerText = nameoffield.value;
  todocontainer2.appendChild(p2) +
    todocontainer2.appendChild(br) +
    todocontainer2.appendChild(br);


  // nameInsti.value = "";
  // nameofdegree.value = "";
  // nameoffield.value = "";

  h4.classList.add('li2-styling');
  p.classList.add('li2-styling');
  p2.classList.add('li2-styling');



  h4.addEventListener('dblclick', function () {
    todocontainer2.removeChild(h4);
    todocontainer2.removeChild(p);
    todocontainer2.removeChild(p2);

  })
  p.addEventListener('dblclick', function () {
    todocontainer2.removeChild(h4);
    todocontainer2.removeChild(p);
    todocontainer2.removeChild(p2);

  })
  p2.addEventListener('dblclick', function () {
    todocontainer2.removeChild(h4);
    todocontainer2.removeChild(p);
    todocontainer2.removeChild(p2);

  })
}

function editExperince() {
  var h4 = document.createElement('h4');
  var p = document.createElement('p');
  var p2 = document.createElement('p')
  var br = document.createElement('br');

  // To give alert when empty string is passed
  let x = document.forms["myForm4"]["nameCompany"].value;
  if (x == "") {
    alert(" Name of Company must be filled out");
    return false;
  }
  let x1 = document.forms["myForm4"]["nameofjob"].value;
  if (x1 == "") {
    alert("Type of position must be filled out");
    return false;
  }
  let x2 = document.forms["myForm4"]["nameofdur"].value;
  if (x2 == "") {
    alert("Duration must be filled out");
    return false;
  }

  h4.innerText = nameCompany.value;
  toDoContainer3.appendChild(h4);

  p.innerText = nameofjob.value;
  toDoContainer3.appendChild(p);

  p2.innerText = nameofdur.value;
  toDoContainer3.appendChild(p2) +
    toDoContainer3.appendChild(br) +
    toDoContainer3.appendChild(br);

  h4.classList.add('li2-styling');
  p.classList.add('li2-styling');
  p2.classList.add('li2-styling');



  h4.addEventListener('dblclick', function () {
    toDoContainer3.removeChild(h4);
    toDoContainer3.removeChild(p);
    toDoContainer3.removeChild(p2);

  })
  p.addEventListener('dblclick', function () {
    toDoContainer3.removeChild(h4);
    toDoContainer3.removeChild(p);
    toDoContainer3.removeChild(p2);

  })
  p2.addEventListener('dblclick', function () {
    toDoContainer3.removeChild(h4);
    toDoContainer3.removeChild(p);
    toDoContainer3.removeChild(p2);

  })
}


// To Prevent Default
document.getElementById("submit").addEventListener("click", function (e) {
  e.preventDefault()
});

document.getElementById("email").innerHTML = window.localStorage.getItem('EmailId');



function add_name() {
  let firstName = document.getElementById("name-first").value;
  let lastName = document.getElementById("name-last").value;
  let email = localStorage.getItem("EmailId");

  fetch("http://localhost:3333/user/addName", {
    method: "PUT",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      "Email": email,
      "FirstName": firstName,
      "LastName": lastName
    })
  }).then(res => {
    res.json()
    // location.reload();

  })
    .catch((error) => {
      console.log(error);
      console.log("Entered the catch loop")
    })
};


function add_skills() {
  // let skill1 = document.getElementById("skill1").value;
  let skill = document.getElementById("inputField").value;
  // let skill2 = "demo skill 2"
  let email = localStorage.getItem("EmailId");



  fetch("http://localhost:3333/user/addSkill", {
    method: "PUT",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      "Email": email,
      "Skills": [skill]
    })
  })
    .then(res => res.json())
    .then((rav) => console.log(rav))
    .catch((err) => {
      console.log(err);
      console.log("entered the catch loop")

    })
}



function add_edu() {

  let nameInsti = document.getElementById("nameInsti").value;
  let typeOfDegree = document.getElementById("nameofdegree").value;
  let fieldOfStudy = document.getElementById("nameoffield").value;
  let email = localStorage.getItem("EmailId");


  fetch("http://localhost:3333/user/addEdu", {
    method: "PATCH",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      "Email": email,
      Education: [{
        "nameOfInstitution": nameInsti,
        "typeOfDegree": typeOfDegree,
        "fieldOfStudy": fieldOfStudy
      }]
    })
  })
    .then(res => res.json())
    .then((callback) => {
      console.log(callback);
      document.getElementById("nameInsti").value = "";
      document.getElementById("nameofdegree").value = "";
      document.getElementById("nameoffield").value = "";

    })

    // .then((rav) => {
    // document.getElementById("skills1").innerHTML = rav.Skills
    // })
    .catch((err) => {
      console.log(err);
      console.log("entered the catch loop")

    })
}

// function for adding experience


function add_exp() {

  let nameCompany = document.getElementById("nameCompany").value;
  let nameofjob = document.getElementById("nameofjob").value;
  let nameofdur = document.getElementById("nameofdur").value;
  let email = localStorage.getItem("EmailId");


  fetch("http://localhost:3333/user/addEmp", {
    method: "PATCH",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      "Email": email,
      Employment: [{
        "nameOfCompany": nameCompany,
        "titleOfJob": nameofjob,
        "duration": nameofdur
      }]
    })
  })
    .then(res => res.json())
    .then((callback) => {
      console.log(callback);
      document.getElementById("nameCompany").value = "";
      document.getElementById("nameofjob").value = "";
      document.getElementById("nameofdur").value = "";

    })

    // .then((rav) => {
    // document.getElementById("skills1").innerHTML = rav.Skills
    // })
    .catch((err) => {
      console.log(err);
      console.log("entered the catch loop")

    })
}



// Function for fetching skills while logging in.

let email = window.localStorage.getItem('EmailId')
console.log(email);


// Function for fetching name and email id while logging in.

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
    "Email": email
});

var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
};

fetch("http://localhost:3333/user/nameOfUser", requestOptions)
    .then(response => response.text())
    .then(result => {
        // console.log(result)

        let h3 = document.createElement('h3');
        a = h3.innerText = result.replaceAll('"', '');
        document.getElementById("mainName").innerHTML = a
    })
    .catch(error => console.log('error', error));






// to fetch the skills from database

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
    "Email": email
});

var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    // redirect: 'follow'
};

fetch("http://localhost:3333/user/skillOfUser", requestOptions)
    .then(response => response.json())
    .then((res) => {


        // console.log(res)
        // the above line will give all the array of skills in the console

        // res.forEach(item => console.log(item))
        res.forEach(item => {
            let li = document.createElement('li');
            let todocont = document.getElementById('toDoContainer');
            li.innerText = item;
            todocont.appendChild(li);
            li.classList.add('li-styling');
        })
    })
    .catch(error => console.log('error', error));



// To fetch education from the database for that user

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
    "Email": email
});

var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
};

fetch("http://localhost:3333/user/eduOfUser", requestOptions)
    .then(response => response.json())
    .then(result => {
        // console.log(result)
        // this above line will give you all the array of objects in the education

        for (var i = 0; i < result.length; i++) {
            for (var j = 0; j < 1; j++) {
                //     console.log(result[i].nameOfInstitution);
                //     console.log(result[i].typeOfDegree);
                //     console.log(result[i].fieldOfStudy)
                let h4 = document.createElement('h4')
                let p = document.createElement('p')
                let p2 = document.createElement('p')
                let br = document.createElement('br')

                let todocont2 = document.getElementById('todocontainer2');

                h4.innerText = result[i].nameOfInstitution;
                todocont2.appendChild(h4);
                p.innerText = result[i].typeOfDegree;
                todocont2.appendChild(p);
                p2.innerText = result[i].fieldOfStudy;
                todocont2.appendChild(p2);
                todocont2.appendChild(br);
                h4.classList.add('li2-styling');
                p.classList.add('li2-styling');
                p2.classList.add('li2-styling');


            }
        }

    })
    .catch(error => console.log('error', error));



// To fetch Employment and experience from the database for that user

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
    "Email": email
});

var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
};

fetch("http://localhost:3333/user/expOfUser", requestOptions)
    .then(response => response.json())
    .then(result => {
        // console.log(result)
        // this above line will give you all the array of objects in the education

        for (var i = 0; i < result.length; i++) {
            for (var j = 0; j < 1; j++) {
                //     console.log(result[i].nameOfInstitution);
                //     console.log(result[i].typeOfDegree);
                //     console.log(result[i].fieldOfStudy)
                let h4 = document.createElement('h4')
                let p = document.createElement('p')
                let p2 = document.createElement('p')
                let br = document.createElement('br')

                let todocont3 = document.getElementById('toDoContainer3');

                h4.innerText = result[i].nameOfCompany;
                todocont3.appendChild(h4);
                p.innerText = result[i].titleOfJob;
                todocont3.appendChild(p);
                p2.innerText = result[i].duration;
                todocont3.appendChild(p2);
                todocont3.appendChild(br);
                h4.classList.add('li2-styling');
                p.classList.add('li2-styling');
                p2.classList.add('li2-styling');


            }
        }

    })
    .catch(error => console.log('error', error));












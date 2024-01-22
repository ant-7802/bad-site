particlesJS.load('particles-js', '/assets/particles.json', function() {
    console.log("loaded super cool particle library that everyone uses for their sites :)))")
});

document.addEventListener("DOMContentLoaded", (event) => {    
    var topbar = document.querySelector("#topbar");
    fetch("/topbar.html")
    .then((response) => response.text())
    .then((data) => {
        topbar.innerHTML = data
    })
});


function login() {
    fetch('/log', {
     method: 'POST',
     headers: {
     'Content-Type': 'application/json'
      },
     body: JSON.stringify({
      username: document.querySelector("#Username").value,
      password: document.querySelector("#Password").value
     })
    })
    .then(response => response.data)
    .then(data => {
        console.log(data)
    })
  .catch(error => console.error(error));

}


function register() {
    fetch('/reggy', {
     method: 'POST',
     headers: {
     'Content-Type': 'application/json'
      },
     body: JSON.stringify({
      username: document.querySelector("#Username").value,
      password: document.querySelector("#Password").value,
      registercode: document.querySelector("#Registercode").value
     })
    })
    .then(response => response.data)
    .then(data => {
        console.log(data)
    })
  .catch(error => console.error(error));

}
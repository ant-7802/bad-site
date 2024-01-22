particlesJS.load('particles-js', '/assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
});

document.addEventListener("DOMContentLoaded", (event) => {    
    var topbar = document.querySelector("#topbar");
    fetch("/topbar.html")
    .then((response) => response.text())
    .then((data) => {
        topbar.innerHTML = data
    })
});
  
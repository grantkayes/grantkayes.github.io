const menu = document.getElementById('menu');
const aboutMe = document.getElementById('about');
const nav = document.getElementById('nav');
const experience = document.getElementById('experience');
const element = document.getElementById('drop');
const element2 = document.getElementById('drop2');
const element3 = document.getElementById('drop3');
const body = document.body;
const date = new Date();
const time = date.getHours();
const imgs = document.querySelectorAll("img");
const colorClasses = ['two', 'three', 'four'];
const japaneseLink = document.getElementById("nihongo");
let squareCounter = 0;

imgs.forEach(img => {
  img.addEventListener('click', function() {
    if (img.src.includes("react")) {
      window.location.href = "https://reactjs.org/";
    } else if (img.src.includes("node")) {
      window.location.href = "https://nodejs.org/";
    } else if (img.src.includes("rails")) {
      window.location.href = "https://rubyonrails.org/";
    } else if (img.src.includes("yarn")) {
      window.location.href = "https://yarnpkg.com/"
    } else if (img.src.includes("npm")) {
      window.location.href = "https://npmjs.com/";
    } else if (img.src.includes("python")) {
      window.location.href = "https://python.org/"
    } else if (img.src.includes("cplus")) {
      window.location.href = "https://isocpp.org/";
    } else if (img.src.includes("redis")) {
      window.location.href = "https://redis.io/"
    } else {
      window.location.href = "https://git-scm.org/";
    }
  });
});

if (18 <= time || time <= 6) {
  if (aboutMe.classList.contains("trans")) {
    document.getElementById('dark-button').innerHTML = "明"
  } else {
    document.getElementById('dark-button').innerHTML = "Light"
  }
  body.classList.add('dark');
} else {
  if (aboutMe.classList.contains("trans")) {
    document.getElementById('dark-button').innerHTML = "暗"
  } else {
    document.getElementById('dark-button').innerHTML = "Dark"
  }
  body.classList.add('light');
}

document.getElementById('dark-button').addEventListener('click', function (){
  if (body.classList.contains('light')) {
    body.classList.remove('light');
    body.classList.add('dark');
    document.getElementById('dark-button').innerHTML = "Light";
  } else {
    body.classList.remove('dark');
    body.classList.add('light');
    document.getElementById('dark-button').innerHTML = "Dark";
  }
});


const menu = document.getElementById('menu');
const aboutMe = document.getElementById('about');
const nav = document.getElementById('nav');
const experience = document.getElementById('experience');
const element = document.getElementById('drop');
const element2 = document.getElementById('drop2');
const element3 = document.getElementById('drop3');
const body = document.body;
const colorClasses = ['two', 'three', 'four'];

document.getElementById('dark-button').addEventListener('click', function (){
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    body.classList.add('light');
    document.querySelectorAll('button')[0].innerHTML = "Darken";
  } else { 
    body.classList.remove('light');
    body.classList.add('dark');
    document.querySelectorAll('button')[0].innerHTML = "Lighten";    
  }
});

menu.addEventListener('click', function () {
  if ([...this.classList].includes('two')) {
    this.classList.remove('two');
    aboutMe.classList.remove('two');
    nav.classList.remove('two');
    experience.classList.remove('two');
    this.classList.add('three');
    aboutMe.classList.add('three');
    nav.classList.add('three');
    experience.classList.add('three');
  } else if ([...this.classList].includes('three')) {
    this.classList.remove('three');
    aboutMe.classList.remove('three');
    nav.classList.remove('three');
    experience.classList.remove('three');
    this.classList.add('four');
    aboutMe.classList.add('four');
    nav.classList.add('four');
    experience.classList.add('four');
  } else if ([...this.classList].includes('four')) {
    this.classList.remove('four');
    aboutMe.classList.remove('four');
    nav.classList.remove('four');
    experience.classList.remove('four');
  } else {
    this.classList.add('two');
    aboutMe.classList.add('two');
    nav.classList.add('two');
    experience.classList.add('two');
  }
});

function openMenu() {
  console.log("clicked!");
  if (menu.classList.contains("card-one")) {
    menu.classList.replace("card-one", "card-one-translucent");
    body.classList.add('dark');
  } else {
    menu.classList.replace("card-one-translucent", "card-one");
  }
}

const menu = document.getElementById('menu');
const element = document.getElementById('drop');
const element2 = document.getElementById('drop2');
const element3 = document.getElementById('drop3');
const body = document.body;

element.addEventListener('mouseover', function () {
  element.classList.add('drop');
});

element.addEventListener('mouseout', function () {
  element.classList.remove('drop');
});

element2.addEventListener('mouseover', function () {
  element2.classList.add('drop');
});

element2.addEventListener('mouseout', function () {
  element2.classList.remove('drop');
});

element3.addEventListener('mouseover', function () {
  element3.classList.add('drop');
});

element3.addEventListener('mouseout', function () {
  element3.classList.remove('drop');
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

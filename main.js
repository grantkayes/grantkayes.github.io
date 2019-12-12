const menu = document.getElementById('menu');
const element = document.getElementById('drop');
console.log(element);
const body = document.body;

menu.addEventListener('click', openMenu);
element.addEventListener('mouseover', function () {
  element.classList.add('drop');
});

element.addEventListener('mouseout', function () {
  element.classList.remove('drop');
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

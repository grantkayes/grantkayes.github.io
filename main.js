const menu = document.getElementById('menu');

menu.addEventListener('click', openMenu);

function openMenu() {
  console.log("clicked!");
  if (menu.classList.contains("card-one")) {
    menu.classList.replace("card-one", "card-one-translucent");
  } else {
    menu.classList.replace("card-one-translucent", "card-one");
  }
}

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
const text = `
<p>
  グラント・ケイズです。今, シカゴ市で
  <a href="https://www.github.com/grantkayes" target="_blank">ソフトウェア開発</a>
  をやっています。
</p>
<p>
  それも、 <a href="https://www.linkedin.com/in/grant-kayes" target="_blank">履歴書コンサルタント</a> のサービスができます。
</p>
<p style="font-size: 18px !important;">BA Computer Science, Japanese @ Georgetown University</p>
`
const text2 = "暗"
let squareCounter = 0;

// japaneseLink.addEventListener('click', function() {
//   aboutMe.classList.add("trans");
//   aboutMe.innerHTML = text;
//   document.getElementById('dark-button').innerHTML = text2;
// });


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

menu.addEventListener('mouseover', function () {
  if ([...this.classList].includes('two')) {
    this.classList.remove('two');
    aboutMe.classList.remove('two');
    nav.classList.remove('two');
    experience.classList.remove('two');
    this.classList.add('three');
    aboutMe.classList.add('three');
    nav.classList.add('three');
    experience.classList.add('three');
    squareCounter = squareCounter + 1;
  } else if ([...this.classList].includes('three')) {
    this.classList.remove('three');
    aboutMe.classList.remove('three');
    nav.classList.remove('three');
    experience.classList.remove('three');
    this.classList.add('four');
    aboutMe.classList.add('four');
    nav.classList.add('four');
    experience.classList.add('four');
    squareCounter = squareCounter + 1;
  } else if ([...this.classList].includes('four')) {
    this.classList.remove('four');
    aboutMe.classList.remove('four');
    nav.classList.remove('four');
    experience.classList.remove('four');
    squareCounter = squareCounter + 1;
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

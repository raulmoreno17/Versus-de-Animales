
function checkRefresh()
{
  if (!sessionStorage.getItem("rollgame")) {
    sessionStorage.setItem("rollgame", "extra")

  } else(
    roll()
  )
}

function roll()
{
  var randomNumber1 = Math.floor(Math.random() * 10 + 1);
  var randomNumber2 = Math.floor(Math.random() * 10 + 1);
  document.querySelector("img.img1 ").setAttribute("src", "images/animal" + randomNumber1 + ".png");
  document.querySelector("img.img2 ").setAttribute("src", "images/animal" + randomNumber2 + ".png");

  if (randomNumber1 == randomNumber2) {
    document.querySelector(".winner").textContent = "Empate!⭕";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector(".winner").textContent = "Jugador 2 gana! 👑 ";
    document.querySelector("img.img2").classList.add("big");
    document.querySelector("img.img1").classList.add("small");
  } else if (randomNumber1 > randomNumber2) {
    document.querySelector(".winner").textContent = "👑 Jugador 1 gana!";
    document.querySelector("img.img1").classList.add("big");
    document.querySelector("img.img2").classList.add("small");
  }
}

function refresh(){
  window.location.reload();
}

document.querySelector("body").onload = checkRefresh();

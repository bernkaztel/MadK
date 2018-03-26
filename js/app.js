const home = document.getElementById("home");
const about = document.getElementById("about");

function getAbout(params) {
  home.classList.add("hidden-xs-up");
  about.classList.remove("hidden-xs-up");
}

function getHome(params) {
    home.classList.remove("hidden-xs-up");
    about.classList.add("hidden-xs-up");
  }
  
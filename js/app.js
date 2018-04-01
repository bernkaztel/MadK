const home = document.getElementById("home");
const about = document.getElementById("about");
const project = document.getElementById("project");
const got = document.getElementById("got");
const agora = document.getElementById("agora");
const furniture = document.getElementById("furniture");
const lab = document.getElementById("lab");
const ice = document.getElementById("ice");

function getAbout(params) {
  home.classList.add("hidden-xs-up");
  about.classList.remove("hidden-xs-up");
  project.classList.add("hidden-xs-up");
}

function getHome(params) {
    home.classList.remove("hidden-xs-up");
    about.classList.add("hidden-xs-up");
    project.classList.add("hidden-xs-up");
  }
  

  
function getProject(params) {
  home.classList.add("hidden-xs-up");
  about.classList.add("hidden-xs-up");
  project.classList.remove("hidden-xs-up");
}

function getGot(params) {
  got.classList.remove("hidden-xs-up");
  agora.classList.add("hidden-xs-up");
  lab.classList.add("hidden-xs-up");
  furniture.classList.add("hidden-xs-up");
  ice.classList.add("hidden-xs-up");
}

function getAgora(params) {
  got.classList.add("hidden-xs-up");
  agora.classList.remove("hidden-xs-up");
  lab.classList.add("hidden-xs-up");
  furniture.classList.add("hidden-xs-up");
  ice.classList.add("hidden-xs-up");
}

function getFurniture(params) {
  got.classList.add("hidden-xs-up");
  agora.classList.add("hidden-xs-up");
  lab.classList.add("hidden-xs-up");
  furniture.classList.remove("hidden-xs-up");
  ice.classList.add("hidden-xs-up");
}

function getLab(params) {
  got.classList.add("hidden-xs-up");
  agora.classList.add("hidden-xs-up");
  lab.classList.remove("hidden-xs-up");
  furniture.classList.add("hidden-xs-up");
  ice.classList.add("hidden-xs-up");
}

function getIce(params) {
  got.classList.add("hidden-xs-up");
  agora.classList.add("hidden-xs-up");
  lab.classList.add("hidden-xs-up");
  furniture.classList.add("hidden-xs-up");
  ice.classList.remove("hidden-xs-up");
}
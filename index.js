import footer from "./components/footer.js";
let mainFooter = document.getElementById("imported-footer");
mainFooter.innerHTML = footer();

import navbar from "./components/navbar.js";
let HeadNavbar = document.getElementById("MainNavbar");
HeadNavbar.innerHTML = navbar();

document.getElementById("Mumbai-btn").addEventListener("click", deleteMum);
function deleteMum() {
  document.getElementById("Mumbai-input").value = "";
}

let data = JSON.parse(localStorage.getItem("data")) || [];
let loginName = document.getElementById("login-span");
let detailName = document.getElementById("detail-span");
if (data.length > 0) {
  loginName.textContent = data[data.length - 1].firstName;
  detailName.textContent =
    "Have a nice journey" + " " + data[data.length - 1].firstName + "...";
}

let booking_Data = JSON.parse(localStorage.getItem("info")) || [];

document.getElementById("login-btn").addEventListener("click", loginFun);
function loginFun() {
  window.location = "login.html";
}
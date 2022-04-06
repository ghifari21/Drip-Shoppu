// if user haven't login yet
if (!sessionStorage.user) {
  window.location.replace("./assets/pages/login.html");
}

document.querySelector(".name").innerHTML = sessionStorage.user;

document.querySelector(".logout").addEventListener("click", () => {
  sessionStorage.removeItem("user");
  window.location.replace("./assets/pages/login.html");
});

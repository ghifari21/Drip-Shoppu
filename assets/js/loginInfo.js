// if user haven't login yet
if (!sessionStorage.user) {
  window.location.replace("./login.html");
}

document.querySelector(".name").innerHTML = sessionStorage.user;

document.querySelector(".logout").addEventListener("click", () => {
  sessionStorage.removeItem("user");
  sessionStorage.removeItem("uname");
  sessionStorage.removeItem("fname");
  sessionStorage.removeItem("sname");
  sessionStorage.removeItem("email");
  sessionStorage.removeItem("phone");
  sessionStorage.removeItem("cart");
  window.location.replace("./login.html");
});

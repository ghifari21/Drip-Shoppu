const loginForm = document.querySelector(".login-form");
const usernameElement = document.querySelector(".username");
const passElement = document.querySelector(".pass");
const registerBtn = document.querySelector(".register-btn");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (localStorage.user) {
    const username = usernameElement.value;
    const pass = passElement.value;

    const user = JSON.parse(localStorage.user);

    const isRegistered = user.some((item) => item.username === username && item.pass === pass);

    if (isRegistered) {
      let i = 0;
      let index = 0;
      while (true) {
        if (user[index].username === username) {
          i = index;
          break;
        } else {
          index++;
        }
      }
      sessionStorage.user = user[i].firstName + " " + user[i].surname;
      sessionStorage.fname = user[i].firstName;
      sessionStorage.sname = user[i].surname;
      sessionStorage.email = user[i].emailAddress;
      sessionStorage.phone = user[i].phone;
      sessionStorage.uname = user[i].username;

      window.location.replace("../../index.html");
    } else {
      alert("Username atau Password salah!");
    }
  } else {
    alert("Username atau Password salah!");
  }
  passElement.value = "";
});

registerBtn.addEventListener("click", () => {
  window.location.replace("./register.html");
});

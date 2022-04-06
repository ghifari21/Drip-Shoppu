const registerForm = document.querySelector(".register-form");
const loginBtn = document.querySelector(".login-btn");

if (!localStorage.user) {
  localStorage.user = JSON.stringify([]);
}

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstNameElement = document.querySelector("#firstname");
  const surnameElement = document.querySelector("#surname");
  const emailElement = document.querySelector("#emailaddress");
  const phoneElement = document.querySelector("#phone");
  const usernameElement = document.querySelector(".username");
  const passElement = document.querySelector(".pass");

  const firstName = firstNameElement.value;
  const surname = surnameElement.value;
  const emailAddress = emailElement.value;
  const phone = phoneElement.value;
  const username = usernameElement.value;
  const pass = passElement.value;

  const user = JSON.parse(localStorage.user);
  const isRegistered = user.some((item) => item.username === username);
  // checking if user already registered or not
  if (!isRegistered) {
    user.push({ firstName, surname, emailAddress, phone, username, pass });
    localStorage.user = JSON.stringify(user);
    alert("Register Telah Berhasil!");
    window.location.replace("./login.html");
  } else {
    alert("Username telah dipakai!");
  }

  firstNameElement.value = "";
  surnameElement.value = "";
  emailElement.value = "";
  phoneElement.value = "";
  usernameElement.value = "";
  passElement.value = "";
});

loginBtn.addEventListener("click", () => {
  window.location.replace("./login.html");
});

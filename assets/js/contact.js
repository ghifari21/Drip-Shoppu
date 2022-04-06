const form = document.querySelector(".form-contact");
const submitBtn = document.querySelector(".submit-btn");

if (!localStorage.msg) {
  localStorage.msg = JSON.stringify([]);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const fullnameElement = document.querySelector("#fullname");
  const emailElement = document.querySelector("#emailAdd");
  const messageElement = document.querySelector("#message");

  const fullname = fullnameElement.value;
  const emailAddress = emailElement.value;
  const message = messageElement.value;

  const msg = JSON.parse(localStorage.msg);
  msg.push({ fullname, emailAddress, message });
  localStorage.msg = JSON.stringify(msg);
  alert("Pesan Anda Telah Terkirim!");

  fullnameElement.value = "";
  emailElement.value = "";
  messageElement.value = "";
});

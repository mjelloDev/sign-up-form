window.addEventListener("load", function () {
  const pass = document.querySelector("#password");
  const confirmPass = document.querySelector("#confirmPass");
  const messages = document.getElementById("messages");

  pass.addEventListener("input", validatePassword);
  confirmPass.addEventListener("input", validatePassword);

  function validatePassword() {
    let pw1 = pass.value;
    let pw2 = confirmPass.value;

    if (pw1 !== pw2) {
      messages.textContent = "Passwords do not match";
      messages.style.color = "red";
      messages.style.display = "block";
    } else {
      messages.textContent = "";
      messages.style.display = "none";
    }
  }
});

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = form["firstname"].value;
  const lastName = form["lastname"].value;
  const email = form["email"].value;
  const password = form["password"].value;

  if (firstName === "") {
    showError("firstname", "First Name is required");
  } else {
    removeError("firstname");
  }
  if (lastName === "") {
    showError("lastname", "Last Name is required");
  } else {
    removeError("lastname");
  }
  if (email === "") {
    showError("email", "email is required");
  }
   else {
    removeError("email");
  }
  if (password === "") {
    showError("password", "Password is required");
  } else {
    removeError("password");
  }
});

function showError(field, message) {
  const errorIcon = form[field].parentNode.querySelector("img");
  const txt = form[field].parentNode.querySelector("p");
  form[field].classList.add("error");
  errorIcon.style.opacity = "1";
  txt.innerText = message;
  txt.style.opacity = "1";
}
function removeError(field) {
  const element = form[field];
  const errorIcon = element.parentNode.querySelector("img");
  const txt = element.parentNode.querySelector("p");
  element.classList.remove("error");
  errorIcon.style.opacity = "0";
  txt.innerText = "";
  txt.style.display = "0";
}

// function showErrorImg(field) {
//   const errorIcon = form[field].parentNode.querySelector("img");
//   errorIcon.style.opacity = "1";
// }
// function removeErrorIcon(field) {
//   const errorIcon = form[field].parentNode.querySelector("img");
//   errorIcon.style.opacity = "0";
// }
// function removeErrorFrom(field) {
//   const txt = form[field].parentNode.querySelector("p");
//   txt.innerText = "";
//   txt.style.display = "0";
// }
// function addErrorTo(field, message) {
//   const txt = form[field].parentNode.querySelector("p");
//   txt.innerText = message;
//   txt.style.opacity = "1";
// }

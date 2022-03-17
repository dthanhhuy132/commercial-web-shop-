export default function validatePasswordConfirm(form, password, rePassword) {
  const passwordConfirmEl = form.querySelector('[name="re-password"]');
  passwordConfirmEl.classList.remove("is-invalid");

  // if (rePassword.length == 0) {
  //   passwordConfirmEl.setCustomValidity("Please enter re-password");
  //   passwordConfirmEl.parentElement.nextElementSibling.style.display = "block";
  //   passwordConfirmEl.setCustomValidity("Please enter re-password");
  // }
  let inValidFeedback = passwordConfirmEl.parentElement.nextElementSibling;
  if (rePassword !== password) {
    passwordConfirmEl.classList.remove("is-valid");
    passwordConfirmEl.classList.add("is-invalid");

    inValidFeedback.textContent = "Password must match";
    inValidFeedback.style.display = "block";
  } else {
    passwordConfirmEl.classList.remove("is-invalid");
    if (rePassword != "") passwordConfirmEl.classList.add("is-valid");
    inValidFeedback.style.display = "none";
  }
}

export function checkPasswordConfirmEmpty(form, password, rePassword) {
  const passwordConfirmEl = form.querySelector('[name="re-password"]');
  let inValidFeedback = passwordConfirmEl.parentElement.nextElementSibling;

  // passwordConfirmEl.addEventListener("iput", (e) => {
  //   passwordConfirmEl.classList.add("is-invalid");
  // });

  if (rePassword == "") {
    passwordConfirmEl.classList.add("is-invalid");

    inValidFeedback.textContent = "Please enter re-password";
    inValidFeedback.style.display = "block";
    return false;
  }

  if (rePassword != "0" && password == rePassword) {
    return true;
  }
}

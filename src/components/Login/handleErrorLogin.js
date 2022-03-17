export function handleErrorLogin(dataLogin, dataRef, form) {
  const feedbackEl =
    form.querySelector('[name="password"]').parentElement.nextElementSibling;

  ["email", "password"]?.forEach((selector) => {
    const selectorEl = form.querySelector(`[name="${selector}"]`);
    selectorEl.classList.add("is-invalid");
    feedbackEl.style.display = "block";
    feedbackEl.textContent = "Please check your email and password";

    selectorEl.addEventListener("input", () => {
      const invalidEl = form.querySelectorAll(".is-invalid");
      invalidEl.forEach((item) => item.classList.remove("is-invalid"));
      feedbackEl.style.display = "none";
    });
  });
}

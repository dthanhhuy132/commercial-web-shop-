import * as yup from "yup";

let inputNameArr = ["name", "email", "phone", "password"];

function getDataSchema(allUser) {
  return yup.object().shape({
    name: yup.string().required("Please enter your name"),
    email: yup
      .string()
      .required("Please enter your email")
      .email("Please enter a valid email")
      .test("Must have .com", "Please enter a valid email", (value) => {
        return value.includes(".com");
      })
      .test(
        "Email is exist",
        "Email is exist or loged in with Google/Facebook account",
        (value) => {
          return !Boolean(allUser?.some((user) => user.email === value));
        }
      ),
    phone: yup
      .string()
      .required("Please enter phone")
      .test(
        "Phone is number",
        "Please enter your valid number phone",
        (value) => value != ""
      ),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password is too short - should be 8 chars minimum."),
  });
}

export async function validedateData(form, formValue) {
  inputNameArr.forEach((name) => {
    setFieldError(form.current, name, "");
  });

  try {
    const schema = getDataSchema();
    await schema.validate(formValue, { abortEarly: false });
  } catch (error) {
    let errorsLog = {};

    if (error.name === "ValidationError") {
      for (const validationError of error.inner) {
        const nameID = validationError.path;
        if (errorsLog[nameID]) {
          continue;
        }
        setFieldError(form.current, nameID, validationError.message);
        errorsLog[nameID] = true;
      }
    }
  }

  const isValid = form.current.checkValidity();
  if (!isValid) form.current.classList.add("was-validated");
  console.log("isValid", isValid);

  return isValid;
}

export function validateInput(form, allUser) {
  if (!form) return;
  inputNameArr.forEach((nameid) => {
    let inputEl = form.querySelector(`[name="${nameid}"]`);
    inputEl.addEventListener("input", (e) => {
      validateField(form, { [nameid]: e.target.value }, nameid, allUser);
    });
  });
}

function setFieldError(form, nameID, validationError) {
  let inputEl = form.querySelector(`[name=${nameID}]`);

  if (inputEl) {
    inputEl.setCustomValidity(validationError);
    setTextContent(inputEl.parentElement, ".invalid-feedback", validationError);
  }
}

async function validateField(form, inputValue, nameId, allUser) {
  try {
    setFieldError(form, nameId, "");
    const schema = getDataSchema(allUser);
    await schema.validateAt(nameId, inputValue);
  } catch (error) {
    setFieldError(form, nameId, error.message);
  }

  const field = form.querySelector(`[name="${nameId}"]`);
  if (field & !field.checkValidity()) {
    field.parentElement.classList.add("was-validated");
  }
}

function setTextContent(parentElement, name, validationError) {
  if (!parentElement) return;

  const element = parentElement.nextElementSibling;
  if (element) {
    element.textContent = validationError;
    element.style.display = "block";
  }
}

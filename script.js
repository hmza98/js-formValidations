const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cnfrmPassword = document.getElementById("cnfrmPassword");
const checkbox = document.getElementById("checkbox");
const errorMsg = document.getElementById("error-msg");

const signUp = (e) => {
  e.preventDefault();

  if (
    firstName.value === "" ||
    lastName.value === "" ||
    email.value === "" ||
    password === "" ||
    cnfrmPassword === ""
  ) {
    errorMsg.innerHTML = "Please Enter all the credentials";
  } else if (emailValidation(email.value) === false) {
    errorMsg.innerHTML = "Invalid Email Entered";
  } else if (passLengthValidation(password.value) === false) {
    errorMsg.innerHTML = "Password should be greater than 6 character";
  } else if (passwordValidation(password.value, cnfrmPassword.value) == false) {
    errorMsg.innerHTML = "Password does not match";
  } else if (checkbox.checked === false) {
    errorMsg.innerHTML = "To create account, you must agree with terms";
  } else {
    alert("Account Created");
    location.reload();
  }
};

const emailValidation = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const passLengthValidation = (password) => {
  if (password.length <= 6) {
    return false;
  }
  return true;
};
const passwordValidation = (password, cnfrmpassword) => {
  if (password === cnfrmpassword) {
    return true;
  }
  return false;
};

form.addEventListener("submit", signUp);

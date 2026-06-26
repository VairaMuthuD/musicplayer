const users = ["Deepu", "Vaira", "VairaMuthu", "Chezhiyan", "Sammy"];

const userEl = document.getElementById("username");
const forms = document.getElementById("forms");

const usertags = document.createElement("h2");
usertags.id = "tags";

usertags.style.color = "Red";
usertags.textContent = "Username already Taken";

userEl.addEventListener("input", function () {
  let newUser = userEl.value;

  let userCheck = users.find(
    (item) => newUser.toLowerCase() == item.toLowerCase(),
  );

  if (userCheck) {
    forms.appendChild(usertags);
  } else {
    if (document.getElementById("tags")) {
      forms.removeChild(usertags);
    }
  }

  console.log(userCheck);
});

const passwordEl = document.getElementById("password");

const submitBtn = document.getElementById("btn");

const passtags = document.getElementById("passtag");

passwordEl.addEventListener("input", function () {
  let countAdd = 0;
  const count = 0;

  console.log(passwordEl.value);

  let test1 = /[a-z]/;
  let test2 = /[A-Z]/;
  let test3 = /[0-9]/;
  let test4 = /[!@#$%^&*]/;

  let countCheck1 = test1.test(passwordEl.value);
  console.log(countCheck1);
  if (countCheck1) {
    console.log("countcheck:1");
    countAdd += 1;
  }
  let countCheck2 = test2.test(passwordEl.value);
  if (countCheck2) {
    console.log("countcheck:2");
    countAdd += 1;
  }

  let countCheck3 = test3.test(passwordEl.value);
  if (countCheck3) {
    console.log("countcheck:3");
    countAdd += 1;
  }

  let countCheck4 = test4.test(passwordEl.value);
  if (countCheck4) {
    console.log("countcheck:4");
    countAdd += 1;
  }

  console.log(countAdd);

  if (countAdd > 3) {
    passtags.innerText = "Strong";
    passtags.style.color = "Green";
  }
  if (countAdd >= 2 && countAdd <= 3) {
    passtags.innerText = "Medium";
    passtags.style.color = "Yellow";
  }
  if (countAdd < 2) {
    passtags.innerText = "Weak";
    passtags.style.color = "Red";
  }
});

const handlePass = document.getElementById("handlePass");
const pswd = document.getElementById("password")
let togglePassword = true;

handlePass.addEventListener("click", function () {
 
    // comsole.log(handlePass)

  console.log(togglePassword);

  if (togglePassword) {
    pswd.type = "text";
    togglePassword = false;
    handlePass.innerText = "Hide"
    // passwordEl.value = secretPass;
  } else {
    pswd.type = "password";
    togglePassword = true;
    handlePass.innerText = "Show"
    // passwordEl.value = showPass;
  }
});
